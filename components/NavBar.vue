<template>
  <div class="navigation-panel">
    <NuxtLink to="homepage">
      <h1>Строй<span>Бум</span></h1>
    </NuxtLink>
    <div class="nav-menu">
      <button>
        <NuxtLink to="catalog">Каталог</NuxtLink>
      </button>
      <ul class="nav-menu-left">
        <li v-for="(link, text) in leftlinks"
            :key="text"
            :value="link"
            :class="{ current : isCurrent(link) }"
            @click="onClick(link)">
          <NuxtLink :to="link">{{ text }}</NuxtLink>
        </li>
      </ul>
      <div class="nav-menu-right">
        <NuxtLink to="favourites">
          <img class="nav-image" src="@/assets/common-images/сердце.png" alt="избранное"/>
        </NuxtLink>
        <NuxtLink to="basket">
          <img class="nav-image" src="@/assets/common-images/корзина.png" alt="корзина"/>
        </NuxtLink>
        <NuxtLink to="admin-page">Войти</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const leftlinks = {'Скидки': '/discount', 'Доставка и оплата': '/delivery-payment', 'Контакты': '/contacts'}
const currentLink = ref(null)

const isCurrent = (link) => {
  return link === currentLink.value
}
const onClick = (link) => {
  console.log('click')
  currentLink.value = link
  console.log(currentLink.value)
}
</script>

<style scoped lang="sass">
@import url('https://fonts.cdnfonts.com/css/russo-one')

.navigation-panel
  display: flex
  margin: 30px 0

  a
    color: #808080
    font-weight: bolder

    .current
      color: var(--grey)
      border-bottom: 2px solid var(--yellow)

    &:hover
      color: var(--grey)


  h1
    font-family: 'Russo One', sans-serif
    color: #9B9B9B

    span
      font-family: 'Russo One', sans-serif
      color: var(--yellow)

  .nav-menu
    display: flex
    width: 100%
    justify-content: space-between

    .nav-menu-left
      margin: 0 40px
      display: flex
      align-items: center
      gap: 20px
      font-size: calc((100vw - 320px) / (1280 - 320) * (18 - 16) + 16px)

      button
        border: none
        border-radius: 10px
        padding: 8px 20px
        background-color: var(--yellow)

    .nav-menu-right
      display: flex
      gap: 20px
      align-items: center
      font-size: calc((100vw - 320px) / (1280 - 320) * (18 - 14) + 14px)

      .nav-image
        width: calc((100vw - 320px) / (1280 - 320) * (30 - 25) + 25px)
        min-width: 25px
</style>