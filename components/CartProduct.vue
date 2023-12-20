<template>
  <div class="cart-product">
    <div class="image-name">
      <div class="img-holder">
        <img :src="mainImage" class="product-img" alt="product-img"/>
      </div>
      <p class="product-name">{{ name }}</p>
    </div>
    <div class="price-quantity">
      <div class="price">
        <p>Цена:</p>
        <p>{{ price }} <span class="rub">Р</span></p>
        <p v-if="discount !== 0" class="old-price">
          {{ countDiscount }}
          <span class="rub">Р</span></p>
      </div>
      <div class="quantity">
        <p>Количество:</p>
        <div class="quantity-changing">
          <button class="quantity-btn" @click="reduceTheAmount(id)">–</button>
          <div class="quantity">{{ quantity }}</div>
          <button class="quantity-btn" @click="increaseTheAmount(id)">+</button>
        </div>
      </div>
    </div>
    <button class="delete-btn" @click="store.deleteFromCart(id)">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256">
        <path
            fill="#808080" d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z"/>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { IProduct } from "~/types/Product";
import { useProductsStore } from "~/store/products";
import defaultImg from "assets/common-images/default-image.jpeg";

export interface Props extends IProduct {
  id: number,
  name: string,
  images: Array<string>,
  price: number,
  discount: number
}

const props = withDefaults(defineProps<Props>(), {
  id: 0,
  name: 'unknown',
  images: () => [],
  price: 0,
  discount: 0
})

const mainImage = computed(() => props.images.length === 0 ? defaultImg : props.images[0])
const countDiscount = computed(() => Math.ceil(props.price / (100 - props.discount) * 100))

const store = useProductsStore()
const quantity = computed(() => store.cartQuantity.get(props.id))

const reduceTheAmount = (id: number) => {
  if (quantity.value && quantity.value > 1) {
    store.cartQuantity.set(id, quantity.value - 1)
  }
}

const increaseTheAmount = (id: number) => {
  if (quantity.value && quantity.value < 100) {
    store.cartQuantity.set(id, quantity.value + 1)
  }
}
</script>

<style scoped lang="sass">
.cart-product
  width: 100%
  display: grid
  height: 150px
  align-items: center
  border-radius: 15px
  justify-items: center
  grid-template-columns: 2fr 3fr 3fr 1fr
  box-shadow: 0 3px 10px 0 rgba(55, 55, 55, 0.2)
  -moz-box-shadow: 0 3px 10px 0 rgba(55, 55, 55, 0.2)
  -webkit-box-shadow: 0 3px 10px 0 rgba(55, 55, 55, 0.2)

  @media screen and (max-width: 559px)
    grid-template-columns: 2fr 1.5fr 0.5fr

  @media screen and (max-width: 459px)
    height: 230px
    display: flex
    position: relative
    flex-direction: column
    justify-content: space-evenly

  .image-name
    height: inherit
    display: contents
    text-align: center

    @media screen and (max-width: 559px)
      display: flex
      align-items: center
      flex-direction: column
      justify-content: center

    @media screen and (max-width: 459px)
      height: 60%

  .img-holder
    width: 80%
    height: 85%
    display: flex
    overflow: hidden
    align-items: center
    justify-content: center

    @media screen and (max-width: 559px)
      height: 60%

    @media screen and (max-width: 459px)
      height: 70%

    .product-img
      height: 100%
      min-width: 110px
      object-fit: contain

  .price-quantity
    gap: 5px
    display: flex
    flex-direction: column

    @media screen and (max-width: 459px)
      gap: 40px
      flex-direction: row
      align-items: center

  .price
    gap: 10px
    display: flex

    .old-price
      font-size: 0.9em
      color: var(--light-grey)
      text-decoration: line-through

    p > .rub
      width: 0.5em
      color: inherit
      line-height: 0.2em
      display: inline-block
      vertical-align: middle
      text-decoration: inherit
      border-bottom: 0.07em solid

  .quantity
    .quantity-changing
      width: 115px
      padding: 8px
      display: flex
      margin-top: 5px
      border-radius: 5px
      background-color: white
      transition: all 0.2s ease
      justify-content: space-between
      border: 2px solid rgba(55, 55, 55, 0.06)

      &:hover
        border: 2px solid rgba(55, 55, 55, 0.15)

    .quantity
      margin: 0 20px

    .quantity-btn
      border: none
      display: flex
      align-items: center
      background-color: transparent

  .delete-btn
    height: 100%
    width: 100%
    border: none
    display: flex
    align-items: center
    justify-content: center
    transition: all 0.2s ease-in
    background-color: transparent

    &:hover
      background-color: rgba(55, 55, 55, 0.06)
      svg > path
        fill: var(--grey)

    @media screen and (max-width: 559px)
      border: none

    @media screen and (max-width: 459px)
      top: 0
      right: 0
      padding: 10px
      position: absolute
      width: fit-content
      height: fit-content
</style>