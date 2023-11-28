<template>
  <div class="cart-product">
    <div class="img-holder">
      <img :src="mainImage" class="product-img" alt="product-img"/>
    </div>
    <p class="product-name">{{ name }}</p>
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
          <button class="quantity-btn" @click="subtractProduct(id)">–</button>
          <div class="quantity">{{ quantity }}</div>
          <button class="quantity-btn" @click="addProduct(id)">+</button>
        </div>
      </div>
    </div>
    <button class="delete-btn" @click="store.deleteFromCart(id)">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256">
        <path
            d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z"/>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import defaultImg from "assets/default-image.jpeg";
import { computed } from "@vue/reactivity";
import { IProduct } from "~/types/Product";
import { useProductsStore } from "~/store/products";

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

const subtractProduct = (id: number) => {
  if (quantity.value > 1) {
    store.cartQuantity.set(id, quantity.value - 1)
    console.log(store.cartQuantity)
  }
}

const addProduct = (id: number) => {
  if (quantity.value < 100) {
    store.cartQuantity.set(id, quantity.value + 1)
    console.log(store.cartQuantity)
  }
}
</script>

<style scoped lang="sass">
.cart-product
  width: 100%
  display: flex
  height: 150px
  align-items: center
  border-radius: 15px
  justify-content: space-between
  background-color: rgba(0, 48, 120, 0.04)

  .img-holder
    height: 90%
    width: 20%
    display: flex
    padding: 0 5%
    align-items: center
    justify-content: center

    .product-img
      height: inherit

  .price-quantity
    gap: 5px
    display: flex
    flex-direction: column

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

  .quantity
    .quantity-changing
      display: flex
      margin-top: 5px
      padding: 8px
      background-color: white
      justify-content: space-between

    .quantity
      margin: 0 20px

    .quantity-btn
      border: none
      display: flex
      align-items: center
      background-color: transparent

  .delete-btn
    height: 100%
    border: none
    display: flex
    padding: 0 3%
    align-items: center
    background-color: transparent
    border-left: 2px solid rgba(128, 128, 128, 0.5)
</style>