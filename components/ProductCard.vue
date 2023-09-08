<template>
  <div class="product-card"
       @click="goToProductPage">
    <div class="marks">
      <svg class="fav-mark" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256">
        <path
            d="M217.36 133.36L128 224l-89.36-90.64a50 50 0 0 1 70.72-70.72L128 80l18.64-17.36a50 50 0 1 1 70.72 70.72Z"
            opacity=".2"/>
        <path
            d="M223 57a58.07 58.07 0 0 0-81.92-.1L128 69.05l-13.09-12.19A58 58 0 0 0 33 139l89.35 90.66a8 8 0 0 0 11.4 0L223 139a58 58 0 0 0 0-82Zm-11.35 70.76L128 212.6l-83.7-84.92a42 42 0 0 1 59.4-59.4l.2.2l18.65 17.35a8 8 0 0 0 10.9 0l18.65-17.35l.2-.2a42 42 0 1 1 59.36 59.44Z"/>
      </svg>
      <div class="discount-mark" v-if="discount !== 0">скидка {{ discount }}%</div>
    </div>
    <div class="img-holder">
      <img :src="images[0]" class="product-img" alt="product-img"/>
    </div>
    <div class="name-stock">
      <p class="product-name">{{ name }}</p>
      <p :class="`${props.stock === 1 ? 'in-stock' : 'on-order'}`">{{
          props.stock === 1 ? 'В наличии' : 'Под заказ'
        }}</p>
    </div>
    <div class="price-cart">
      <div class="price">
        <p v-if="discount !== 0" style="text-decoration: line-through; font-size: 0.9rem">{{
            Math.ceil(price / (100 - discount) * 100)
          }} руб/шт.
        </p>
        <p style="color: var(--yellow); font-weight: bold">{{ price }} руб/шт.</p>
      </div>
      <button class="cart-btn">В корзину</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { StockType } from "~/src/types/Product";

export interface Props {
  name: string,
  images: Array<string>,
  price: number,
  stock: StockType,
  discount: number
}

const props = withDefaults(defineProps<Props>(), {
  name: 'unknown',
  images: ['unknown'],
  price: 0,
  stock: StockType.OnOrder,
  discount: 0
});

const router = useRouter()
const goToProductPage = () => {
  router.push({
    name: "productPage",
    params: {
      name: props.name,
      image: props.images
    },
    query: {
      name: "таня",
      image: "козлоува"
    }
  })
}

</script>

<style scoped lang="sass">
.product-card
  display: flex
  flex-direction: column

  width: 20%
  min-width: 250px
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
      fill: var(--middle-grey)

      &:hover
        fill: var(--yellow)

  .img-holder
    width: 100%
    max-height: 200px
    display: flex
    padding: 0 30px
    align-items: center
    justify-content: center

    img
      height: 200px
      object-fit: contain

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
    justify-content: center

    .cart-btn
      border: none
      cursor: pointer
      padding: 5px 10px
      color: var(--grey)
      border-radius: 5px
      background-color: var(--yellow)
</style>