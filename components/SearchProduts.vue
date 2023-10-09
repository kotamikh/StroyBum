<template>
  <div class="search-block"
       @click="isActive = !isActive"
  >
    Поиск по сайту
    <div v-if="isActive" class="search-hidden">
      <input type="text"
             v-focus
             v-model="inputSearch"
             @keyup.enter="searchProducts"
             @click.stop>
      <button class="enter"
              @click="searchProducts">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256">
          <g fill="#808080">
            <path d="M192 112a80 80 0 1 1-80-80a80 80 0 0 1 80 80Z" opacity=".2"/>
            <path
                d="m229.66 218.34l-50.06-50.06a88.21 88.21 0 1 0-11.32 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32ZM40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72Z"/>
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";

const router = useRouter()
const isActive = ref(false)
const inputSearch = ref('')

const vFocus = {
  mounted: (el: HTMLInputElement) => el.focus()
}

const searchProducts = () => {
  if (inputSearch.value) {
    (inputSearch.value)

    router.push(`search/ ${inputSearch.value}`)
    inputSearch.value = ''
    isActive.value = false
  }
}
</script>

<style scoped lang="sass">
.search-block
  gap: 10px
  display: flex
  align-items: center

  border: 0
  height: 40px
  cursor: pointer
  user-select: none
  padding: 5px 15px
  border-radius: 5px
  width: fit-content
  background-color: var(--background-grey)
  font-size: calc((100vw - 320px) / (1280 - 320) * (16 - 14) + 14px)

  .search-hidden
    display: flex
    align-items: center
    input
      border: 0
      outline: 0
      color: var(--grey)
      background-color: inherit

  .enter
    border: none
    margin: auto
    display: flex
    padding: 5px
    font-size: calc((100vw - 320px) / (1280 - 320) * (14 - 12) + 12px)
</style>