<template>
  <div class="wrapper">
    <h1 class="page-name">Каталог</h1>
    <ul class="categories">
      <li v-for="[id, category] in useSubjectsBrandsStore().subjectsMap"
          :key="id">
        <a @click="navigateTo(`/catalog/productsList/${useSubjectsBrandsStore().findSubjectName(id)}`)"
           class="category">
          <img :src="category.image" alt="img" style="width: 3rem"/>
          <div class="category-name">{{ category.name }}</div>
        </a>
      </li>
    </ul>
    <NuxtPage/>
  </div>
</template>

<script setup lang="ts">
import { navigateTo } from "#app";
import { useSubjectsBrandsStore } from "~/store/subjects-brands";
</script>

<style scoped lang="sass">
*
  color: var(--light-grey)

.wrapper
  @media screen and (max-width: 1000px)
    width: 95%
    margin: auto

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
      width: 100%

      a
        width: inherit

  @media screen and (min-width: 549px)
    li
      &:hover
        .category-name
          color: var(--dark-grey)
          text-decoration: underline
          text-underline-position: under
          text-decoration-thickness: 2px
          text-decoration-color: var(--yellow)

  .category
    gap: 10px
    display: flex
    align-items: center
    font-size: calc((100vw - 320px) / (1280 - 320) * (18 - 16) + 16px)
</style>