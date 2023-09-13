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
    <the-pagination v-for="p in pages"
                    :key="p"
                    :page="p"
                    :current-page="currentPage"
                    @update:current-page="updatePage"
    />
  </div>
</template>

<script setup lang="ts">
import { useProductsStore } from "~/store/products";
import { ref } from "@vue/reactivity";

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const currentPage = ref(pages[0])

const updatePage = (data: number) => {
  currentPage.value = data
}

watch(currentPage, () => {
      useProductsStore().loadAll(currentPage.value - 1, 2)
    }
)

useProductsStore().loadAll(0, 2)

</script>


<style scoped lang="sass">
.catalog
  display: flex
  flex-wrap: wrap

.pages
  display: flex
  margin: 30px auto
</style>