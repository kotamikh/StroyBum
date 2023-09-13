<template>
  <div class="pages">
    <NuxtLink :class="[ isCurrent(p) ? 'current' : 'page-number']"
            v-for="p in pages"
            v-model="page"
            @click="changeCurrent(p)"
    >{{ p }}</NuxtLink>
  </div>

</template>

<script setup lang="ts">
import { ref, computed } from "@vue/reactivity";

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const currentPage = ref(pages[0])

const isCurrent = (p: number) => {
  return currentPage.value === p
}

const props = defineProps(['page'])
const emit = defineEmits(['update:page'])

const page = computed({
  get() {
    return props.page
  },
  set(page) {
    emit('update:page', page)
  }
})

const changeCurrent = (p: number) => {
  currentPage.value = pages[p - 1]
  emit('update:page', p)
}

</script>

<style scoped lang="sass">
.pages
  gap: 10px
  display: flex
  font-size: 18px
  margin: 30px auto

  .page-number
    border: none
    cursor: pointer
    padding: 10px
  .current
    padding: 10px
    background-color: var(--yellow)
</style>