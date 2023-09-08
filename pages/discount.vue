<template>
  <h1>Скидки</h1>
  <button @click="useCardsStore().getAll" style="width: max-content; margin-bottom: 30px">Get All</button>
  <button @click="useCardsStore().addCard" style="width: max-content; margin-bottom: 30px">Add</button>
  <button @click="useCardsStore().deleteAll(75, 76)" style="width: max-content; margin-bottom: 30px">Delete</button>
  <div class="discount">

    <product-card v-for="product in useCardsStore().products"
                  :key="product.name"
                  :name="product.name"
                  :images="product.images"
                  :price="500"
                  :stock="product.stock"
                  :discount="product.discount"
    />

  </div>
</template>

<script setup lang="ts">
import { useCardsStore } from "~/store";

</script>

<style scoped lang="sass">
.discount
  gap: 2rem
  display: flex
  flex-wrap: wrap
</style>