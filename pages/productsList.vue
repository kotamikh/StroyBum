<template>
  <h1>Каталог товаров</h1>
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
import { ref } from "@vue/reactivity";

const currentPage = ref(1)

const updatePage = (data: number) => {
  currentPage.value = data
}

const limit = 5

const loadProducts = () => {
  useProductsStore().loadAll((currentPage.value - 1) * limit, limit)
}

watch(currentPage, loadProducts)
loadProducts()

</script>


<style scoped lang="sass">
.catalog
  display: flex
  flex-wrap: wrap

.pages
  display: flex
  margin: 30px auto
</style>