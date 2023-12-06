import { useHttpGet } from "~/api/base";
import { IBrand, ICategory } from "~/types/subjectsBrands";

export type brandsBySubject = {
   category: string
}

const ROUTES = {
    subjects: "/api/v1/subjects",
    brands: "/api/v1/brands",
    brandsbysubject: '/api/v1/brands-by-subject'
}

const getAllSubjects = async (): Promise<ICategory[]>  => {
    const { data, error } = await useHttpGet<ICategory[]>({ url: ROUTES.subjects })
    if (data) {
        return data
    } else {
        // TODO: log error
        return []
    }
}

const getAllBrands = async (): Promise<IBrand[]>  => {
    const { data, error } = await useHttpGet<IBrand[]>({ url: ROUTES.brands })
    if (data) {
        return data
    } else {
        // TODO: log error
        return []
    }
}

const getBrandsBySubject = async (subject_id: number): Promise<number[]> => {
    const { data, error } = await useHttpGet<number[]>({ url: ROUTES.brandsbysubject,  params: { subject_id } })
    if (data) {
        return data
    } else {
        // TODO: log error
        return []
    }
}

export const useSubjectsBrandsApi = () => {
    return {
        getAllBrands,
        getAllSubjects,
        getBrandsBySubject
    }
}