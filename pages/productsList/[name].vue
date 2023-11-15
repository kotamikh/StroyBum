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
    <product-card v-for="[id, product] in useProductsStore().productsMap"
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
  <div class="pages">
    <the-pagination v-model="currentPage"
                    :total-pages="10"
                    :page="currentPage"
                    @update:current-page="updatePage"
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

const currentPage = ref(1)
const updatePage = (data: number) => {
  currentPage.value = data
}

const limit = 10
const categoryId = useCategoriesBrandsStore().findCategoryId(name)

const loadProducts = () => {
  useProductsStore().loadAll((currentPage.value - 1) * limit, limit, categoryId)
  // if (currentBrand.value) {
  //   useProductsStore().loadAll((currentPage.value - 1) * limit, limit, categoryId, currentBrand.value)
  // } else {
  //
  // }
}

watch(currentPage, loadProducts, {immediate: true})

loadProducts()
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
  gap: 1rem
  display: grid
  flex-wrap: wrap
  margin-top: 50px
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))

  @media screen and (max-width: 469px)
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr))

.pages
  display: flex
  margin: 30px auto
</style>