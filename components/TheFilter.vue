<template>
    <div class="filter-window" v-if="props.show">
      <a v-for="brand in useCategoriesBrandsStore().brandsBySubject"
         :key="brand.id"
         class="brand"
         @click="loadBrandProducts(brand.id)"
      >{{ brand.name }}</a>
    </div>
</template>

<script setup lang="ts">
import { useCategoriesBrandsStore } from "~/store/categories-brands";
import { ref } from "@vue/reactivity";
import { useRoute } from "#app";

const props = defineProps({
  show: {
    type: Boolean
  }
})

const route = useRoute()
const name = route.params.name.toString()

const allBrands = useCategoriesBrandsStore().getAllBrands()
const brands = useCategoriesBrandsStore().getBrandsBySubject(name, allBrands)
const currentBrand = ref(0)

const loadBrandProducts = (brand: number) => {
  currentBrand.value = brand
  loadProducts()
}
</script>

<style scoped lang="sass">
.filter-window
  top: 100%
  width: 100%
  position: absolute
  height: fit-content
  background-color: #eeeeee

</style>