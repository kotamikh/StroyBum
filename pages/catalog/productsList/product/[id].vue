<template>
  <div class="bread-crumbs">
    <a @click="router.push('/catalog')">Каталог</a>
    <p>/</p>
    <a @click="router.push(`/catalog/productsList/${product.subject}`)">{{
        useSubjectsBrandsStore().findSubjectName(product.subject)
      }}</a>
    <p>/</p>
    <p>{{ product.name }}</p>
  </div>
  <div :class="[{ favourite : isFavourite }, 'product-card']">
    <div :class="[ product.images.length <= 1 ? 'two-cols' : '', 'main-information' ]">
      <div v-if="product.images.length > 1"
           class="gallery-wrapper"
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
      <div v-if="product.images.length <= 1" class="col-1">&nbsp;</div>
      <div class="current-photo">
        <button v-if="product.images.length > 1" :class="[{ active : isLeftButtonActive }, 'left-button']"
                @click="setCurrentImage(currentImageIndex - 1)">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
            <path d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.42Z"/>
          </svg>
        </button>
        <img :src="currentImage" :alt="product.name"/>
        <button v-if="product.images.length > 1" :class="[{ active : isRightButtonActive }, 'right-button']"
                @click="setCurrentImage(currentImageIndex + 1)">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
            <path d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42Z"/>
          </svg>
        </button>
        <button class="fav-btn" @click="useProductsStore().toggleFavourite(product.id)">
          <svg class="fav-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <path
                d="M240 98a57.63 57.63 0 0 1-17 41l-89.3 90.62a8 8 0 0 1-11.4 0L33 139a58 58 0 0 1 82-82.1l13 12.15l13.09-12.19A58 58 0 0 1 240 98Z"/>
          </svg>
        </button>
      </div>
      <div class="product-information">
        <h1>{{ product.name }}</h1>
        <div class="price-stock-cart">
          <div class="price-stock">
            <div class="price">
              <p>{{ product.price }} {{ chosenCurrencyName }}</p>
              <p v-if="product.discount !== 0" class="old-price">{{ countDiscount }} {{ chosenCurrencyName }}</p>
            </div>
            <p class="stock">{{ product.stock === 1 ? 'В наличии' : 'Под заказ' }}</p>
          </div>
          <cart-button :id="product.id" class="cart"/>
        </div>
      </div>
    </div>
    <div class="additional-information">
      <div class="characteristics">
        <h2>Характеристики</h2>
        <table>
          <tr v-for="(characteristic, index) in product.characteristics"
              :key="index"
          >
            <th><span class="char-name">{{ characteristic[0] }}</span></th>
            <td>{{ characteristic[1] }}</td>
          </tr>
        </table>
      </div>
      <div v-if="product.description" class="description">
        <h2>Описание</h2>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "#app";
import { onMounted } from "#imports";
import { computed } from "@vue/reactivity";
import { useProductsApi } from "~/api/products";
import { useProductsStore } from "~/store/products";
import { useCurrencyStore } from "~/store/currency";
import { useSubjectsBrandsStore } from "~/store/subjects-brands";

const router = useRouter()
const store = useProductsStore()
const product = ref(useProductsStore().currentProductPage)

const isFavourite = computed<boolean>(() => {
  return store.isFavourite(product.value.id)
})

const countDiscount = computed(() => Math.ceil(product.value.price / (100 - product.value.discount) * 100))
const chosenCurrencyName = computed<string>(() => {
  const currency = useCurrencyStore().allCurrencies.find(c => c.id == product.value.currency)
  if (currency) {
    return currency.name
  }
  return ""
})

const currentImageIndex = ref<number>(0)
const currentImage = computed<string>(() => product.value.images[currentImageIndex.value] || useProductsApi().getDefaultImage())

const setCurrentImage = (index: number) => {
  if (index < 0 || index >= product.value.images.length) return
  currentImageIndex.value = index
}

const isCurrent = (index: number) => {
  return currentImageIndex.value === index
}

const track = ref<HTMLDivElement | null>()
const galleryWrapper = ref<HTMLDivElement | null>()
const imageHeight = computed(() => {
  if (track.value) {
    return track.value.clientHeight / product.value.images.length
  }
  return 0
})

const trackTranslate = ref(0)
const translateLimit = ref(0)

onMounted(() => {
  if (track.value && galleryWrapper.value) {
    translateLimit.value = track.value.clientHeight - galleryWrapper.value.clientHeight
  }
})

const isUpButtonActive = computed(() => {
  return trackTranslate.value > 0
})

const isDownButtonActive = computed(() => {
  return trackTranslate.value <= translateLimit.value
})

const isLeftButtonActive = computed(() => {
  return currentImageIndex.value !== 0
})

const isRightButtonActive = computed(() => {
  return currentImageIndex.value !== product.value.images.length - 1
})

const moveToTop = () => {
  if (trackTranslate.value > 0) {
    trackTranslate.value -= imageHeight.value
    if (track.value) {
      track.value.style.transform = `translateY(-${ trackTranslate.value }px)`
    }
  }
}

const moveToDown = () => {
  if (trackTranslate.value < translateLimit.value) {
    trackTranslate.value += imageHeight.value
    if (track.value) {
      track.value.style.transform = `translateY(-${ trackTranslate.value }px)`
    }
  }
}
</script>

<style scoped lang="sass">
*
  font-weight: lighter

