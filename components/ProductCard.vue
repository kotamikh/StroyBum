<template>
  <div :class="[{ favourite : isFavourite }, 'product-card']"
       @click="goToProductPage">
    <div class="img-holder">
      <button class="fav-btn" @click.stop="store.toggleFavourite(props.id)">
        <svg class="fav-mark" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256">
          <path
              d="M240 98a57.63 57.63 0 0 1-17 41l-89.3 90.62a8 8 0 0 1-11.4 0L33 139a58 58 0 0 1 82-82.1l13 12.15l13.09-12.19A58 58 0 0 1 240 98Z"/>
        </svg>
      </button>
      <div class="discount-mark" v-if="discount !== 0">- {{ discount }}%</div>
      <img :src="mainImage" class="product-img" alt="product-img"/>
    </div>
    <div class="price-stock">
      <div class="price">
        <p style="font-size: 1.2rem">{{ price }} <span class="rub">Р</span></p>
        <p v-if="discount !== 0" class="old-price">
          {{ countDiscount }}
          <span class="rub">Р</span></p>
      </div>
      <p class="stock">{{
          props.stock === 1 ? 'В наличии' : 'Под заказ'
        }}</p>
    </div>
    <p class="product-name">{{ name }}</p>
    <div class="cart">
      <cart-button :id="props.id"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IProduct, StockType } from "~/types/Product";
import defaultImg from '@/assets/default-image.jpeg'
import { useProductsStore } from "~/store/products";
import CartButton from "~/components/CartButton.vue";

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
})

const mainImage = computed(() => props.images.length === 0 ? defaultImg : props.images[0])
const countDiscount = computed(() => Math.ceil(props.price / (100 - props.discount) * 100))

const router = useRouter()
const goToProductPage = () => {
  router.replace({
    path: "product/" + props.id
  })
}

const store = useProductsStore()
const isFavourite = computed<boolean>(() => {
  return store.isFavourite(props.id)
})
</script>

<style scoped lang="sass">
*
  color: black

.product-card
  gap: 10px
  display: flex
  flex-direction: column

  height: 360px
  cursor: pointer
  max-width: 235px
  border-radius: 15px
  background-color: white

  @media screen and (max-width: 469px)
    gap: 5px
    height: 320px

  &:not(.favourite)
    .fav-mark
      &:hover,
      &:active
        stroke-width: 10px
        fill: var(--yellow)
        stroke: var(--middle-grey)

  .img-holder
    width: 100%
    height: 60%
    display: flex
    position: relative

    @media screen and (max-width: 469px)
      height: 50%

    img
      width: 75%
      margin: auto
      max-height: 80%
      object-fit: contain

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
        fill: rgba(128, 128, 128, 0.4)

  .price-stock
    display: flex
    flex-wrap: wrap
    align-items: end
    column-gap: 10px

    @media screen and (max-width: 469px)
      flex-direction: column
      align-items: flex-start

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

    .stock
      font-weight: lighter
      font-size: calc((100vw - 320px) / (1280 - 320) * (14 - 12) + 12px)

  .product-name
    overflow: hidden
    font-weight: lighter
    display: -webkit-box
    -webkit-line-clamp: 2
    -webkit-box-orient: vertical
    font-size: calc((100vw - 320px) / (1280 - 320) * (16 - 14) + 14px)

  .cart
    margin-top: auto
    margin-left: auto

    @media screen and (max-width: 469px)
      width: 90%
      margin: auto

.product-card.favourite
  .fav-btn > .fav-mark
    stroke-width: 10px
    fill: var(--yellow)
    stroke: var(--middle-grey)

    &:active
      fill: rgba(128, 128, 128, 0.4)
</style>