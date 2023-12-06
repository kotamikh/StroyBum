<template>
  <h1>Каталог</h1>
  <ul class="categories">
    <li v-for="[id, category] in useCategoriesBrandsStore().categoriesMap"
        :key="id">
      <a @click="navigateTo(`/catalog/productsList/${useCategoriesBrandsStore().findCategoryName(id)}`)"
         class="category">
        <img :src="category.image" alt="img" style="width: 3rem"/>
        <h3>{{ category.name }}</h3>
      </a>
    </li>
  </ul>
  <NuxtPage/>
</template>

<script setup lang="ts">
import { useCategoriesBrandsStore } from "~/store/categories-brands";
import { navigateTo } from "#app";
</script>

<style scoped lang="sass">
.categories
  display: grid
  grid-gap: 20px
  flex-direction: column
  max-height: max-content
  grid-template-columns: repeat(2, 1fr)

  @media screen and (max-width: 549px)
    li
      padding: 2%
      height: 70px
      display: flex
      border: 2px solid transparent

      &:hover
        border-radius: 5px
        border: 2px solid var(--yellow)

  @media screen and (max-width: 549px)
    gap: 10px
    display: flex
    flex-direction: column

    li
      width: fit-content

  @media screen and (min-width: 549px)
    li
      &:hover
        h3
          color: #4d4d4d
          text-decoration: underline
          text-underline-position: under
          text-decoration-thickness: 2px
          text-decoration-color: var(--yellow)

  .category
    gap: 10px
    display: flex
    align-items: center
    font-size: calc((100vw - 320px) / (1280 - 320) * (16 - 14) + 14px)
</style>