.bread-crumbs
  display: flex
  margin: 30px 0
  flex-wrap: wrap
  column-gap: 10px
  font-size: calc((100vw - 320px) / (1280 - 320) * (18 - 14) + 14px)

  @media screen and (max-width: 809px)
    margin-top: 0

  @media screen and (max-width: 559px)
    margin: 0

  a,
  p
    color: var(--light-grey)

  a:hover
    color: var(--grey)

.product-card
  width: 100%

  .two-cols.main-information
    grid-template-columns: 1fr 2.5fr 4.5fr

    @media screen and (max-width: 809px)
      grid-template-columns: 0.5fr 3.5fr 4fr

    @media screen and (max-width: 559px)
      grid-template-columns: 1fr
      grid-template-rows: 1fr 0.5fr

  .main-information
    display: grid
    margin-bottom: 5%
    grid-template-columns: 1fr 2.5fr 4.5fr

    @media screen and (max-width: 809px)
      grid-template-columns: 1fr 3fr 3.5fr

    @media screen and (max-width: 559px)
      grid-template-columns: 1fr
      grid-template-rows: 1fr 0.5fr

      .col-1
        display: none

    .left-button,
    .right-button
      display: none
      height: 100%
      position: absolute
      visibility: hidden

      @media screen and (max-width: 559px)
        top: 50%
        border: none
        display: block
        visibility: visible
        background-color: transparent
        transform: translate(-50%, -50%)

      svg > path
        fill: #dadada

    .active
      svg > path
        fill: #808080

    .left-button
      left: -16px

    .right-button
      right: -60px

    .gallery-wrapper
      display: flex
      position: relative
      justify-content: center

      @media screen and (max-width: 559px)
        display: none

      .up-button,
      .down-button
        left: 50%
        border: none
        position: absolute
        background-color: transparent
        transform: translate(-50%, -50%)

        @media screen and (max-width: 559px)
          display: none

        svg > path
          fill: #dadada

      .active
        svg > path
          fill: #808080

      .up-button
        top: -8px

      .down-button
        bottom: -60px

      .slider-gallery
        width: 90%
        padding: 8%
        height: 100%
        overflow: hidden
        position: absolute
        justify-self: center

        .slider-track
          gap: 12px
          display: flex
          flex-direction: column
          transition: all 0.2s ease

        img
          width: 100%
          padding: 2%
          aspect-ratio: 1
          object-fit: cover
          border-radius: 10px
          transition: scale 0.2s ease

        .current
          transform: scale(1.15)

    .current-photo
      width: 100%
      display: flex
      aspect-ratio: 1
      position: relative

      @media screen and (max-width: 559px)
        width: 50%
        margin: auto

      img
        padding: 5%
        width: 100%
        object-fit: contain
        border-radius: 10px

        @media screen and (max-width: 559px)
          border: 0

    .fav-btn
      top: 0
      right: 0
      border: none
      padding: 5px
      position: absolute
      display: inline-flex
      background-color: transparent
      width: calc((100vw - 320px) / (1280 - 320) * (42 - 32) + 32px)

      .fav-mark
        width: inherit
        fill: rgba(128, 128, 128, 0.4)

        &:hover
          fill: var(--light-grey)

    .product-information
      gap: 5%
      display: flex
      margin-left: 8%
      flex-direction: column
      justify-content: center

      @media screen and (max-width: 809px)
        margin: 0 5%

      @media screen and (max-width: 559px)
        width: 90%
        margin: auto
        grid-column-end: 3
        grid-column-start: 1

      h1
        margin: 0
        position: relative
        font-weight: normal
        font-size: calc((100vw - 320px) / (1280 - 320) * (24 - 16) + 16px)

      .price-stock-cart
        display: contents

        @media screen and (max-width: 559px)
          display: flex
          align-items: center
          justify-content: space-between

        .price-stock
          color: black
          display: flex
          flex-direction: column

          .price
            gap: 20px
            display: flex
            font-size: calc((100vw - 320px) / (1280 - 320) * (32 - 18) + 18px)

            .old-price
              font-size: 0.6em
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

          .stock
            font-size: calc((100vw - 320px) / (1280 - 320) * (18 - 14) + 14px)

        .cart
          padding: 1% 7%
          width: fit-content
          font-size: calc((100vw - 320px) / (1280 - 320) * (18 - 14) + 14px)

          @media screen and (max-width: 469px)
            margin: 0

  .additional-information
    gap: 30px
    display: flex
    flex-direction: column

    .characteristics table
      min-width: 60%

    .characteristics,
    .description
      font-size: calc((100vw - 320px) / (1280 - 320) * (18 - 14) + 14px)

      h2
        color: var(--grey)
        margin-bottom: 2%
        font-weight: normal
        font-size: calc((100vw - 320px) / (1280 - 320) * (22 - 18) + 18px)

      th
        width: 55%
        text-align: left
        position: relative
        vertical-align: bottom

        .char-name
          z-index: 1
          width: 100%
          text-align: end
          position: relative
          padding-right: 8px
          font-weight: normal
          background-color: white

        &:after
          content: ""
          left: 0
          width: 100%
          bottom: 6px
          display: block
          position: absolute
          border-bottom: 1px dashed rgba(128, 128, 128, 0.5)

.product-card.favourite
  .fav-btn > .fav-mark
    fill: var(--yellow)

    &:hover
      fill: var(--dark-yellow)
</style>