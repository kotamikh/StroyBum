<template>
  <h1>{{ name }}</h1>
  <div class="filter">
    <button @click="openFilter(name)">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="#808080"
              d="M14 12v7.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0l-2.01-2.01a.989.989 0 0 1-.29-.83V12h-.03L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L14.03 12H14Z"/>
      </svg>
      Фильтровать
    </button>
    <div v-if="filterOpened">
      <a v-for="brand in brands"
         :key="brand.id"
         class="brand"
         @click="loadBrandProducts(brand.name)"
      >{{ brand.name }}</a>
    </div>
  </div>
  <div class="catalog">
    <product-card v-for="(product, id) in useMock().filteredProducts"
                  :key="id"
                  :id="id"
                  :name="product.name"
                  :images="product.images"
                  :price="product.price"
                  :stock="product.stock"
                  :discount="product.discount"
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
import { Brand, useMock } from "~/store/mock";
import { useRoute } from "#app";

const route = useRoute()

const name = route.params.name.toString()

const filterOpened = ref(false)
const brands = ref<Brand[]>([])
const openFilter = (name: string) => {
  brands.value = useMock().getBrandsByCategory(name)
  filterOpened.value = !filterOpened.value
}

const currentPage = ref(1)
const currentBrand = ref("")

const updatePage = (data: number) => {
  currentPage.value = data
}

const limit = 5

const loadProducts = () => {
  if (currentBrand.value) {
    useMock().getAllProducts((currentPage.value - 1) * limit, limit, name, currentBrand.value)
  }
  else {
    useMock().getAllProducts((currentPage.value - 1) * limit, limit, name,)
  }
}

const loadBrandProducts = (brand: string) => {
  currentBrand.value = brand
  loadProducts()
}

watch(currentPage, loadProducts)
loadProducts()

</script>


<style scoped lang="sass">
.filter
  width: fit-content
  position: absolute
  right: 180px
  top: 145px
  background-color: #eeeeee
  z-index: 2
  overflow: hidden
  border-radius: 5px

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
  gap: 1rem
  display: flex
  flex-wrap: wrap
  margin-top: 50px

.pages
  display: flex
  margin: 30px auto
</style>