<template>
  <teleport to="body">
    <div class="filter-window" v-if="props.show">
      <div class="filter">
        <p class="title">Фильтры
          <button class="close-filter" @click="emit('closeFilter')">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 15 15">
              <path fill-rule="evenodd"
                    d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5l3.469-3.468Z"
                    clip-rule="evenodd"/>
            </svg>
          </button>
        </p>
        <div class="filter-list">
          <div>
            <p>По цене</p>
            <ul>
              <li><input type="checkbox" id="fromHigh" value="fromHigh" v-model="fromHighPrice" @click="setFromHigh">
                <label for="fromHigh">Сначала дороже</label>
              </li>
              <li><input type="checkbox" id="fromLow" value="fromLow" v-model="fromLowPrice" @click="setFromLow">
                <label for="fromLow">Сначала дешевле</label>
              </li>
            </ul>
          </div>
          <div><label for="sale">Товары со скидкой</label>
            <input type="checkbox" name="sale" v-model="discountCheck" @click="discountCheck = !discountCheck">
          </div>
          <div class="brands-list"><p>По бренду</p>
            <label v-for="brand in brands"
                   :key="brand.id">
              <input type="checkbox" id="brand.id" :value="brand.id" v-model="checkedBrands">
              <span>{{ brand.name }}</span>
            </label>
          </div>
        </div>
        <button class="filter-search" @click="passInputsData">Искать</button>
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

const emit = defineEmits(['closeFilter', 'showProducts'])

const fromHighPrice = ref(false)
const fromLowPrice = ref(false)

const setFromHigh = () => {
  fromLowPrice.value = false
}
const setFromLow = () => {
  fromHighPrice.value = false
}

const discountCheck = ref(false)
const checkedBrands = ref([])

const route = useRoute()
const store = useSubjectsBrandsStore()
const subjectId = Number(route.params.id)

const brands = await store.getBrandsBySubject(subjectId)

const passInputsData = () => {
  emit('showProducts', fromHighPrice.value, fromLowPrice.value, discountCheck.value, checkedBrands.value)
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
    min-width: 310px
    margin-left: auto

    gap: 20px
    display: flex
    flex-direction: column
    justify-content: center
    background-color: #F5F7FA
    border-left: 2px solid rgba(128, 128, 128, 0.7)

    @media screen and (max-width: 425px)
      width: 100%

    .title
      display: flex
      color: var(--light-grey)
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
          fill: var(--light-grey)

        &:hover
          svg
            fill: var(--grey)

    .filter-list
      gap: 10px
      display: flex
      flex-direction: column

      ul
        margin: 0

      .brands-list
        display: flex
        flex-direction: column

    .filter-search
      border: none
      padding: 5px 0
      border-radius: 10px
      background-color: var(--yellow)
      transition: all 0.2s ease-in-out

      &:hover
        background-color: var(--dark-yellow)
</style>