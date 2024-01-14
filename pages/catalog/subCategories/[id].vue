<template>
  <div class="bread-crumbs">
    <a @click="navigateTo('/catalog')">Каталог</a>
    <p>/</p>
    <h1>{{ parentalCategory.name }}</h1>
  </div>
  <ul class="subcategories">
    <li v-for="category in useSubjectsBrandsStore().findChildrenSubjects(parentalCategory.children)"
        :key="category.id"
    >
      <a @click="moveTo(category.children.length > 0 ? 'subCategories' : 'productsList', category.id)"
         class="category">
        <img :src="category.image" :alt="`${category.image}`"/>
        <p class="category-name">{{ category.name }}</p>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { navigateTo, useRoute } from "#app";
import { useSubjectsBrandsStore } from "~/store/subjects-brands";

const route = useRoute()
const parentalId = Number(route.params.id)
const parentalCategory = useSubjectsBrandsStore().findSubjectById(parentalId)

const moveTo = (path: string, id: number) => {
  navigateTo(`/catalog/${path}/${id}`)
}
</script>

<style scoped lang="sass">
*
  color: var(--light-grey)

.bread-crumbs,
.bread-crumbs > h1
  gap: 10px
  display: flex
  margin: 30px 0
  font-weight: lighter
  font-size: calc((100vw - 320px) / (1280 - 320) * (18 - 16) + 16px)

  @media screen and (max-width: 809px)
    display: none

  a:hover
    color: var(--grey)

  h1
    margin: 0

  @media screen and (max-width: 809px)
    display: none

  a:hover
    color: var(--grey)

.subcategories
  display: grid
  grid-gap: 20px
  flex-direction: column
  max-height: max-content
  grid-template-columns: repeat(2, 1fr)

  .category
    gap: 20px
    display: flex
    align-items: center
    font-size: calc((100vw - 320px) / (1280 - 320) * (18 - 16) + 16px)

    img
      width: 120px
      height: 80px
      object-fit: cover

    &:hover
      .category-name
        color: var(--dark-grey)
        text-decoration: underline
        text-underline-position: under
        text-decoration-thickness: 2px
        text-decoration-color: var(--yellow)
</style>