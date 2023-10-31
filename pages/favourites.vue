<template>
  <h1>Избранное</h1>
  <div class="fav-products">
    <product-card v-for="product in useFavouritesStore().favourites"
                  :id="product.id"
                  :name="product.name"
                  :images="product.images"
                  :price="product.price"
                  :stock="product.stock"
                  :discount="product.discount"
    />
  </div>
</template>

<script setup lang="ts">
import { useFavouritesStore } from "~/store/favourites";
</script>

<style scoped lang="sass">
.fav-products
  display: flex
</style>