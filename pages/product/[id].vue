<template>
  <div class="product-card">
    <div class="main-information">
      <div class="product-images">
        <div class="images-gallery">
          <img v-for="(img, index) in product.images"
               :key="index"
               :src="img" :alt="product.name" @click="setCurrentImage(index)"/>
        </div>
        <div class="current-photo">
          <img :src="currentImage" :alt="product.name"/>
        </div>
        <div class="buttons">
          <button class="fav-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
              <path fill="#808080"
                    d="M223 57a58.07 58.07 0 0 0-81.92-.1L128 69.05l-13.09-12.19A58 58 0 0 0 33 139l89.35 90.66a8 8 0 0 0 11.4 0L223 139a58 58 0 0 0 0-82Zm-11.35 70.76L128 212.6l-83.7-84.92a42 42 0 0 1 59.4-59.4l.2.2l18.65 17.35a8 8 0 0 0 10.9 0l18.65-17.35l.2-.2a42 42 0 1 1 59.36 59.44Z"/>
            </svg>
          </button>
          <button class="cart-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
              <path fill="#808080"
                    d="M96 216a16 16 0 1 1-16-16a16 16 0 0 1 16 16Zm88-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm47.65-125.65l-28.53 92.71A23.89 23.89 0 0 1 180.18 184H84.07A24.11 24.11 0 0 1 61 166.59L24.82 40H8a8 8 0 0 1 0-16h16.82a16.08 16.08 0 0 1 15.39 11.6L48.32 64H224a8 8 0 0 1 7.65 10.35ZM213.17 80H52.89l23.49 82.2a8 8 0 0 0 7.69 5.8h96.11a8 8 0 0 0 7.65-5.65Z"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="name-price">
        <h1>{{ product.name }}</h1>
        <p :class="`${product.stock === 1 ? 'in-stock' : 'on-order'}`">{{
            product.stock === 1 ? 'В наличии' : 'Под заказ'
          }}</p>
        <div class="price">
          <p v-if="product.discount !== 0" style="text-decoration: line-through; font-size: 0.9rem">{{ countDiscount }} руб/шт.
          </p>
          <p style="color: var(--yellow); font-weight: bold">{{ 500 }} руб/шт.</p>
        </div>
      </div>
    </div>
    <div class="additional-information">
      <div class="characteristics">
        <h2>Характеристики</h2>
        <p v-for="characteristic in product.characteristics">{{ characteristic }}</p>
      </div>
      <div class="description">
        <h2>Описание</h2>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IProduct } from "~/types/Product";
import { useProductsStore } from "~/store/products";



const route = useRoute()
const store = useProductsStore()

const id = computed<number>(() => Number(route.params.id))
const product = ref<IProduct>(store.getDefaultProduct())

const result = await store.getProduct(id.value)
if (result.ok) {
  product.value = result.data
}

const countDiscount = computed(() => Math.ceil(500 / (100 - product.value.discount) * 100))

const currentImageIndex = ref<number>(0)
const currentImage = computed<string>(() => product.value.images[currentImageIndex.value] || store.getDefaultImage())

const setCurrentImage = (index: number) => {
  if (index < 0 || index >= product.value.images.length) return
  currentImageIndex.value = index
}
</script>

<style scoped lang="sass">
.product-card
  margin-top: 50px

  .main-information
    display: flex
    margin-bottom: 50px

    .product-images
      gap: 20px
      width: 60%
      display: flex

      .images-gallery
        gap: 20px
        width: 20%
        display: flex
        flex-direction: column

        img
          height: 120px
          object-fit: cover

      .current-photo
        img
          top: 0
          width: 500px
          height: 500px
          object-fit: contain
          object-position: top

      .buttons
        gap: 20px
        display: flex
        flex-direction: column

        .fav-btn,
        .cart-btn
          border: none
          display: flex
          width: 45px
          height: 45px
          border-radius: 2px
          align-items: center

        .fav-btn
          background-color: var(--background-grey)

        .cart-btn
          background-color: var(--yellow)

    .name-price
      margin: 0 auto

  .additional-information
    gap: 30px
    display: flex
    flex-direction: column

</style>