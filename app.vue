<template>
  <NuxtLayout name="defaultlayout">
    <NuxtLoadingIndicator/>
      <Teleport to="body">
        <transition>
          <div class="overlay" v-if="loading">
            Loading...
          </div>
        </transition>
      </Teleport>
      <NuxtPage v-if="!loading"/>
  </NuxtLayout>
</template>

<script setup lang="ts">
import 'assets/styles/main.css'
import 'assets/styles/reset.css'

import { useCategoriesBrandsStore } from "~/store/categories-brands";

const loading = ref<boolean>(true)

const init = async () => {
  await useCategoriesBrandsStore().loadAllSubjects()
  await useCategoriesBrandsStore().loadAllBrands()
}

init().then(() => {
  loading.value = false
})
</script>

<style lang="sass">
.overlay
  top: 0
  left: 0
  position: fixed
  height: 100%
  width: 100%
  display: flex
  justify-content: center
  align-items: center
  background-color: rgba(255, 255, 255, 0.8)

.v-enter-active,
.v-leave-active
  transition: opacity 0.5s ease

.v-enter-from,
.v-leave-to
  opacity: 0
</style>