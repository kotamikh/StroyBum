import { ref } from "vue"
import { Ref } from "vue/dist/vue"
import { defineStore } from "pinia"
import { IBrand, ICategory } from "~/types/subjectsBrands"
import { useSubjectsBrandsApi } from "~/api/subjects-brands";

export const useSubjectsBrandsStore = defineStore("categoriesBrands", () => {
    const api = useSubjectsBrandsApi()
    const allBrands = ref<Array<IBrand>>([])
    const brandsBySubject = ref<Array<IBrand>>([])
    const subjectsMap: Ref<Map<number, ICategory>> = ref(new Map<number, ICategory>())
    
    const loadAllSubjects = async (): Promise<Map<number, ICategory>> => {
        const subjects = await api.getAllSubjects()
        if (subjects.length > 0) {
            subjectsMap.value.clear()
            for (const s of subjects) {
                subjectsMap.value.set(s.id, s)
            }
        }
        return subjectsMap.value
    }

    const findSubjectName = (id: number) => {
      const subjectName: string | undefined = subjectsMap.value.get(id)?.name
      if (subjectName) {
        return subjectName
      }
      else {
          return 'unknown'
      }
    }

    const findSubjectId = (subjectName: string): number => {
        for (let [subjectId, subject] of subjectsMap.value.entries()) {
            if (subject.name === subjectName) {
                return subjectId
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
        getBrand,
        allBrands,
        subjectsMap,
        findSubjectId,
        loadAllBrands,
        brandsBySubject,
        loadAllSubjects,
        findSubjectName,
        getBrandsBySubject
    }
})