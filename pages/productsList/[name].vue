<template>
  <h1>{{ name }}</h1>
  <div class="catalog">
    <product-card v-for="(product, id) in useMock().filteredProducts"
                  :key="id"
                  :id="id"
                  :name="product.name"
                  :images="product.images"
                  :price="product.price"
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
import { ref } from "@vue/reactivity";
import { useMock } from "~/store/mock";
import { useRoute } from "#app";

const route = useRoute()

const name = route.params.name.toString()

const currentPage = ref(1)

const updatePage = (data: number) => {
  currentPage.value = data
}

const limit = 5

const loadProducts = () => {
  useMock().getAllProducts((currentPage.value - 1) * limit, limit, name, )
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