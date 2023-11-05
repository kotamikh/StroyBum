import { defineStore } from 'pinia'
import { IProduct, IProductDto } from "~/types/Product";
import { ReturnWithStatus } from "~/types/Utils";
import { ref, Ref } from "vue";
import { useProductsApi } from "~/api/products";

const BASE_URL = "http://localhost:8000"

const ROUTES = {
    products: BASE_URL + "/api/v1/products",
}
export const useProductsStore = defineStore('cardsStore', () => {
    const productsMap: Ref<Map<number, IProduct>> = ref(new Map<number, IProduct>())
    const api = useProductsApi()

    const loadAll = async (offset: number, limit: number, subject?: number, brand?: number): Promise<boolean> => {
        const products = await api.getAll({ offset, limit, subject, brand })
        if (products.length > 0) {
            for (const p of products) {
                productsMap.value.set(p.id, p)
            }
        }

        return true
    }

    const loadProduct = async (id: number): Promise<boolean> => {
        const product = await api.getById(id)
        if (product.id) {
            productsMap.value.set(product.id, product)
        }

        return !!product.id
    }

    const getProduct = async (id: number): Promise<ReturnWithStatus<IProduct>> => {
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

    return {
        productsMap,
        loadAll: loadAll,
        getProduct,
    }
})