<template>
  <h1 class="page-name">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256"><path fill="#555555" d="M223 57a58.07 58.07 0 0 0-81.92-.1L128 69.05l-13.09-12.19A58 58 0 0 0 33 139l89.35 90.66a8 8 0 0 0 11.4 0L223 139a58 58 0 0 0 0-82Zm-11.35 70.76L128 212.6l-83.7-84.92a42 42 0 0 1 59.4-59.4l.2.2l18.65 17.35a8 8 0 0 0 10.9 0l18.65-17.35l.2-.2a42 42 0 1 1 59.36 59.44Z"/></svg>
    Избранное</h1>
  <div class="fav-products">
    <product-card v-for="product in favouriteProducts"
                  :id="product.id"
                  :name="product.name"
                  :images="product.images"
                  :price="product.price"
                  :stock="product.stock"
                  :subject="product.subject"
                  :discount="product.discount"
    />
  </div>
</template>

<script setup lang="ts">
import { IProduct } from "~/types/Product";
import { useProductsStore } from "~/store/products";

const store = useProductsStore()

const favouriteProducts = computed<IProduct[]>(() => {
  const result: IProduct[] = []

  for (const id of store.favourites) {
    const product = store.allProducts.get(id)
    if (product) {
      result.push(product)
    }
  }
  return result
})
</script>

<style scoped lang="sass">
.page-name
  gap: 10px
  display: flex
  align-items: center

  @media screen and (max-width: 809px)
    display: none

.fav-products
  display: grid
  grid-gap: 2rem
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