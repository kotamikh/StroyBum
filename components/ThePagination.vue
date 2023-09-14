<template>
  <div v-for="p in totalPages"
       :key="p"
       :class="[ isCurrent(p) ? 'current' : 'page-number']"
       @click="changeCurrent(p)"
  >{{ p }}</div>
</template>

<script setup lang="ts">

const isCurrent = (p: number) => {
  return props.page === p
}

const props = defineProps(['page', 'totalPages'])
const emit = defineEmits(['update:currentPage'])

const changeCurrent = (page: number) => {
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