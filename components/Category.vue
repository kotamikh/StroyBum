<template>
  <a @click="router.push('productsList/' + name)">
    <img :src="image" alt="img" style="width: 3rem"/>
    <h3>{{ name }}</h3>
  </a>
</template>

<script setup lang="ts">
import { Category } from "~/store/mock";
import { useRouter } from "#app";

const router = useRouter()

export interface Props extends Category {
  id: number,
  name: string,
  image: string
}

const props = withDefaults(defineProps<Props>(), {
  id: 0,
  name: 'unknown',
  image: ''
})
</script>

<style scoped lang="sass">

</style>