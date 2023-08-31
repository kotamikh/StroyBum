<template>
  <h2>Скидки</h2>
  <div class="discount">
    <product-card v-for="product in products"
                  :key="product.name"
                  :name="product.name"
                  :image="product.image"
                  :price="product.price"
                  :stock="product.stock"
                  :discount="product.discount"
    />
  </div>
</template>

<script setup lang="ts">
import {IProduct, StockType } from "~/src/types/Product";
import siding1 from '@/assets/сайдинг-лапландия.png'
import siding2 from '@/assets/сайдинг-лапландия2.png'

const products: Array<IProduct> = [
  {
    name: 'Сайдинг NordSide Лапландия \n' +
        '3,05 х 0,205м \n' +
        'Цвет: Ламантин',
    image: siding1,
    price: 215,
    stock: StockType.OutOfStock,
    discount: 0.15,
    description: 'бла-бла-бла',
    characteristics: []
  },
  {
    name: 'Сайдинг NordSide Лапландия \n' +
        '3,05 х 0,205м \n' +
        'Цвет: Белый',
    image: siding2,
    price: 215,
    stock: StockType.InStock,
    discount: 0,
    description: 'бла-бла-бла',
    characteristics: []
  },
  {
    name: 'Сайдинг NordSide Лапландия \n' +
        '3,05 х 0,205м \n' +
        'Цвет: Ламантин',
    image: siding1,
    price: 215,
    stock: StockType.OutOfStock,
    discount: 0.15,
    description: 'бла-бла-бла',
    characteristics: []
  },
  {
    name: 'Сайдинг NordSide Лапландия \n' +
        '3,05 х 0,205м \n' +
        'Цвет: Белый',
    image: siding2,
    price: 215,
    stock: StockType.InStock,
    discount: 0,
    description: 'бла-бла-бла',
    characteristics: []
  }
]
</script>

<style scoped lang="sass">
.discount
  gap: 2rem
  display: flex
  margin: 30px 0
  flex-wrap: wrap
</style>