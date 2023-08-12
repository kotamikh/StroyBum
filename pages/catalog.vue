<template>
  <h2>Каталог</h2>
    <ul class="categories">
      <li v-for="(category, id) in categories"
          :key="id"
          class="category"
      >
        <NuxtLink :to="category.path">
        <img :src="`${category.image}`" alt="img" style="width: 3rem"/>
        <h3>{{ category.text }}</h3>
        </NuxtLink>
      </li>
    </ul>
</template>

<script setup lang="ts">
import siding from '@/assets/catalog-images/сайдинг.png'
import additionalElements from '@/assets/catalog-images/доборные элементы.png'
import decking from '@/assets/catalog-images/террасная доска.png'
import facadePanels from '@/assets/catalog-images/фасадные панели.png'
import windowSills from '@/assets/catalog-images/подоконник.png'
import roof from '@/assets/catalog-images/кровля.png'
import batteryScreens from '@/assets/catalog-images/радиатор.png'
import insulation from '@/assets/catalog-images/утеплители.png'
import ceilings from '@/assets/catalog-images/потолки.png'
import foamSealant from 'assets/catalog-images/пена герметик.png'
import waterDisposal from '@/assets/catalog-images/водоотведение.png'
import other from '@/assets/catalog-images/прочее.png'


const categories = {
  siding: {
    text: 'Сайдинг',
    image: siding,
    path: 'siding'
  },
  additionalElements: {
    text: 'Доборные элементы сайдинга',
    image: additionalElements,
    path: 'additionalElements'
  },
  decking: {
    text: 'Террасная доска',
    image: decking,
    path: 'decking'
  },
  facadePanels: {
    text: 'Фасадные панели',
    image: facadePanels,
    path: 'facadePanels'
  },
  windowSills: {
    text: 'Подоконники',
    image: windowSills,
    path: 'windowSills'
  },
  roof: {
    text: 'Кровля',
    image: roof,
    path: 'roof'
  },
  batteryScreens: {
    text: 'Декоративные экраны для батарей',
    image: batteryScreens,
    path: 'batteryScreens'
  },
  insulation: {
    text: 'Утеплителти',
    image: insulation,
    path: 'insulation'
  },
  ceilings: {
    text: 'Подвесные потолки',
    image: ceilings,
    path: 'ceilings'
  },
  foamSealant: {
    text: 'Пена герметики, пистолеты',
    image: foamSealant,
    path: 'foamSealant'
  },
  waterDisposal: {
    text: 'Водосточные системы',
    image: waterDisposal,
    path: 'waterDisposal'
  },
  other: {
    text: 'Прочее',
    image: other,
    path: 'other'
  }
}

</script>

<style scoped lang="sass">
.categories
  gap: 20px
  display: flex
  margin: 30px 0
  flex-wrap: wrap
  max-height: 400px
  flex-direction: column

  a
    gap: 10px
    display: flex
    cursor: pointer
    align-items: center

    &:hover
      h3
        color: #4d4d4d
        text-decoration: underline
        text-underline-position: under
        text-decoration-thickness: 2px
        text-decoration-color: var(--yellow)
</style>