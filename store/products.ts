import { defineStore } from 'pinia'
import { IProduct, IProductDto } from "~/types/Product";
import { ReturnWithStatus } from "~/types/Utils";

const BASE_URL = "http://192.168.0.2:8000"

const ROUTES = {
    products: BASE_URL + "/api/v1/products",
}
export const useProductsStore = defineStore('cardsStore', () => {
    const products: Ref<Map<number, IProduct>> = ref(new Map<number, IProduct>())

    const loadAll = async (offset: number, limit: number): Promise<boolean> => {
        const { data, error} = await useFetch<IProduct[]>(ROUTES.products, {
            method: "GET",
            params: {
                offset: offset,
                limit: limit,
            }
        })

        if (error.value) {
            //alert("Ошибка смотри в консоль")
            console.log(error.value)
            return false
        }

        if (data.value) {
            products.value.clear()
            for (const p of data.value) {
                products.value.set(p.id, p)
            }
        }
        return true
    }

    const loadProduct = async (id: number): Promise<boolean> => {
        const { data, error } = await useFetch<IProduct>(ROUTES.products, {
            method: "GET",
            params: {
                id: id,
            }
        })

        if (error.value) {
            //alert("Ошибка смотри в консоль")
            console.log(error.value)
            return false
        }

        if (data.value) {
            products.value.set(data.value.id, data.value)
            return true
        }

        return false
    }

    const getProduct = async (id: number): Promise<ReturnWithStatus<IProduct>> => {
        let p = products.value.get(id)
        if (!p) {
            await loadProduct(id)
            p = products.value.get(id)
            if (!p) {
                return { ok: false }
            }
        }

        return { ok: true, data: p }
    }

    const getDefaultProduct = (): IProduct => {
        return {
            id: 0,
            name: "unknown",
            images: [],
            price: 0,
            stock: 0,
            discount: 0,
            description: "",
            characteristics: [],
            category: "",
            brand: ""
        }
    }

    const getDefaultImage = (): string => {
        return "https://www.eclosio.ong/wp-content/uploads/2018/08/default.png"
    }

    const addCard = async (card: IProductDto): Promise<boolean> => {
        const { error } = await useFetch(ROUTES.products, {
            method: 'POST',
            body: card,
        })

        if (error.value) {
            //alert("Ошибка смотри в консоль")
            console.log(error.value)
            return false
        }

        return true
    }

    const deleteCard = async (id: number): Promise<boolean> => {
        const { error } = await useFetch(ROUTES.products, {
            method: 'DELETE',
            params: {
                id: id
            }
        })

        if (error.value) {
            //alert("Ошибка смотри в консоль")
            console.log(error)
            return false
        }

        return true
    }

    return {
        products,
        loadAll,
        getProduct,
        getDefaultProduct,
        getDefaultImage,
        addCard,
        deleteCard,
    }
})