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
import { useProductsStore } from "~/store/products";
import { useSubjectsBrandsStore } from "~/store/subjects-brands";
import { useCurrencyStore } from "~/store/currency";

const loading = ref<boolean>(true)

const init = async () => {
  await useSubjectsBrandsStore().loadAllBrands()
  await useSubjectsBrandsStore().loadAllSubjects()
}

init().then(() => {
  loading.value = false
})

const productsCount = ref(100)
useProductsStore().loadAll(0, productsCount.value)
useSubjectsBrandsStore().loadAllSubjects()
useCurrencyStore().loadAllCurrencies()
</script>

<style lang="sass">
.overlay
  top: 0
  left: 0
  width: 100%
  height: 100%
  display: flex
  position: fixed
  align-items: center
  justify-content: center
  background-color: rgba(255, 255, 255, 0.8)

.v-enter-active,
.v-leave-active
  transition: opacity 0.5s ease

.v-enter-from,
.v-leave-to
  opacity: 0
</style>