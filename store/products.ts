import { defineStore } from 'pinia'
import { IProduct } from "~/types/Product";
import { ReturnWithStatus } from "~/types/Utils";
import { ref, Ref } from "vue";
import { useProductsApi } from "~/api/products";
import { useLocalStorage } from "@vueuse/core";

export const useProductsStore = defineStore('cardsStore', () => {
    const productsMap: Ref<Map<number, IProduct>> = ref(new Map<number, IProduct>())
    const api = useProductsApi()
    const favourites = useLocalStorage<Set<number>>("favourites", new Set<number>())

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

    const loadProduct = async (id: number): Promise<boolean> => {
        const product = await api.getById(id)
        if (product.id) {
            productsMap.value.set(product.id, product)
        }
        return !!product.id
    }

    const getProduct = async (id: number): Promise<ReturnWithStatus<IProduct>> => {
        await loadAll(0, 100)
        let p = productsMap.value.get(id)
        if (!p) {
            await loadProduct(id)
            p = productsMap.value.get(id)
            if (!p) {
                return { ok: false }
            }
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

    return {
        productsMap,
        loadAll,
        getProduct,
        countProductNumber,
        toggleFavourite,
        isFavourite,
        favourites,
    }
})