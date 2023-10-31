import { defineStore } from "pinia"
import { IBrand, ICategory, ICategoryDto } from "types/categoriesBrands"
import { ref } from "vue"
import { Ref } from "vue/dist/vue"

const BASE_URL = "http://localhost:8000"

const ROUTES = {
    subjects: BASE_URL + "/api/v1/subjects",
    brands: BASE_URL + "/api/v1/brands",
    brandsbysubject: BASE_URL + '/api/v1/brands-by-subject'
}

export const useCategoriesBrandsStore = defineStore("categoriesBrands", () => {
    const categories: Ref<Map<number, ICategory>> = ref(new Map<number, ICategory>());
    const brands = ref<Array<IBrand>>([])
    const brandsBySubject = ref<Array<IBrand>>([])

    const getAllCategories = (): Map<number, ICategory> => {
        fetch(ROUTES.subjects, {
            method: "GET",
        }).then((response) => {
            response.json().then((res) => {
                categories.value.clear()
                for (const r of res) {
                    categories.value.set(r.id, r);
                }
            }).catch((e) => {
                console.log("Error: " + e.message)
                console.log(e.response)
            })
        })
        return categories.value
    }

    const insertCategory = (category: ICategoryDto) => {
        fetch(ROUTES.subjects, {
            method: "POST",
            body: JSON.stringify(category)
        }).then(() => {
            getAllCategories()
            console.log(JSON.stringify(category))
        })
    }

    const findCategoryId = (categoryName: string) => {
        let categories = getAllCategories()
        for (let [key, value] of categories.entries()) {
            if (value.name === categoryName) {
                return key
            }
        }
    }

    const deleteCategory = (id: number) => {
        fetch(ROUTES.subjects + `?id=${id}`, {
            method: "DELETE"
        }).then(() =>  getAllCategories())
            .catch((e) => {
                console.log("Error: " + e.message);
                console.log(e.response);
            })
    };

    const getAllBrands = (): IBrand[] => {
        fetch(ROUTES.brands, {
            method: "GET",
        }).then((response) => {
            response.json().then((res) => {
                brands.value = res
                return brands.value
            })
        })
        return []
    }

    const getBrand = (brandId: number): IBrand => {
        return brands.value.find(b => b.id === brandId)!
    }

    const insertBrand = (name: string) => {
        fetch(ROUTES.brands, {
            method: "POST",
            body: name
        }).then(() => {
            getAllBrands()
        })
    }

    const getBrandsBySubject = (category: string, brands: IBrand[]): IBrand[] => {
        let categories = getAllCategories()
        for (let [key, value] of categories.entries()) {
            if (value.name === category) {
                fetch(
                    ROUTES.brandsbysubject +
                    `?subject_id=${ key }`,
                    {
                        method: "GET",
                    }).then((response) => {
                    response.json().then(async (res) => {
                        brandsBySubject.value = []
                        for (let r = 0; r < res.length; r++) {
                            if (!brands.find(b => b.id === res[r])) {
                              brandsBySubject.value.push(getBrand(res[r]))
                            }
                        }
                        return brandsBySubject.value
                    })
                })
            }
        }
        return []
    }


    return {
        categories,
        brands,
        brandsBySubject,
        getAllCategories,
        insertCategory,
        findCategoryId,
        deleteCategory,
        getAllBrands,
        insertBrand,
        getBrandsBySubject
    };
});