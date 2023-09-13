<template>
    <NuxtLink :class="[ isCurrent(props.page) ? 'current' : 'page-number']"
              @click="changeCurrent(props.page)"
    >{{ props.page }}</NuxtLink>
</template>

<script setup lang="ts">
// import { ref, computed } from "@vue/reactivity";

const isCurrent = (p: number) => {
  return props.currentPage === p
}

const props = defineProps(['currentPage', 'page'])
const emit = defineEmits(['update:currentPage'])

const changeCurrent = (page: number) => {
  console.log(page)
  emit('update:currentPage', page)
}
</script>

<style scoped lang="sass">
.page-number
  padding: 10px
  cursor: pointer

.current
  padding: 10px
  background-color: var(--yellow)
</style>