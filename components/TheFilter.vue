<template>
  <ul class="filter-window" v-if="props.show">
    <li>По цене</li>
    <li><label for="sale">Со скидкой</label>
      <input type="checkbox" name="sale"></li>
    <li><p>По бренду</p>
      <a v-for="brand in brands"
         :key="brand.id"
         class="brand"
         @click="loadBrandProducts(brand.id)"
      >{{ brand.name }}</a>
    </li>

  </ul>
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
const subject = useCategoriesBrandsStore().findCategoryId(name)

// const brands = await useCategoriesBrandsStore().loadAllBrands()
const brands = await useCategoriesBrandsStore().getBrandsBySubject(subject)
console.log(brands)
const currentBrand = ref(0)

const loadBrandProducts = (brand: number) => {
  currentBrand.value = brand
  // loadProducts()
}
</script>

<style scoped lang="sass">
.filter-window
  top: 100%
  width: 130%
  display: flex
  z-index: 3
  padding: 20px
  position: absolute
  height: fit-content
  background-color: #eeeeee
  flex-direction: column

</style>