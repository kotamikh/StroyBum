<template>
  <div class="bread-crumbs">
    <a @click="router.push('/catalog')">Каталог</a>
    <p>/</p>
    <h1>{{ name }}</h1>
  </div>
  <div class="filter">
    <button @click="openFilter">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="#808080"
              d="M14 12v7.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0l-2.01-2.01a.989.989 0 0 1-.29-.83V12h-.03L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L14.03 12H14Z"/>
      </svg>
      Фильтровать
    </button>
    <div v-if="filterOpened">
      <a v-for="brand in useCategoriesBrandsStore().brandsBySubject"
         :key="brand.id"
         class="brand"
         @click="loadBrandProducts(brand.id)"
      >{{ brand.name }}</a>
    </div>
  </div>
  <div class="catalog">
    <product-card v-for="[id, product] in useProductsStore().products"
                  :key="id"
                  :id="id"
                  :name="product.name"
                  :images="product.images"
                  :price="product.price"
                  :stock="product.stock"
                  :discount="product.discount"
                  :category="product.category"
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

const router = useRouter()
const route = useRoute()
const name = route.params.name.toString()

const filterOpened = ref(false)
const allBrands = useCategoriesBrandsStore().getAllBrands()
const brands = useCategoriesBrandsStore().getBrandsBySubject(name, allBrands)
const currentBrand = ref(0)
useCategoriesBrandsStore().getBrandsBySubject(name, allBrands)

const openFilter = () => {
  filterOpened.value = !filterOpened.value
}

const loadBrandProducts = (brand: number) => {
  currentBrand.value = brand
  loadProducts()
}

const currentPage = ref(1)
const updatePage = (data: number) => {
  currentPage.value = data
}

const limit = 5
const categoryId = useCategoriesBrandsStore().findCategoryId(name)

const loadProducts = () => {
  if (currentBrand.value) {
    useProductsStore().loadAll((currentPage.value - 1) * limit, limit, categoryId, currentBrand.value)
  } else {
    useProductsStore().loadAll((currentPage.value - 1) * limit, limit, categoryId)
  }
}

watch(currentPage, loadProducts)

loadProducts()
</script>


<style scoped lang="sass">
.bread-crumbs
  gap: 10px
  display: flex
  margin: 30px 0
  align-items: center
  font-size: calc((100vw - 320px) / (1280 - 320) * (18 - 16) + 16px)
  h1
    margin: 0
    font-size: inherit

.filter
  z-index: 2
  top: 145px
  right: 180px
  overflow: hidden
  position: absolute
  width: fit-content
  border-radius: 5px
  background-color: #eeeeee

  button
    display: flex
    justify-content: center
    align-items: center
    border: none
    padding: 5px 20px

    &:hover
      background-color: #E3DD5F

  .brand
    display: block
    padding: 10px 20px

    &:hover
      background-color: #E3DD5F

.catalog
  gap: 2rem
  display: flex
  flex-wrap: wrap
  margin-top: 50px

.pages
  display: flex
  margin: 30px auto
</style>