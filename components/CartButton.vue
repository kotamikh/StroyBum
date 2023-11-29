<template>
  <button class="cart-btn" v-if="!store.isInCart(props.id)" @click.stop="addToCart">В корзину</button>
  <div v-else class="in-cart">В корзине
    <div class="quantity-changing" @click.stop>
      <button class="quantity-btn" @click.stop="subtractProduct(id)">–</button>
      <div class="quantity">{{ quantity }}</div>
      <button class="quantity-btn" @click.stop="addProduct(id)">+</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductsStore } from "~/store/products";
import { computed } from "@vue/reactivity";

const store = useProductsStore()
const props = defineProps(['id'])

const addToCart = () => {
  store.addToCart(props.id)
}

const quantity = computed(() => store.cartQuantity.get(props.id))

const subtractProduct = (id: number) => {
  if (quantity.value > 1) {
    store.cartQuantity.set(id, quantity.value - 1)
  }
}

const addProduct = (id: number) => {
  if (quantity.value < 100) {
    store.cartQuantity.set(id, quantity.value + 1)
  }
}
</script>

<style scoped lang="sass">
*
  color: var(--grey)

.cart-btn,
.in-cart
  cursor: pointer
  padding: 5px 20px
  color: var(--grey)
  width: fit-content
  border-radius: 12px
  transition: all 0.2s ease-in-out

  @media screen and (max-width: 469px)
    width: 100%
    text-align: center

  &:hover
    -webkit-box-shadow: 0 0 10px 0 rgba(128, 128, 128, 0.5)
    -moz-box-shadow: 0 0 10px 0 rgba(128, 128, 128, 0.5)
    box-shadow: 0 0 10px 0 rgba(128, 128, 128, 0.5)

.cart-btn
  border: none
  background-color: var(--yellow)

.in-cart
  position: relative
  background-color: transparent
  border: 2px solid var(--yellow)

  &:hover
    color: transparent

    .quantity-changing
      visibility: visible

.quantity-changing
  top: 50%
  left: 50%
  width: 90%
  display: flex
  position: absolute
  visibility: hidden
  justify-content: space-between
  transform: translate(-50%, -50%)

  .quantity-btn
    border: none
    display: flex
    padding: 0 10px
    align-items: center
    background-color: transparent
</style>