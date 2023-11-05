<template>
  <div :class="['product-card']"
       @click="goToProductPage">
    <div class="img-holder pointer-events-none">
      <button class="fav-btn">
      <svg class="fav-mark"
           xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256">
        <path
            d="M223 57a58.07 58.07 0 0 0-81.92-.1L128 69.05l-13.09-12.19A58 58 0 0 0 33 139l89.35 90.66a8 8 0 0 0 11.4 0L223 139a58 58 0 0 0 0-82Zm-11.35 70.76L128 212.6l-83.7-84.92a42 42 0 0 1 59.4-59.4l.2.2l18.65 17.35a8 8 0 0 0 10.9 0l18.65-17.35l.2-.2a42 42 0 1 1 59.36 59.44Z"/>
      </svg>
      </button>
      <div class="discount-mark" v-if="discount !== 0">- {{ discount }}%</div>
      <img :src="mainImage" class="product-img" alt="product-img"/>
    </div>
    <div class="price">
      <p style="font-size: 1.2rem">{{ price }} <span class="rub">Р</span></p>
      <p v-if="discount !== 0" class="old-price">
        {{ countDiscount }}
        <span class="rub">Р</span></p>
    </div>
    <p class="product-name">{{ name }}</p>
    <div class="cart-stock">
      <button class="cart-btn">В корзину</button>
      <p class="stock">{{
          props.stock === 1 ? 'В наличии' : 'Под заказ'
        }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IProduct, StockType } from "~/types/Product";
import defaultImg from '@/assets/default-image.jpeg'
import { useProductsStore } from "~/store/products";

export interface Props extends IProduct {
  id: number,
  name: string,
  images: Array<string>,
  price: number,
  stock: StockType,
  discount: number,
  category: number
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
*
  color: black

.product-card
  gap: 10px
  display: flex
  flex-direction: column

  z-index: 5
  height: 380px
  cursor: pointer
  width: 235px
  position: relative
  background-color: white

  &:not(.favourite)
    .fav-btn
      &:hover
        .fav-mark
          fill: var(--yellow)

  .img-holder
    width: 100%
    min-height: 235px
    display: flex
    position: relative

    img
      width: 75%
      margin: auto
      object-fit: cover

    &::after
      top: 0
      content: ''
      height: 100%
      width: 100%
      position: absolute
      border-radius: 15px
      background-color: rgba(0, 48, 120, 0.04)

    .discount-mark
      top: 5px
      left: 5px
      font-size: 14px
      padding: 3px 10px
      text-align: center
      position: absolute
      border-radius: 12px
      background-color: var(--yellow)

    .fav-btn
      top: 3px
      right: 3px
      z-index: 2
      border: none
      display: flex
      cursor: pointer
      position: absolute
      align-items: center
      background-color: transparent

      .fav-mark
        fill: var(--middle-grey)

  .price
    gap: 10px
    display: flex

    .old-price
      font-size: 0.9em
      color: var(--middle-grey)
      text-decoration: line-through

    p > .rub
      width: 0.5em
      color: inherit
      line-height: 0.2em
      display: inline-block
      vertical-align: middle
      text-decoration: inherit
      border-bottom: 0.07em solid

  .product-name
    overflow: hidden
    font-weight: lighter
    display: -webkit-box
    -webkit-line-clamp: 2
    -webkit-box-orient: vertical

  .cart-stock
    display: flex
    margin-top: auto
    align-items: center
    justify-content: space-between

    .stock
      font-weight: lighter

    .cart-btn
      border: none
      cursor: pointer
      padding: 5px 20px
      color: var(--grey)
      border-radius: 12px
      background-color: var(--yellow)

.product-card.favourite
  .fav-btn > .fav-mark
    fill: var(--yellow)

  .fav-btn
    &:hover
      .fav-mark
        fill: var(--middle-grey)
</style>