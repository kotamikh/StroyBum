<template>
  <div class="wrapper">
    <h1 class="page-name">Каталог</h1>
    <ul class="categories">
      <li v-for="category in useSubjectsBrandsStore().findParentalSubjects()"
          :key="category.id">
        <a @click="moveTo(category.children.length > 0 ? 'subCategories' : 'productsList', category.id)"
           class="category">
          <img :src="category.image" alt="img" style="width: 3rem"/>
          <p class="category-name">{{ category.name }}</p>
        </a>
        <ul class="children-categories">
          <li v-for="child in useSubjectsBrandsStore().findChildrenSubjects(category.children)"
              class="child"
          ><a @click="navigateTo(`/catalog/productsList/${child.id}`)">{{ child.name }}</a>
          </li>
        </ul>
      </li>
    </ul>
    <NuxtPage/>
  </div>
</template>

<script setup lang="ts">
import { navigateTo } from "#app";
import { useSubjectsBrandsStore } from "~/store/subjects-brands";

const moveTo = (path: string, id: number) => {
  navigateTo(`/catalog/${path}/${id}`)
}
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
    gap: 10px
    display: flex
    flex-direction: column

    li
      width: 100%

      a
        width: inherit
        padding: 1%
        height: 70px
        display: flex

  a
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

  .children-categories
    overflow: hidden
    margin-left: 3.5rem
    display: -webkit-box
    -webkit-line-clamp: 3
    -webkit-box-orient: vertical

    .child
      &:hover
        a
          color: var(--dark-grey)
          text-decoration: underline
          text-underline-position: under
          text-decoration-thickness: 2px
          text-decoration-color: var(--yellow)
</style>