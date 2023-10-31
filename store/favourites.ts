import { defineStore } from "pinia";
import { IProduct } from "~/types/Product";
import { ref } from "vue";
import { Ref } from "vue/dist/vue";
import { useProductsStore } from "~/store/products";

export const useFavouritesStore = defineStore('favsStore', () => {
    const favourites: Ref<IProduct[]> = ref([])

    const toggleFavourite = (productId: number) => {
      console.log(productId)
      if (!favourites.value.find(product => product.id === productId)) {
        let product = useProductsStore().products.get(productId)
          console.log(product)
        if (product) {
          favourites.value.push(product)
        }
      }
      console.log(favourites.value)

      if (favourites.value.find(product => product.id === productId)) {
        favourites.value.splice(productId, 1)
      }
    }

    const isFavourite = (productId: number) => {

    }
    return {
        favourites,
        toggleFavourite
    }
})