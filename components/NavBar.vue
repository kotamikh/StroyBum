<template>
  <div class="navigation-panel">
    <div class="line-1">
      <NuxtLink to="/">
        <div class="header">Строй<span>Бум</span></div>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256"><path fill="#808080" d="M223 57a58.07 58.07 0 0 0-81.92-.1L128 69.05l-13.09-12.19A58 58 0 0 0 33 139l89.35 90.66a8 8 0 0 0 11.4 0L223 139a58 58 0 0 0 0-82Zm-11.35 70.76L128 212.6l-83.7-84.92a42 42 0 0 1 59.4-59.4l.2.2l18.65 17.35a8 8 0 0 0 10.9 0l18.65-17.35l.2-.2a42 42 0 1 1 59.36 59.44Z"/></svg>
            <p style="font-size: 14px">Избранное</p>
          </NuxtLink>
          <NuxtLink to="basket"
                    class="nav-icon"
                    :class="{ current : isCurrent('basket') }">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256"><path fill="#808080" d="M96 216a16 16 0 1 1-16-16a16 16 0 0 1 16 16Zm88-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm47.65-125.65l-28.53 92.71A23.89 23.89 0 0 1 180.18 184H84.07A24.11 24.11 0 0 1 61 166.59L24.82 40H8a8 8 0 0 1 0-16h16.82a16.08 16.08 0 0 1 15.39 11.6L48.32 64H224a8 8 0 0 1 7.65 10.35ZM213.17 80H52.89l23.49 82.2a8 8 0 0 0 7.69 5.8h96.11a8 8 0 0 0 7.65-5.65Z"/></svg>
            <p style="font-size: 14px">Корзина</p>
          </NuxtLink>
          <NuxtLink to="admin-page"
                    class="nav-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256"><path fill="#808080" d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56Z"/></svg>
            <p style="font-size: 14px">Войти</p>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="line-2">
      <button class="search-btn"
              @click="isActive = !isActive"
      >
        <Icon name="ph:magnifying-glass-light" size="20px" color="var(--middle-grey)"/>
        Поиск
        <input type="text"
               v-if="isActive"
               v-focus
               @click.stop>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "#app";

const links = {
  'Каталог': 'catalog',
  'Скидки': 'discount',
  'Доставка и оплата': 'deliveryPayment',
  'Контакты': 'contacts'
}

const currentLink = ref(null)
const isActive = ref(false)

const isCurrent = (link) => {
  return link === currentLink.value
}

const route = useRoute()

watch(() => route.name, () => {
  currentLink.value = route.name
}, { immediate: true })

const vFocus = {
  mounted: (el) => el.focus()
}
</script>

<style scoped lang="sass">
@import url('https://fonts.cdnfonts.com/css/russo-one')

.navigation-panel
  display: flex
  margin: 0 auto
  flex-direction: column

  .line-1
    display: flex
    margin-bottom: 5px

    a
      align-self: center

      .header
        color: #9B9B9B
        margin-right: 30px
        font-family: 'Russo One', sans-serif
        font-size: calc((100vw - 320px) / (1280 - 320) * (34 - 30) + 30px)

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

        .nav-icon
          margin: 0 5px
          display: flex
          align-items: center
          flex-direction: column

          &:hover,
          &:focus,
          .current
            svg > path,
            p
              fill: var(--grey)

  .line-2
    .search-btn
      gap: 10px
      display: flex
      align-items: center

      border: 0
      height: 40px
      cursor: pointer
      padding: 5px 20px
      border-radius: 5px
      font-size: calc((100vw - 320px) / (1280 - 320) * (16 - 14) + 14px)

      input
        border: 0
        outline: 0
        height: 80%
        background-color: inherit
</style>