import { defineStore } from "pinia"
import { IBrand, ICategory } from "types/categoriesBrands"
import { ref } from "vue"
import { Ref } from "vue/dist/vue"
import { useCategoriesBrandsApi } from "~/api/categories-brands";

export const useCategoriesBrandsStore = defineStore("categoriesBrands", () => {
    const categoriesMap: Ref<Map<number, ICategory>> = ref(new Map<number, ICategory>());
    const allBrands = ref<Array<IBrand>>([])
    const brandsBySubject = ref<Array<IBrand>>([])
    const api = useCategoriesBrandsApi()

    const loadAllSubjects = async (): Promise<Map<number, ICategory>> => {
        const subjects = await api.getAllSubjects()
        if (subjects.length > 0) {
            categoriesMap.value.clear()
            for (const s of subjects) {
                categoriesMap.value.set(s.id, s)
            }
        }
        return categoriesMap.value
    }

    const getCategory = (id: number) => {

    }

    const findCategoryName = (id: number) => {
        return categoriesMap.value.get(id)?.name
    }

    const findCategoryId = (categoryName: string): number => {
        for (let [key, value] of categoriesMap.value.entries()) {
            if (value.name === categoryName) {
                return key
            }
        }
        return 0
    }

    const loadAllBrands = async (): Promise<Array<IBrand>> => {
        const brands = await api.getAllBrands()
        if (brands.length > 0) {
            allBrands.value = brands
            return allBrands.value
        }
        return []
    }

    const getBrand = async (brandId: number): Promise<IBrand> => {
        return allBrands.value.find(b => b.id === brandId)!
    }

    const getBrandsBySubject = async (subject_id: number): Promise<IBrand[]> => {
        const brandIds = await api.getBrandsBySubject(subject_id)
        if (brandIds.length > 0) {
            let brands: IBrand[] = []
            for (let b of brandIds) {
               brands.push(await getBrand(b))
            }
            brandsBySubject.value = brands
            return brandsBySubject.value
        }
        return []
    }

    return {
        categoriesMap,
        allBrands,
        brandsBySubject,
        loadAllSubjects,
        getCategory,
        findCategoryName,
        findCategoryId,
        loadAllBrands,
        getBrand,
        getBrandsBySubject
    };
});