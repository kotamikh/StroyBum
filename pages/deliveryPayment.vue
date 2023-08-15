<template>
  <div class="delivery-methods">
    <div class="method">
      <h3 style="grid-area: 1 / 1 / 2 / 2">Самовывоз</h3>
      <div class="method-text" style="grid-area: 2 / 1 / 3 / 2">
        <p>г. Киров, 2-й Кирпичный пер. 2/1
          (территория базы “Слон”).</p>
        <p>Режим работы: пн-пт 8:30-17:30;
          сб 9:00-13:00.</p>
      </div>
      <img :src="pickup" alt="самовывоз" style="max-width: 150px; margin: auto; grid-area: 3 / 1 / 4 / 2"/>
    </div>
    <div class="method">
      <h3 style="grid-area: 1 / 2 / 2 / 3">Доставка</h3>
      <div class="method-text"  style="grid-area: 2 / 2 / 3 / 3">
        <p>В любой город России через транспортные компании БайкалСервис, ПЭК, Объём, Деловые линии.</p>
        <p><span>Внимание!</span> Стоимость доставки рассчитывается согласно тарифу транспортной компании.</p>
      </div>
      <img :src="delivery" alt="доставка" style="max-width: 150px; margin: auto;grid-area: 3 / 2 / 4 / 3">
    </div>
    <div class="payment">
      <p  style="grid-area: 4 / 1 / 5 / 3">Товары оплачиваются перед получением, наличными или банковской картой.</p>
    </div>
  </div>

</template>

<script setup>
import pickup from '@/assets/самовывоз.png'
import delivery from '@/assets/доставка.png'

</script>

<style scoped lang="sass">
.delivery-methods
  display: grid
  height: content-box
  margin-top: 50px
  grid-gap: 5%
  grid-template-rows: max-content
  grid-template-columns: repeat(2, 1fr)

  .method
    display: contents

    h3
      font-weight: bold
      color: var(--grey)
      text-align: center
      margin-bottom: 10px
      font-size: calc((100vw - 320px) / (1280 - 320) * (20 - 16) + 16px)

    .method-text:first-child
      text-align: center
    p
      color: var(--grey)
      margin-bottom: 10px
      font-size: calc((100vw - 320px) / (1280 - 320) * (18 - 16) + 16px)

      span
        font-weight: bold
        color: #FF6126

  .payment
    display: contents
    p
      color: var(--grey)
      margin: 20px 0
      text-align: center
      font-size: calc((100vw - 320px) / (1280 - 320) * (18 - 16) + 16px)

</style>