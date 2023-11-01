<template>
  <h1>Реультаты поиска по запросу "{{ query }}"</h1>
  <div class="cards">
    <product-card v-for="(product, id) in useMock().showRequestedProducts(query)"
                  :key="id"
                  :id="id"
                  :name="product.name"
                  :images="product.images"
                  :price="product.price"
                  :stock="product.stock"
                  :discount="product.discount"
    />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "#app";

const route = useRoute()
const query = route.params.query.toString()
</script>


<style scoped lang="sass">
.cards
  display: flex
</style>