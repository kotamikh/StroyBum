<template>
  <teleport to="body">
    <div class="filter-window" v-if="props.show">
      <div class="filter">
        <p class="title">Фильтры
          <button class="close-filter" @click="emit('closeFilter')">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 15 15"><path fill-rule="evenodd" d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5l3.469-3.468Z" clip-rule="evenodd"/></svg>
          </button>
        </p>
        <ul class="filter-list">
          <li><p>По цене</p>
            <ul>
              <li><input type="checkbox" name="price">
                <label for="price">Сначала дороже</label>
              </li>
              <li><input type="checkbox" name="price">
                <label for="price">Сначала дешевле</label>
              </li>
            </ul>
          </li>
          <li><label for="sale">Товары со скидкой</label>
            <input type="checkbox" name="sale"></li>
          <li><p>По бренду</p>
            <ul>
            <li v-for="brand in brands"
                :key="brand.id"
                class="brand"
                @click="loadBrandProducts(brand.id)">
              <input type="checkbox" name="brand">
              <label for="brand">{{ brand.name }}</label>
            </li>
            </ul>
          </li>
        </ul>
        <button class="filter-search" @click="emit('closeFilter')">Искать</button>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { useRoute } from "#app";
import { ref } from "@vue/reactivity";
import { useSubjectsBrandsStore } from "~/store/subjects-brands";

const props = defineProps({
  show: {
    type: Boolean
  }
})

const emit = defineEmits(['closeFilter'])

const route = useRoute()
const store = useSubjectsBrandsStore()
const name = route.params.name.toString()

const subject = store.findSubjectId(name)
const brands = await store.getBrandsBySubject(subject)
const currentBrand = ref(0)

const loadBrandProducts = (brand: number) => {
  currentBrand.value = brand
}
</script>

<style scoped lang="sass">
.filter-window
  width: 100vw
  height: 100vh

  top: 0
  left: 0
  z-index: 3
  position: fixed
  flex-direction: column
  background-color: rgba(245, 247, 250, 0.7)
  font-size: calc((100vw - 320px) / (1280 - 320) * (18 - 14) + 14px)

  .filter
    width: 25%
    padding: 30px
    height: inherit
    min-width: 320px
    margin-left: auto

    gap: 20px
    display: flex
    flex-direction: column
    justify-content: center
    background-color: #F5F7FA
    border-left: 3px solid rgba(128, 128, 128, 0.7)

    .title
      display: flex
      align-items: center
      justify-content: space-between
      font-family: 'Russo One', sans-serif
      font-size: calc((100vw - 320px) / (1280 - 320) * (20 - 16) + 16px)

      .close-filter
        border: none
        display: flex
        align-items: center
        background-color: transparent

        svg
          fill: var(--middle-grey)

        &:hover
          svg
            fill: var(--grey)

    .filter-list
      gap: 10px
      display: flex
      flex-direction: column

    .filter-search
      border: none
      padding: 5px 0
      border-radius: 10px
      background-color: var(--yellow)
</style>