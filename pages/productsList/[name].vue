<template>
  <h1>{{ name }}</h1>
  <div class="catalog">
    <product-card v-for="[id, product] in useProductsStore().products"
                  :key="id"
                  :id="id"
                  :name="product.name"
                  :images="product.images"
                  :price="500"
                  :stock="product.stock"
                  :discount="product.discount"
    />
  </div>
  <div class="pages">
    <the-pagination v-model="currentPage"
                    :total-pages="10"
                    :page="currentPage"
                    @update:current-page="updatePage"
    />
  </div>
</template>

<script setup lang="ts">
import { useProductsStore } from "~/store/products";
import { ref, computed } from "@vue/reactivity";
import { useMock } from "~/store/mock";
import { useRoute } from "#app";

const route = useRoute()

const { name } = route.params

console.log(route.params.name)

const currentPage = ref(1)

const updatePage = (data: number) => {
  currentPage.value = data
}

const limit = 5

const loadProducts = () => {
  useMock().getAllProducts((currentPage.value - 1) * limit, limit,  )
}
// const loadProducts = () => {
//   useProductsStore().loadAll((currentPage.value - 1) * limit, limit)
// }

watch(currentPage, loadProducts)
loadProducts()

</script>


<style scoped lang="sass">
.catalog
  gap: 1rem
  display: flex
  flex-wrap: wrap

.pages
  display: flex
  margin: 30px auto
</style>