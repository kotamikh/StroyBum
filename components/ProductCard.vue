<template>
  <div class="product-card">
    <div class="marks">
      <div class="discount-mark" v-if="discount !== 0">скидка {{discount * 100}}%</div>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256">
        <path fill="#808080"
              d="M223 57a58.07 58.07 0 0 0-81.92-.1L128 69.05l-13.09-12.19A58 58 0 0 0 33 139l89.35 90.66a8 8 0 0 0 11.4 0L223 139a58 58 0 0 0 0-82Zm-11.35 70.76L128 212.6l-83.7-84.92a42 42 0 0 1 59.4-59.4l.2.2l18.65 17.35a8 8 0 0 0 10.9 0l18.65-17.35l.2-.2a42 42 0 1 1 59.36 59.44Z"/>
      </svg>
    </div>
    <img src="image" alt="product-img"/>
    <p>{{name}}</p>
    <p>{{stock}}</p>
    <div class="price-cart">
      <div class="price">
        <p v-if="discount !== 0" style="text-decoration: line-through; font-size: 0.9rem">{{
            Math.ceil(price / (100 - discount * 100) * 100)
          }} руб/шт.
        </p>
        <p style="color: var(--yellow)">{{price}} руб/шт.</p>
      </div>
      <button class="cart-btn">В корзину</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {StockType} from "~/src/types/Product";

interface Props {
  name: string,
  image: string
  price: number,
  stock: StockType,
  discount: number
}

const props = withDefaults(defineProps<Props>(), {
  name: 'unknown',
  image: 'unknown',
  price: 0,
  stock: StockType.OutOfStock,
  discount: 0
});

</script>

<style scoped lang="sass">
.product-card
  min-width: 150px
  width: 25%
  aspect-ratio: 1/1
  //height: 300px
  padding: 20px
  background-color: var(--background-grey)
  border-radius: 5%

  .marks
    display: flex
    justify-content: space-between

    .discount-mark
      background-color: var(--yellow)
      border-radius: 5%
      font-size: 0.9rem
      height: fit-content
      padding: 0 5px
      color: var(--grey)

  img
    height: 40%
    min-height: 100px

  .price-cart
    display: flex
    gap: 10%
    justify-content: center

    .cart-btn
      background-color: var(--yellow)
      border-radius: 0.3rem
      border: none
      height: fit-content
      padding: 5px 10px
      color: var(--grey)
</style>