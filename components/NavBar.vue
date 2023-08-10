<template>
  <div class="navigation-panel">
    <div class="line-1">
      <NuxtLink to="homepage">
        <h1>Строй<span>Бум</span></h1>
      </NuxtLink>
      <div class="nav-menu">
        <ul class="nav-menu-left">
          <li v-for="(name, text) in links"
              :key="text"
              :value="name"
              :class="{ current : isCurrent(name) }">
            <NuxtLink :to="{ name }">{{text}}</NuxtLink>
          </li>
        </ul>
        <div class="nav-menu-right">
          <NuxtLink to="favourites"
                    class="nav-icon"
                    :class="{ current : isCurrent('favourites') }">
            <Icon name="ph:heart-straight" size="25px"/>
            <p style="font-size: 14px">Избранное</p>
          </NuxtLink>
          <NuxtLink to="basket"
                    class="nav-icon"
                    :class="{ current : isCurrent('basket') }">
            <Icon name="ph:shopping-cart-simple" size="25px"/>
            <p style="font-size: 14px">Корзина</p>
          </NuxtLink>
          <NuxtLink to="admin-page"
                    class="nav-icon">
            <Icon name="ph:user" size="25px"/>
            <p style="font-size: 14px">Войти</p>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="line-2">
      <button class="search"
              @click="isActive = !isActive"
      >
        <Icon name="ph:magnifying-glass-light" size="20px" color="var(--middle-grey)"/>
        Поиск
        <input type="text" v-if="isActive" @click.stop>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "#app";

const links = {
  'Каталог': 'catalog',
  'Скидки': 'discount',
  'Доставка и оплата': 'deliveryPayment'
}

const currentLink = ref(null)
const isActive = ref(false)

const isCurrent = (link) => {
  return link === currentLink.value
}

const route = useRoute()

watch(() => route.name, () => {
  console.log(route.name)
  currentLink.value = route.name
}, { immediate: true })

</script>

<style scoped lang="sass">
@import url('https://fonts.cdnfonts.com/css/russo-one')

.navigation-panel
  display: flex
  margin: 30px auto
  flex-direction: column

  .line-1
    display: flex
    margin-bottom: 5px

    a
      align-self: center

      h1
        color: #9B9B9B
        margin-right: 30px
        font-family: 'Russo One', sans-serif

      span
        color: var(--yellow)
        font-family: 'Russo One', sans-serif

    .nav-menu
      width: 100%
      display: flex
      justify-content: space-between

      .nav-menu-left,
      .nav-menu-right
        gap: 20px
        display: flex
        align-items: center
        font-size: calc((100vw - 320px) / (1280 - 320) * (18 - 16) + 16px)

        li
          &:hover
            a
              color: var(--grey)

        .current
          a
            color: var(--grey)
            text-decoration: underline
            text-underline-position: under
            text-decoration-thickness: 2px
            text-decoration-color: var(--yellow)

        a
          &:hover,
          &:focus,
          .current
            svg,
            p
              color: var(--yellow)
              stroke: var(--yellow)
              stroke-width: 10px

        .nav-icon
          margin: 0 5px
          display: flex
          align-items: center
          flex-direction: column

  .line-2
    .search
      gap: 10px
      display: flex
      align-items: center

      border: 0
      height: 40px
      padding: 5px 20px
      border-radius: 5px
      font-size: calc((100vw - 320px) / (1280 - 320) * (16 - 14) + 14px)

      input
        border: 0
        outline: 0
        height: 80%

        &:focus
          outline: 2px solid var(--yellow)
</style>