<template>
  <div class="product-card">
    <div class="main-information">
      <div class="product-images">
        <div class="images-gallery">
          <img v-for="img in product.images" :src="img" :alt="product.name"/>
        </div>
        <div class="current-photo">
          <img :src="product.images[0]" :alt="product.name"/>
        </div>
        <div class="icons">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
            <path fill="#808080"
                  d="M223 57a58.07 58.07 0 0 0-81.92-.1L128 69.05l-13.09-12.19A58 58 0 0 0 33 139l89.35 90.66a8 8 0 0 0 11.4 0L223 139a58 58 0 0 0 0-82Zm-11.35 70.76L128 212.6l-83.7-84.92a42 42 0 0 1 59.4-59.4l.2.2l18.65 17.35a8 8 0 0 0 10.9 0l18.65-17.35l.2-.2a42 42 0 1 1 59.36 59.44Z"/>
          </svg>
          <svg class="cart-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
            <path fill="#808080"
                  d="M96 216a16 16 0 1 1-16-16a16 16 0 0 1 16 16Zm88-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm47.65-125.65l-28.53 92.71A23.89 23.89 0 0 1 180.18 184H84.07A24.11 24.11 0 0 1 61 166.59L24.82 40H8a8 8 0 0 1 0-16h16.82a16.08 16.08 0 0 1 15.39 11.6L48.32 64H224a8 8 0 0 1 7.65 10.35ZM213.17 80H52.89l23.49 82.2a8 8 0 0 0 7.69 5.8h96.11a8 8 0 0 0 7.65-5.65Z"/>
          </svg>
        </div>
      </div>
      <h1>{{ product.name }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IProduct, StockType } from "~/src/types/Product";
import { useCardsStore } from "~/store";

const product: IProduct = useCardsStore().currentProduct

export interface Props {
  id: number,
  name: string,
  images: Array<string>
  price: number,
  stock: StockType,
  discount: number
}

const props = withDefaults(defineProps<Props>(), {
  name: 'unknown',
  image: 'unknown',
  price: 0,
  stock: StockType.OnOrder,
  discount: 0
});


onMounted(() => {

  console.log("АЛО БЛЯТЬ")
})

</script>

<style scoped lang="sass">
.product-card
  margin-top: 50px

  .main-information
    display: flex

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
          width: 500px
          height: 500px
          object-fit: contain
</style>