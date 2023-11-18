<template>
  <div class="bread-crumbs">
    <a @click="router.push('/catalog')">Каталог</a>
    <p>/</p>
    <a @click="router.push('/')">{{ }}</a>
  </div>
  <div :class="[{ favourite : isFavourite }, 'product-card']">
    <div class="main-information">
        <div class="gallery-wrapper"
             ref="galleryWrapper"
        >
          <button v-if="product.images.length > 3" :class="[{ active : isUpButtonActive },  'up-button']"
                  @click="moveToTop">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path d="m12 10.8l-4.6 4.6L6 14l6-6l6 6l-1.4 1.4l-4.6-4.6Z"/>
            </svg>
          </button>
          <div class="slider-gallery">
            <div class="slider-track"
                 ref="track"
            >
              <img v-for="(img, index) in product.images"
                   :key="index"
                   :src="img"
                   ref="image"
                   :alt="product.name"
                   :class="{ current : isCurrent(index) }"
                   @click="setCurrentImage(index)"/>
            </div>
          </div>
          <button v-if="product.images.length > 3" :class="[{ active : isDownButtonActive }, 'down-button']"
                  @click="moveToDown">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4l-6 6Z"/>
            </svg>
          </button>
        </div>
        <div class="current-photo">
          <img :src="currentImage" :alt="product.name"/>
        </div>
      <div class="product-information">
        <h1>{{ product.name }}
          <button class="fav-btn" @click="useProductsStore().toggleFavourite(product.id)">
            <svg class="fav-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
              <path
                  d="M223 57a58.07 58.07 0 0 0-81.92-.1L128 69.05l-13.09-12.19A58 58 0 0 0 33 139l89.35 90.66a8 8 0 0 0 11.4 0L223 139a58 58 0 0 0 0-82Zm-11.35 70.76L128 212.6l-83.7-84.92a42 42 0 0 1 59.4-59.4l.2.2l18.65 17.35a8 8 0 0 0 10.9 0l18.65-17.35l.2-.2a42 42 0 1 1 59.36 59.44Z"/>
            </svg>
          </button>
        </h1>
         <div class="price-stock">
          <div class="price">
            <p>{{ product.price }} <span class="rub">Р</span></p>
            <p v-if="product.discount !== 0" class="old-price">{{ countDiscount }} <span class="rub">Р</span></p>
          </div>
          <p class="stock">{{ product.stock === 1 ? 'В наличии' : 'Под заказ' }}</p>
        </div>
        <button class="cart-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <path fill="#555555"
                  d="M96 216a16 16 0 1 1-16-16a16 16 0 0 1 16 16Zm88-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm47.65-125.65l-28.53 92.71A23.89 23.89 0 0 1 180.18 184H84.07A24.11 24.11 0 0 1 61 166.59L24.82 40H8a8 8 0 0 1 0-16h16.82a16.08 16.08 0 0 1 15.39 11.6L48.32 64H224a8 8 0 0 1 7.65 10.35ZM213.17 80H52.89l23.49 82.2a8 8 0 0 0 7.69 5.8h96.11a8 8 0 0 0 7.65-5.65Z"/>
          </svg>
          В корзину
        </button>
      </div>
    </div>
    <div class="additional-information">
      <div class="characteristics">
        <h2>Характеристики</h2>
        <ul>
          <li v-for="(characteristic, index) in product.characteristics"
              :key="index">
            <p class="left">
              <span class="label">{{ characteristic[0] }}</span>
            </p>
            <span class="value">{{ characteristic[1] }}</span>
          </li>
        </ul>
      </div>
      <div v-if="product.description" class="description">
        <h2>Описание</h2>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductsStore } from "~/store/products";
import { VNodeRef } from "@vue/runtime-core";
import { useRoute } from "#app";
import { ref } from "vue";
import { computed } from "@vue/reactivity";
import { useProductsApi } from "~/api/products";
import { useElementSize } from "@vueuse/core";

const route = useRoute()
const router = useRouter()
const store = useProductsStore()

const id = computed<number>(() => Number(route.params.id))
const product = ref(useProductsApi().getDefaultProduct())

const result = await store.getProduct(id.value)

if (result.ok) {
  product.value = result.data
}

const isFavourite = computed<boolean>(() => {
  return store.isFavourite(product.value.id)
})

const countDiscount = computed(() => Math.ceil(product.value.price / (100 - product.value.discount) * 100))

const currentImageIndex = ref<number>(0)
const currentImage = computed<string>(() => product.value.images[currentImageIndex.value] || useProductsApi().getDefaultImage())

const setCurrentImage = (index: number) => {
  if (index < 0 || index >= product.value.images.length) return
  currentImageIndex.value = index
}

const isCurrent = (index: number) => {
  return currentImageIndex.value === index
}

