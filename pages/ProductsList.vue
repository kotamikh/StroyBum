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
  <the-pagination :page="page" @update:page(data)="updatePage"/>
</template>

<script setup lang="ts">
import { useProductsStore } from "~/store/products";

const page = ref(1)

const updatePage = (data: number) => {
  page.value = data
}

watch(page, () => {
      useProductsStore().loadAll(page.value - 1, 2)
    }
)

useProductsStore().loadAll(0, 2)
</script>


<style scoped lang="sass">
.catalog
  display: flex
  flex-wrap: wrap
</style>