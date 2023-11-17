<template>
  <div class="crumbs-filter">
    <div class="bread-crumbs">
      <a @click="router.push('/catalog')">Каталог</a>
      <p>/</p>
      <h1>{{ name }}</h1>
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
                  @close-filter="showFilter = false"
      />
    </div>
  </div>
  <div class="catalog">
    <product-card v-for="[id, product] in products"
                  :key="id"
                  :id="id"
                  :name="product.name"
                  :images="product.images"
                  :price="product.price"
                  :stock="product.stock"
                  :discount="product.discount"
                  :category="product.subject"
    />
  </div>
</template>

<script setup lang="ts">
import { useProductsStore } from "~/store/products";
import { ref } from "@vue/reactivity";
import { useRoute } from "#app";
import { useCategoriesBrandsStore } from "~/store/categories-brands";
import TheFilter from "~/components/TheFilter.vue";

const route = useRoute()
const router = useRouter()
const showFilter = ref(false)
const name = route.params.name.toString()
console.log(name)

const limit = ref<number>(6)
const categoryId = useCategoriesBrandsStore().findCategoryId(name)
const productNumber = await useProductsStore().countProductNumber(0, 250, categoryId)

const products = await useProductsStore().loadAll(0, limit.value, categoryId)

async function checkPosition() {
  const height = document.body.offsetHeight
  const screenHeight = window.innerHeight

  const scrolled = window.scrollY

  const threshold = height - screenHeight / 5

  const position = scrolled + screenHeight

  if (position >= threshold) {
    console.log(limit.value, productNumber)
    if (limit.value < productNumber) {
      limit.value += 6
      console.log(limit.value, categoryId)
      await useProductsStore().loadAll(0, limit.value, categoryId)
    }
   else {
      window.removeEventListener('scroll', throttle(checkPosition, 250))
      window.removeEventListener('resize', throttle(checkPosition, 250))
    }
  }
}

(async function () {
  window.addEventListener('scroll', throttle(checkPosition, 250))
  window.addEventListener('resize', throttle(checkPosition, 250))
}())

function throttle(fn: Function, timeout: number) {
  let timer: ReturnType<typeof setTimeout> | number = 0

  return function perform(...args: Parameters<any>) {
    if (timer) return

    timer = setTimeout(() => {
      fn(...args)
      clearTimeout(timer)
      timer = 0
    }, timeout)
  }
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

    h1
      margin: 0
      font-size: inherit

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

    .brand
      display: block
      padding: 10px 20px

      &:hover
        background-color: #E3DD5F

.catalog
  display: grid
  grid-gap: 1rem
  margin-top: 50px
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))

  @media screen and (max-width: 469px)
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr))
</style>