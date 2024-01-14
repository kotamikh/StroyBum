import { useHttpGet } from "~/api/base";
import { IBrand, ICategoryExtended } from "~/types/subjectsBrands";

export type brandsBySubject = {
   category: string
}

const ROUTES = {
    brands: "/api/v1/brands",
    subjects: "/api/v2/subjects",
    brandsbysubject: '/api/v1/brands-by-subject'
}

const getDefaultSubject = (): ICategoryExtended => {
    return {
        id: 0,
        name: 'unknown',
        image: '',
        parentId: 0,
        children: []
    }
}

const getAllSubjects = async (): Promise<ICategoryExtended[]>  => {
    const { data, error } = await useHttpGet<ICategoryExtended[]>({ url: ROUTES.subjects })
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
        getDefaultSubject,
        getBrandsBySubject
    }
}