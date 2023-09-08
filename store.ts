import { defineStore } from 'pinia'
import { IProduct } from "~/src/types/Product";

export const useCardsStore = defineStore('cardsStore', () => {
    const getAll = async () => {
        const response = await useFetch("http://192.168.0.2:8000/api/v1/products", {
            method: "GET",
            params: {
                offset: 0,
                limit: 30
            }
        })
        const target: Array<IProduct> = JSON.parse(JSON.stringify(response["data"]["value"]))
        products.value = target
        console.log(target)
    }
    const addCard = async () => {
        const response = await useFetch("http://192.168.0.2:8000/api/v1/products", {
            method: 'POST',
            body: {
                name: 'моня',
                images: ['https://sun9-80.userapi.com/impg/WNeSBWfpDvydNkWlLILByaOfZIj5dSzhA0QHNQ/G4QliPr8CX4.jpg?size=1255x1348&quality=95&sign=139ee0ee89ac1c668291e27337463fe0&type=album', 'https://sun9-39.userapi.com/impg/K3afhp2v5cTt0tWPVMS8gIkwhvO3p4ldQvsm5w/dFMsJDp5mSE.jpg?size=1620x2160&quality=95&sign=869cd60664fdd5cfad6e65e4488b6d72&type=album', 'https://sun9-62.userapi.com/impg/t7zEX05a1pERpV0sIPW8p2kyKO_g4g6oMRry4A/KxNkwRY6rmQ.jpg?size=1620x2160&quality=95&sign=84709194c9d2041c3c38f0b26a6fd3ab&type=album'],
                stock: 0,
                discount: 0,
                description: 'описание',
                characteristics: [
                    ["цвет", "черно-белый"],
                    ["размер", "нормальный"]
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
        getAll,
        addCard,
        deleteAll
    }
})