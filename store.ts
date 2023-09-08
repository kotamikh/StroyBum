import { defineStore } from 'pinia'
import { IProduct } from "~/src/types/Product";

export const useCardsStore = defineStore('cardsStore', () => {
    const products: Ref<Array<IProduct>> = ref([])

    const getAll = async () => {
        const response = await useFetch("http://192.168.0.2:8000/api/v1/products", {
            method: "GET",
            params: {
                offset: 0,
                limit: 20
            }
        })
        const target: Array<IProduct> = JSON.parse(JSON.stringify(response["data"]["value"]))
        products.value = target
        console.log(target)
    }
    const addCard = async () => {
        await useFetch("http://192.168.0.2:8000/api/v1/products", {
            method: 'POST',
            body: {
                name: 'сайдинг',
                images: ['https://detinez.ru/_mod_files/ce_images/articles/generated/vynil-3_a24493cbcd23f345792e627e4d495440_500x334.jpg', 'https://start46.ru/wp-content/uploads/2019/07/uplast-stown-house-kirpich-bez-fasad.jpg'],
                stock: 1,
                discount: 5,
                description: 'описание',
                characteristics: [
                    ["цвет", "серый"],
                    ["размер", "2+2"]
                ]
            }
        })
        await getAll()
    }

    const deleteCard = async (id: number) => {
        await useFetch("http://192.168.0.2:8000/api/v1/products", {
            method: 'DELETE',
            params: {
                id: id
            }
        })
        await getAll()
    }

    const deleteAll = (start: number, end: number) => {
        while (start <= end) {
            deleteCard(start)
            start++
        }
    }

    return {
        products,
        getAll,
        addCard,
        deleteAll
    }
})