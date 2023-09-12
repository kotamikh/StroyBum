<template>
  <div class="wrapper">
    <div class="delivery-methods">
      <div class="method">
        <h2 style="grid-area: 1 / 1 / 2 / 2">Самовывоз</h2>
        <div class="method-text" style="grid-area: 2 / 1 / 3 / 2">
          <p>г. Киров, 2-й Кирпичный пер. 2/1
            (территория базы “Слон”).</p>
          <p>Режим работы: пн-пт 8:30-17:30;
            сб 9:00-13:00.</p>
        </div>
        <img :src="pickup" alt="самовывоз" style="grid-area: 3 / 1 / 4 / 2"/>
      </div>
      <div class="method">
        <h2 style="grid-area: 1 / 2 / 2 / 3">Доставка</h2>
        <div class="method-text" style="grid-area: 2 / 2 / 3 / 3">
          <p>В любой город России через транспортные компании БайкалСервис, ПЭК, Объём, Деловые линии.</p>
          <p><span>Внимание!</span> Стоимость доставки рассчитывается согласно тарифу транспортной компании.</p>
        </div>
        <img :src="delivery" alt="доставка" style="grid-area: 3 / 2 / 4 / 3">
      </div>
    </div>
    <div class="payment">
      <p>Товары оплачиваются перед получением, наличными или банковской картой.</p>
    </div>
  </div>

</template>

<script setup>
import pickup from '@/assets/самовывоз.png'
import delivery from '@/assets/доставка.png'

</script>

<style scoped lang="sass">
.wrapper
  display: flex
  margin: 60px 0 40px
  flex-direction: column

  .delivery-methods
    grid-gap: 5%
    display: grid
    height: max-content
    grid-template-rows: 0.5fr 2fr 3fr
    grid-template-columns: repeat(2, 1fr)

    @media screen and (max-width: 887px)
      grid-template-rows: 0.3fr 1fr 1fr

    @media screen and (max-width: 709px)
      gap: 30px
      width: 70%
      display: flex
      flex-direction: column

    @media screen and (max-width: 484px)
      width: 90%

    @media screen and (min-width: 710px)
      .method
        display: contents

    .method
      position: relative
      img
        margin: auto
        max-width: 150px

        @media screen and (max-width: 709px)
          top: 50px
          margin: 0
          width: 100px
          right: -120px
          position: absolute

        @media screen and (max-width: 484px)
          right: 0
          top: -15px
          width: 50px
          left: 120px
    h2
      font-weight: bold
      text-align: center
      margin-bottom: 10px

      @media screen and (max-width: 709px)
        text-align: left
    p
      color: var(--grey)
      margin-bottom: 10px
      font-size: calc((100vw - 320px) / (1280 - 320) * (18 - 16) + 16px)

      @media screen and (max-width: 709px)
        margin-bottom: 20px

      span
        color: #FF6126
        font-weight: bold

  .payment
    margin-top: 20px
    color: var(--grey)
    text-align: center
    font-size: calc((100vw - 320px) / (1280 - 320) * (18 - 16) + 16px)
</style>