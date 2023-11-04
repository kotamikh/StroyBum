import { IProduct, IProductDto } from "~/types/Product";
import { useHttpGet, useHttpPost } from "~/api/base";

export type GetAllRequest = {
    offset: number,
    limit: number,
    subject?: number,
    brand?: number,
}

const ROUTES = {
    products: "/api/v1/products"
}

export const useProductsApi = () => {
    const getAll = async (request: GetAllRequest): Promise<IProduct[]> => {
        const params = new URLSearchParams({ offset: request.offset.toString(), limit: request.limit.toString() })
        if (request.subject) {
            params.append('subject', request.subject.toString())
        }
        if (request.brand) {
            params.append('brand', request.brand.toString())
        }

        const { data, error } = await useHttpGet<IProduct[]>({ url: ROUTES.products })
        if (data) {
            return data
        } else {
            // TODO: log error
            return []
        }
    }

    const getById = async (id: number): Promise<IProduct> => {
        const { data, error } = await useHttpGet<IProduct>({ url: ROUTES.products, params: { id } })
        if (data) {
            return data
        } else {
            // TODO: log error
            return getDefaultProduct()
        }
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
            subject: 0,
            brand: 0,
        }
    }

    const getDefaultImage = (): string => {
        return "https://www.eclosio.ong/wp-content/uploads/2018/08/default.png"
    }
}