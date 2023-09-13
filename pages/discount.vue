<template>
  <h1>Скидки</h1>
  <button @click="useProductsStore().loadAll(0, 20)" style="width: max-content; margin-bottom: 30px">Get All</button>
  <div class="discount">

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
</template>

<script setup lang="ts">
import { useProductsStore } from "~/store/products";
</script>

<style scoped lang="sass">
.discount
  gap: 2rem
  display: flex
  flex-wrap: wrap
</style>