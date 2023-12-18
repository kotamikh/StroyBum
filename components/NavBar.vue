<template>
  <div class="navigation-panel">
    <NuxtLink to="/">
      <div class="header">Строй<span>Бум</span></div>
    </NuxtLink>
    <div class="nav-menu">
      <ul class="nav-menu-left">
        <li v-for="(path, text) in links"
            :key="text"
            :value="path"
            :class="{ current : isCurrent(path)}">
          <NuxtLink :to="{ name: path }" replace>{{ text }}</NuxtLink>
        </li>
      </ul>
      <div class="nav-menu-right">
        <div class="extra-links">
          <NuxtLink class="nav-icon"
                    @click="navigateTo({ path: '/catalog'})"
                    :class="{ current : isCurrent('catalog') }">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256">
              <path fill="#808080"
                    d="M224 48h-64a40 40 0 0 0-32 16a40 40 0 0 0-32-16H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h64a24 24 0 0 1 24 24a8 8 0 0 0 16 0a24 24 0 0 1 24-24h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM96 192H32V64h64a24 24 0 0 1 24 24v112a39.81 39.81 0 0 0-24-8Zm128 0h-64a39.81 39.81 0 0 0-24 8V88a24 24 0 0 1 24-24h64ZM160 88h40a8 8 0 0 1 0 16h-40a8 8 0 0 1 0-16Zm48 40a8 8 0 0 1-8 8h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8Zm0 32a8 8 0 0 1-8 8h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8Z"/>
            </svg>
            <p>Каталог</p>
          </NuxtLink>
          <NuxtLink class="nav-icon"
                    :to="{ name: 'deliveryPayment' }"
                    :class="{ current : isCurrent('deliveryPayment') }">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256">
              <path fill="#808080"
                    d="M240 112h-10.8l-27.78-62.5A16 16 0 0 0 186.8 40H69.2a16 16 0 0 0-14.62 9.5L26.8 112H16a8 8 0 0 0 0 16h8v80a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-16h96v16a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-80h8a8 8 0 0 0 0-16ZM69.2 56h117.6l24.89 56H44.31ZM64 208H40v-16h24Zm128 0v-16h24v16Zm24-32H40v-48h176ZM56 152a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H64a8 8 0 0 1-8-8Zm112 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8Z"/>
            </svg>
            <p>Доставка</p>
          </NuxtLink>
          <NuxtLink class="nav-icon"
                    :to="{ name: 'contacts' }"
                    :class="{ current : isCurrent('contacts') }">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16">
              <path fill="#808080"
                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608a17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42a18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
            </svg>
            <p>Контакты</p>
          </NuxtLink>
        </div>
        <NuxtLink :to="{ name: 'favourites' }"
                  class="nav-icon"
                  :class="{ current : isCurrent('favourites') }">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256">
            <path fill="#808080"
                  d="M223 57a58.07 58.07 0 0 0-81.92-.1L128 69.05l-13.09-12.19A58 58 0 0 0 33 139l89.35 90.66a8 8 0 0 0 11.4 0L223 139a58 58 0 0 0 0-82Zm-11.35 70.76L128 212.6l-83.7-84.92a42 42 0 0 1 59.4-59.4l.2.2l18.65 17.35a8 8 0 0 0 10.9 0l18.65-17.35l.2-.2a42 42 0 1 1 59.36 59.44Z"/>
          </svg>
          <p>Избранное</p>
        </NuxtLink>
        <NuxtLink :to="{ name: 'cart' }"
                  class="nav-icon"
                  :class="{ current : isCurrent('cart') }">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256">
            <path fill="#808080"
                  d="M96 216a16 16 0 1 1-16-16a16 16 0 0 1 16 16Zm88-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm47.65-125.65l-28.53 92.71A23.89 23.89 0 0 1 180.18 184H84.07A24.11 24.11 0 0 1 61 166.59L24.82 40H8a8 8 0 0 1 0-16h16.82a16.08 16.08 0 0 1 15.39 11.6L48.32 64H224a8 8 0 0 1 7.65 10.35ZM213.17 80H52.89l23.49 82.2a8 8 0 0 0 7.69 5.8h96.11a8 8 0 0 0 7.65-5.65Z"/>
          </svg>
          <p>Корзина</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "#app";

const links = {
  'Каталог': 'catalog',
  'Доставка и оплата': 'deliveryPayment',
  'Контакты': 'contacts'
}

const currentLink = ref('')

const isCurrent = (link) => {
  return currentLink.value.includes(link)
}

const route = useRoute()

watch(() => route.name, () => {
  currentLink.value = route.name
}, { immediate: true })
</script>

<style scoped lang="sass">
@import url('https://fonts.cdnfonts.com/css/russo-one')

.navigation-panel
  width: 100%
  display: flex
  margin: 0 auto

  @media screen and (max-width: 809px)
    flex-direction: column
    justify-content: space-between

    .nav-menu-left
      height: 0

  a
    align-self: center

    .header
      color: #969696
      margin-right: 40px
      font-family: 'Russo One', sans-serif
      font-size: calc((100vw - 320px) / (1280 - 320) * (34 - 30) + 30px)

      @media screen and (max-width: 809px)
        margin-right: 0
        margin-bottom: 40px

      span
        color: var(--yellow)
        font-family: 'Russo One', sans-serif

  .nav-menu
    width: 100%
    display: flex
    justify-content: space-between

    @media screen and (max-width: 809px)
      display: contents

      .nav-menu-left
        width: 0
        display: none
        visibility: hidden

      .nav-menu-right
        left: 0
        bottom: 0
        margin: 0
        z-index: 3
        width: 100%
        height: 50px
        position: fixed
        background-color: white

        a.nav-icon
          &:not(:last-of-type)
            margin: 0

    .nav-menu-left,
    .nav-menu-right
      display: flex
      align-items: center

      p
        font-size: calc((100vw - 320px) / (1280 - 320) * (15 - 12) + 12px)

      a
        padding-top: 5px

        &:hover
          color: var(--grey)

          p,
          svg > path
            fill: var(--grey)
            color: var(--grey)

      .current
        a,
        p,
        svg > path
          fill: var(--grey)
          color: var(--grey)
          text-decoration: underline
          text-underline-position: under
          text-decoration-thickness: 2px
          text-decoration-color: var(--yellow)

      .nav-icon
        display: flex
        align-items: center
        flex-direction: column

        &:not(:last-of-type)
          margin-right: 25px

    .nav-menu-left
      gap: 20px

    .nav-menu-right
      @media screen and (max-width: 809px)
        .nav-icon
          width: 20%
        .current
          background-color: rgba(255, 241, 118, 0.8)

      .extra-links
        display: none

        @media screen and (max-width: 809px)
          display: contents
</style>