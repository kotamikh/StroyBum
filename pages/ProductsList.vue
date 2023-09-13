<template>
  <h1>Каталог товаров</h1>
  <product-card v-for="[id, product] in useProductsStore().products"
                :key="id"
                :id="id"
                :name="product.name"
                :images="product.images"
                :price="500"
                :stock="product.stock"
                :discount="product.discount"
  />
</template>

<script setup lang="ts">
import { useProductsStore } from "~/store/products";

useProductsStore().loadAll(0, 20)
</script>



<style scoped lang="sass">

</style>