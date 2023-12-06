import { defineStore } from 'pinia'
import { IProduct } from "~/types/Product";
import { ReturnWithStatus } from "~/types/Utils";
import { ref, Ref } from "vue";
import { useProductsApi } from "~/api/products";
import { useLocalStorage } from "@vueuse/core";

export const useProductsStore = defineStore('cardsStore', () => {
    const api = useProductsApi()
    const productsMap: Ref<Map<number, IProduct>> = ref(new Map<number, IProduct>())
    const favourites = useLocalStorage<Set<number>>("favourites", new Set<number>())
    const cartQuantity = useLocalStorage<Map<number, number>>("cartQuantity", new Map<number, number>())

    const loadAll = async (offset: number, limit: number, subject?: number, brand?: number)=> {
        const products = await api.getAll({ offset, limit, subject, brand })
        if (products.length > 0) {
            productsMap.value.clear()
            for (const p of products) {
                productsMap.value.set(p.id, p)
            }
        }
        return productsMap.value
    }

    const getProduct = (id: number): ReturnWithStatus<IProduct> => {
        let p = productsMap.value.get(id)
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
        productsMap,
        cartQuantity,
        deleteFromCart,
        toggleFavourite,
        countProductNumber
    }
})