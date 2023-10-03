<template>
  <div class="product-card"
       @click="goToProductPage">
    <div class="marks">
      <svg class="fav-mark" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256"><path d="M240 98a57.63 57.63 0 0 1-17 41l-89.3 90.62a8 8 0 0 1-11.4 0L33 139a58 58 0 0 1 82-82.1l13 12.15l13.09-12.19A58 58 0 0 1 240 98Z"/></svg>
      <div class="discount-mark" v-if="discount !== 0">скидка {{ discount }}%</div>
    </div>
    <div class="img-holder">
      <img :src="mainImage" class="product-img" alt="product-img"/>
    </div>
    <div class="name-stock">
      <p class="product-name">{{ name }}</p>
      <p :class="`${props.stock === 1 ? 'in-stock' : 'on-order'}`">{{
          props.stock === 1 ? 'В наличии' : 'Под заказ'
        }}</p>
    </div>
    <div class="price-cart">
      <div class="price">
        <p v-if="discount !== 0" style="text-decoration: line-through; font-size: 0.9rem">{{ countDiscount }}
          руб/шт.</p>
        <p style="color: var(--yellow); font-weight: bold">{{ price }} руб/шт.</p>
      </div>
      <button class="cart-btn">В корзину</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IProduct, StockType } from "~/types/Product";
import defaultImg from '@/assets/default-image.jpeg'

export interface Props extends IProduct {
  id: number,
  name: string,
  images: Array<string>,
  price: number,
  stock: StockType,
  discount: number
}

const props = withDefaults(defineProps<Props>(), {
  id: 0,
  name: 'unknown',
  images: () => [],
  price: 0,
  stock: StockType.OnOrder,
  discount: 0
});

const mainImage = computed(() => props.images.length === 0 ? defaultImg : props.images[0])
const countDiscount = computed(() => Math.ceil(props.price / (100 - props.discount) * 100))

const router = useRouter()
const goToProductPage = () => {
  router.push({
    path: "product/" + props.id,
  })
}
</script>

<style scoped lang="sass">
.product-card
  display: flex
  flex-direction: column

  width: 18%
  min-width: 220px
  max-width: 280px
  max-height: 380px
  position: relative
  padding-bottom: 10px

  .marks
    left: 0
    padding: 2px
    position: absolute

    width: 100%
    display: flex
    align-items: center
    box-sizing: border-box
    flex-direction: row-reverse
    justify-content: space-between

    .discount-mark
      padding: 0 5px
      border-radius: 5%
      font-size: 0.9rem
      color: var(--grey)
      height: fit-content
      background-color: var(--yellow)

    .fav-mark
      fill: #d0d0d0

      &:hover
        fill:  var(--yellow)

  .img-holder
    width: 100%
    height: 200px
    display: flex
    margin-top: 25px
    align-items: center
    justify-content: center

    img
      max-height: 200px

  .name-stock
    margin: 10px

    .product-name
      overflow: hidden
      display: -webkit-box
      -webkit-line-clamp: 2
      -webkit-box-orient: vertical

  p.in-stock
    font-weight: bold
    color: var(--green)

  .price-cart
    gap: 10%
    display: flex
    margin-top: auto
    align-items: flex-end
    justify-content: space-evenly

    .cart-btn
      border: none
      cursor: pointer
      padding: 5px 10px
      color: var(--grey)
      border-radius: 5px
      background-color: var(--yellow)
</style>