<template>
  <div class="search-block">
    <Icon name="ph:magnifying-glass" size="20px"/>
    <input type="text"
           placeholder="Поиск по сайту"
           v-model="inputSearch"
           @keyup.enter="searchProducts"
           @click.stop>
    <button :class="[{visible : inputSearch !== ''}, 'enter']"
            @click="searchProducts">
      <Icon name="ph:arrow-right-light" size="20px"/>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";

const router = useRouter()
const isActive = ref(false)
const inputSearch = ref('')

const searchProducts = () => {
  if (inputSearch.value) {
    (inputSearch.value)

    router.push(`search/ ${ inputSearch.value }`)
    inputSearch.value = ''
    isActive.value = false
  }
}
</script>

<style scoped lang="sass">
.search-block
  gap: 0.5rem
  display: flex
  align-items: center

  border: 0
  height: 40px
  padding: 5px
  cursor: pointer
  user-select: none
  width: fit-content
  border-bottom: 1px solid var(--middle-grey)
  font-size: calc((100vw - 320px) / (1280 - 320) * (16 - 14) + 14px)

  input
    border: 0
    outline: 0
    cursor: pointer
    max-width: 135px
    color: var(--grey)

  .enter
    opacity: 0
    padding: 5px
    border: none
    display: flex
    visibility: hidden
    background-color: transparent
    font-size: calc((100vw - 320px) / (1280 - 320) * (14 - 12) + 12px)

  .visible
    opacity: 100%
    visibility: visible
</style>