<template>
  <h1>Скидки</h1>
  <button @click="useCardsStore.getAll" style="width: max-content; margin-bottom: 30px">Get All</button>
  <button @click="useCardsStore.addCard" style="width: max-content; margin-bottom: 30px">Add</button>
  <button @click="useCardsStore.deleteAll(1, 2)" style="width: max-content; margin-bottom: 30px">Delete</button>
  <div class="discount">

    <product-card v-for="product in products"
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
import { IProduct } from "~/src/types/Product";
import { useCardsStore } from "~/store";
// import siding1 from 'assets/products/сайдинг-лапландия.png'
// import siding2 from 'assets/products/сайдинг-лапландия2.png'
// import ceiling1 from 'assets/products/Грильято_Белый.jpeg'
// import ceiling2 from 'assets/products/Грильято_Золотой.webp'
// import ceiling3 from 'assets/products/Грильято_Металлик.webp'
// import ceiling4 from 'assets/products/Грильято_Чёрный.webp'


const products: Ref<Array<IProduct>> = ref([])
</script>

<style scoped lang="sass">
.discount
  gap: 2rem
  display: flex
  flex-wrap: wrap
</style>