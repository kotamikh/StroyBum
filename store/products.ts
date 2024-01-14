import { ref, Ref } from "vue";
import { defineStore } from 'pinia'
import { IProduct } from "~/types/Product";
import { useLocalStorage } from "@vueuse/core";
import { useProductsApi } from "~/api/products";
import { ReturnWithStatus } from "~/types/Utils";

export const useProductsStore = defineStore('cardsStore', () => {
    const api = useProductsApi()
    const allProducts: Ref<Map<number, IProduct>> = ref(new Map<number, IProduct>())
    const currentProducts: Ref<Map<number, IProduct>> = ref(new Map<number, IProduct>())
    const favourites = useLocalStorage<Set<number>>("favourites", new Set<number>())
    const currentProductPage = useLocalStorage<IProduct>("currentProduct", api.getDefaultProduct)
    const cartQuantity = useLocalStorage<Map<number, number>>("cartQuantity", new Map<number, number>())

    const loadAll = async (offset: number, limit: number)=> {
        const products = await api.getAll({ offset, limit })
        if (products.length > 0) {
            allProducts.value.clear()
            for (const p of products) {
                allProducts.value.set(p.id, p)
            }
            return allProducts.value
        }
    }

    const loadWithConditions = async (offset: number, limit: number, subject?: number, brand?: number): Promise<Map<number, IProduct>> => {
        const products = await api.getAll({ offset, limit, subject, brand })
        currentProducts.value.clear()
        if (products.length > 0) {
            for (const p of products) {
                currentProducts.value.set(p.id, p)
            }
        }
        return currentProducts.value
    }

    const getProduct = (id: number): ReturnWithStatus<IProduct> => {
        let p = currentProducts.value.get(id)
        if (!p) {
          return { ok: false }
        }
        return { ok: true, data: p }
    }

    const countProductNumber = async (offset: number, limit: number, subject?: number, brand?: number)=> {
        const products = await api.getAll({ offset, limit, subject, brand })
        return products.length
    }

    const toggleFavourite = (id: number) => {
        if (isFavourite(id)) {
            favourites.value.delete(id)
        } else {
            favourites.value.add(id)
        }
    }

    const isFavourite = (id: number): boolean => {
        return favourites.value.has(id)
    }

    const addToCart = (id: number) => {
        cartQuantity.value.set(id, 1)
    }

    const deleteFromCart = async (id: number) => {
        cartQuantity.value.delete(id)
    }

    const isInCart = (id: number): boolean => {
        return cartQuantity.value.has(id)
    }

    return {
        loadAll,
        isInCart,
        addToCart,
        favourites,
        getProduct,
        isFavourite,
        allProducts,
        cartQuantity,
        deleteFromCart,
        toggleFavourite,
        currentProducts,
        countProductNumber,
        loadWithConditions,
        currentProductPage
    }
})