<template>
  <div class="crumbs-filter">
    <div class="bread-crumbs">
      <a @click="navigateTo('/catalog')">Каталог</a>
      <p>/</p>
      <p>{{ name }}</p>
    </div>
    <div class="filter">
      <button class="filter-btn" @click="showFilter = !showFilter">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32">
          <path fill="#808080"
                d="M18 28h-4a2 2 0 0 1-2-2v-7.59L4.59 11A2 2 0 0 1 4 9.59V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v3.59a2 2 0 0 1-.59 1.41L20 18.41V26a2 2 0 0 1-2 2ZM6 6v3.59l8 8V26h4v-8.41l8-8V6Z"/>
        </svg>
        Фильтровать товары
      </button>
      <the-filter v-model:show="showFilter"
                  @close-filter="showFilteredProducts"
      />
    </div>
  </div>
  <h1>{{ name }}</h1>
  <div v-if="!products.size" class="empty-page">
    <p>Здесь ничего нет...</p>
    <img src="@/assets/common-images/смайлик.png" alt="sad-smile">
  </div>
  <div class="catalog" ref="root">
    <product-card v-for="[id, product] in products"
                  :key="id"
                  :id="id"
                  :name="product.name"
                  :images="product.images"
                  :price="product.price"
                  :stock="product.stock"
                  :discount="product.discount"
                  :subject="product.subject"
    />
    <div class="control-block" v-intersection-observer="[onIntersectionObserver, { root }]"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { navigateTo, useRoute } from "#app";
import TheFilter from "~/components/TheFilter.vue";
import { useProductsStore } from "~/store/products";
import { vIntersectionObserver } from '@vueuse/components';
import { useSubjectsBrandsStore } from "~/store/subjects-brands";

const route = useRoute()
const showFilter = ref(false)
const name = route.params.name.toString()

const limit = ref<number>(6)
const categoryId = useSubjectsBrandsStore().findSubjectId(name)
const productNumber = await useProductsStore().countProductNumber(0, 250)

let products = await useProductsStore().loadWithConditions(0, limit.value, categoryId)

const root = ref(null)
const isVisible = ref(false)

function onIntersectionObserver([{ isIntersecting }]: IntersectionObserverEntry[]) {
  isVisible.value = isIntersecting
  if (limit.value < productNumber) {
      limit.value += 6
      useProductsStore().loadWithConditions(0, limit.value, categoryId)
    }
}

const showFilteredProducts = async (priceFilter: string, discountCheck: boolean, brandFilter: number) => {
  if (discountCheck) {
    products = new Map([...products].filter(el => el[1].discount > 0))
  }
  if (!discountCheck) {
    products = await useProductsStore().loadWithConditions(0, limit.value, categoryId)
  }
  if (priceFilter === 'fromHigh') {
    products = new Map([...products].sort((el1, el2) => el2[1].price - el1[1].price))
  }
  if (priceFilter === 'fromLow') {
    products = new Map([...products].sort((el1, el2) => el1[1].price - el2[1].price))
  }
  if (brandFilter) {
    products = new Map([...products].filter(el => el[1].brand === brandFilter))
  }

  showFilter.value = false
}
</script>

<style scoped lang="sass">
.crumbs-filter
  display: flex
  align-items: center
  justify-content: space-between

  .bread-crumbs
    gap: 10px
    display: flex
    margin: 30px 0
    font-size: calc((100vw - 320px) / (1280 - 320) * (18 - 16) + 16px)

    a:hover
      color: var(--grey)

  .filter
    width: fit-content
    position: relative
    flex-direction: column

    .filter-btn
      gap: 5px
      border: none
      display: flex
      padding: 5px 10px
      align-items: center
      justify-content: center
      background-color: transparent

      &:hover
        color: var(--grey)

        svg > path
          fill: var(--grey)

h1
  margin-top: 0

.empty-page
  margin: auto
  font-size: calc((100vw - 320px) / (1280 - 320) * (20 - 18) + 18px)

  img
    margin: auto

.catalog
  display: grid
  grid-row-gap: 2rem
  grid-column-gap: 1rem
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))

  @media screen and (max-width: 687px)
    grid-row-gap: 1rem
    grid-column-gap: 8px

  @media screen and (max-width: 651px)
    grid-column-gap: 15px
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr))

  @media screen and (max-width: 459px)
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr))
</style>