const track: VNodeRef = ref<VNodeRef | undefined>()
const trackTranslate = ref(0)
const image = ref<VNodeRef | null>(null)
const galleryWrapper = ref<VNodeRef | null>(null)
// const { width: imageWidth, height: imageHeight } = useElementSize(image)
// const { width: galleryWidth, height: galleryHeight } = useElementSize(galleryWrapper)
if (image.value && galleryWrapper.value) {
  const translateLimit = image.value.$el.clientHeight * product.value.images.length - galleryWrapper.value.$el.clientHeight
  console.log(translateLimit)
}

const isUpButtonActive = computed(() => {
  return trackTranslate.value !== 0
})
const isDownButtonActive = computed(() => {
  return trackTranslate.value > translateLimit
})

const moveToTop = () => {
  if (trackTranslate.value < 0) {
    trackTranslate.value += imageHeight.value
    track.value.style.transform = `translateY(${ trackTranslate.value }px)`
  }
}

const moveToDown = () => {
  if (trackTranslate.value > translateLimit) {
    trackTranslate.value -= imageHeight.value
    track.value.style.transform = `translateY(${ trackTranslate.value }px)`
  }
}
</script>

<style scoped lang="sass">
*
  color: var(--grey)

.product-card
  width: 100%
  margin: 70px auto

  .main-information
    display: grid
    margin-bottom: 70px
    grid-template-columns: 1fr 3fr 4fr

    @media screen and (max-width: 625px)
      grid-row-gap: 2rem
      grid-template-columns: 1fr 2.5fr
      //grid-template-rows: repeat(2, 1fr)

    .gallery-wrapper
      display: flex
      position: relative
      justify-content: center

      .up-button,
      .down-button
        left: 50%
        border: none
        position: absolute
        background-color: transparent
        transform: translate(-50%, -50%)

        svg > path
          fill: #dadada

      .active
        svg > path
          fill: #808080

      .up-button
        top: -12px

      .down-button
        bottom: -60px

      .slider-gallery
        width: 90%
        height: 100%
        padding: 8%
        overflow: hidden
        position: absolute
        &:hover
          overflow-y: scroll
          &::-webkit-scrollbar
            display: none
            scrollbar-width: none
            -ms-overflow-style: none

        .slider-track
          transition: all 0.2s ease

        img
          width: 100%
          aspect-ratio: 1
          padding: 2%
          object-fit: cover
          border-radius: 10px
          margin-bottom: 15px
          transition: scale 0.2s ease

        .current
          transform: scale(1.15)
          border: 1px solid rgba(128, 128, 128, 0.7)

    .current-photo
      display: flex
      aspect-ratio: 1

      img
        padding: 3%
        width: 100%
        object-fit: contain
        border-radius: 15px
        border: 2px solid rgba(128, 128, 128, 0.7)

    .product-information
      gap: 5%
      display: flex
      margin-left: 8%
      padding-right: 8%
      flex-direction: column
      justify-content: center

      @media screen and (max-width: 625px)
        grid-column-start: 1
        grid-column-end: 3

      h1
        margin: 0
        position: relative
        font-size: calc((100vw - 320px) / (1280 - 320) * (30 - 18) + 18px)

      .fav-btn
       border: none
       position: absolute
       align-items: center
       display: inline-flex
       background-color: transparent
       width: calc((100vw - 320px) / (1280 - 320) * (42 - 30) + 30px)
       height: calc((100vw - 320px) / (1280 - 320) * (42 - 30) + 30px)

      .fav-mark
        width: inherit
        fill: var(--grey)

        &:active
          fill: var(--yellow)

      .price-stock
        color: black
        display: flex
        flex-direction: column

        .price
          gap: 20px
          display: flex
          font-size: calc((100vw - 320px) / (1280 - 320) * (32 - 20) + 20px)

          .old-price
            font-size: 0.6em
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
          font-size: calc((100vw - 320px) / (1280 - 320) * (18 - 14) + 14px)

      .cart-btn
        gap: 8px
        border: none
        display: flex
        cursor: pointer
        padding: 5px 1rem
        width: fit-content
        color: var(--grey)
        align-items: center
        border-radius: 12px
        background-color: var(--yellow)
        font-size: calc((100vw - 320px) / (1280 - 320) * (20 - 14) + 14px)
        svg
          width: calc((100vw - 320px) / (1280 - 320) * (30 - 22) + 22px)
          //height: calc((100vw - 320px) / (1280 - 320) * (42 - 30) + 30px)

  .additional-information
    gap: 30px
    display: flex
    flex-direction: column

    .characteristics,
    .description
      font-size: calc((100vw - 320px) / (1280 - 320) * (18 - 14) + 14px)

      h2
        color: var(--grey)
        margin-bottom: 20px
        font-size: calc((100vw - 320px) / (1280 - 320) * (22 - 18) + 18px)

      ul
        margin: 0
        position: relative

        li
          margin-bottom: 10px

          .left
            width: 40%
            float: left
            overflow: hidden
            position: relative

            span.label
              position: relative
              display: inline-block

              &:after
                content: ''
                bottom: 0
                left: 100%
                right: -600px
                position: absolute
                border-bottom: 1px dashed #888

.product-card.favourite
  .fav-btn > .fav-mark
    fill: var(--yellow)

    &:active
      fill: var(--grey)
</style>