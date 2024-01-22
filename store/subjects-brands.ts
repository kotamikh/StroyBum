import { ref } from "vue"
import { Ref } from "vue/dist/vue"
import { defineStore } from "pinia"
import { IBrand, ICategoryExtended } from "~/types/subjectsBrands"
import { useSubjectsBrandsApi } from "~/api/subjects-brands";

export const useSubjectsBrandsStore = defineStore("categoriesBrands", () => {
    const api = useSubjectsBrandsApi()
    const allBrands = ref<Array<IBrand>>([])
    const brandsBySubject = ref<Array<IBrand>>([])
    const subjectsMap: Ref<Map<number, ICategoryExtended>> = ref(new Map<number, ICategoryExtended>())
    
    const loadAllSubjects = async (): Promise<Map<number, ICategoryExtended>> => {
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

    const findSubjectById = (subjectId: number): ICategoryExtended => {
        const subject = subjectsMap.value.get(subjectId)
        if (subject) {
            return subject
        } else {
            return api.getDefaultSubject()
        }
    }

    const findParentalSubjects = (): Array<ICategoryExtended> => {
        let parentalSubjects = []
        for (let [key, value] of subjectsMap.value) {
            if (value.parentId === 0) {
                parentalSubjects.push(value)
            }
        }
        return parentalSubjects
    }

    const findChildrenSubjects = (childrenIds: Array<number>): ICategoryExtended[] => {
        const childrenSubjects = []
        if (childrenIds.length !== 0) {
            for (let c = 0; c < childrenIds.length; c++) {
                let child = useSubjectsBrandsStore().subjectsMap.get(childrenIds[c])
                if (child){
                    childrenSubjects.push(child)
                }
            }
            return childrenSubjects
        }
        return []
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
        loadAllBrands,
        brandsBySubject,
        loadAllSubjects,
        findSubjectName,
        findSubjectById,
        getBrandsBySubject,
        findParentalSubjects,
        findChildrenSubjects
    }
})