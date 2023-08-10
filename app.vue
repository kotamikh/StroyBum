<template>
  <NuxtLayout name="defaultlayout">
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup lang="ts">
import 'assets/main.css'
import 'assets/reset.css'

useHead({
  htmlAttrs: {
    lang: 'ru'
  }
})
</script>