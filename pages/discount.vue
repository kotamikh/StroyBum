<template>
  <h1>Скидки</h1>
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
import { IProduct, StockType } from "~/src/types/Product";
import siding1 from 'assets/products/сайдинг-лапландия.png'
import siding2 from 'assets/products/сайдинг-лапландия2.png'
import ceiling1 from 'assets/products/Грильято_Белый.jpeg'
import ceiling2 from 'assets/products/Грильято_Золотой.webp'
import ceiling3 from 'assets/products/Грильято_Металлик.webp'
import ceiling4 from 'assets/products/Грильято_Чёрный.webp'

const products: Array<IProduct> = [
  {
    name: 'Сайдинг NordSide Лапландия \n' +
        '3,05 х 0,205м \n' +
        'Цвет: Ламантин',
    image: siding1,
    price: 215,
    stock: StockType.OnOrder,
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
    description: 'бла-бла-бла',
    characteristics: []
  },
  {
    name: 'Сайдинг NordSide Лапландия \n' +
        '3,05 х 0,205м \n' +
        'Цвет: Ламантин',
    image: siding1,
    price: 215,
    stock: StockType.OnOrder,
    discount: 0.15,
    description: 'бла-бла-бла',
    characteristics: [],
  },
  {
    name: 'Сайдинг NordSide Лапландия \n' +
        '3,05 х 0,205м \n' +
        'Цвет: Белый',
    image: siding2,
    price: 215,
    stock: StockType.InStock,
    description: 'бла-бла-бла',
    characteristics: [],
  },
  {
    name: 'Потолок Грильято \n' +
        'Цвет: Белый',
    image: ceiling1,
    price: 500,
    stock: StockType.OnOrder,
    discount: 0,
    description: 'бла-бла-бла',
    characteristics: []
  },
  {
    name: 'Потолок Грильято ' +
        'Цвет: Золотой',
    image: ceiling2,
    price: 600,
    stock: StockType.OnOrder,
    discount: 0,
    description: 'бла-бла-бла',
    characteristics: []
  },
  {
    name: 'Потолок Грильято ' +
        'Цвет: Металлик',
    image: ceiling3,
    price: 600,
    stock: StockType.OnOrder,
    discount: 0,
    description: 'бла-бла-бла',
    characteristics: []
  },
  {
    name: 'Потолок Грильято ' +
        'Цвет: Чёрный',
    image: ceiling4,
    price: 800,
    stock: StockType.OnOrder,
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
  flex-wrap: wrap
  margin-top: 30px
</style>