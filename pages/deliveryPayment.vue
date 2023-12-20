<template>
  <div class="wrapper">
    <div class="delivery-methods">
      <div class="method">
        <h2 class="header-1">Самовывоз</h2>
        <div class="text-center">
          <p><span>Адрес:</span> г. Киров, 2-й Кирпичный пер. 2/1
            (территория базы “Слон”).</p>
          <p><span>Режим работы:</span> Пн-Пт 8:30-17:30,
            Сб 9:00-13:00.</p>
        </div>
        <img :src="pickup" alt="самовывоз" class="box-img"/>
      </div>
      <div class="method">
        <h2 class="header-2">Доставка</h2>
        <div class="text">
          <p>В любой город России через транспортные компании СДЭК, БайкалСервис, ПЭК, Объём, Деловые линии.</p>
          <p><span>Внимание!</span> Стоимость доставки рассчитывается согласно тарифу транспортной компании.</p>
        </div>
        <img :src="delivery" alt="доставка" class="delivery-img">
      </div>
    </div>
    <div class="payment">
        <h2>Оплата</h2>
      <p>Товары оплачиваются перед получением, наличными или банковской картой.</p>
    </div>
  </div>
</template>

<script setup>
import pickup from 'assets/delivery-payment-images/самовывоз.png'
import delivery from 'assets/delivery-payment-images/доставка.png'
</script>

<style scoped lang="sass">
*
  font-weight: lighter

.wrapper
  width: 100%
  display: flex
  margin: 60px auto 20px
  flex-direction: column
  font-size: calc((100vw - 320px) / (1280 - 320) * (18 - 16) + 16px)

  h2
    margin-bottom: 10px
    color: var(--dark-grey)
    font-size: calc((100vw - 320px) / (1280 - 320) * (22 - 20) + 20px)

  @media screen and (max-width: 809px)
    margin-top: 0

  .delivery-methods
    display: grid
    grid-column-gap: 4%
    margin-bottom: 40px
    height: max-content
    grid-template-rows: 0.5fr 2fr 2.5fr
    grid-template-columns: repeat(2, 1fr)

    @media screen and (max-width: 889px)
      grid-template-rows: 0.2fr 1fr 0.8fr

    @media screen and (max-width: 709px)
      gap: 30px
      width: 70%
      display: flex
      flex-direction: column

    @media screen and (max-width: 484px)
      width: 100%
      margin-bottom: 30px

    @media screen and (min-width: 710px)
      .method
        display: contents

    .method
      position: relative

      h2.header-1
        grid-area: 1 / 1 / 2 / 2

      h2.header-2
        grid-area: 1 / 2 / 2 / 3

      .text-center
        grid-area: 2 / 1 / 3 / 2

      .text
        grid-area: 2 / 2 / 3 / 3

      img
        margin: auto

        @media screen and (max-width: 709px)
          top: 30%
          margin: 0
          width: 100px
          right: -130px
          position: absolute

        @media screen and (max-width: 484px)
          top: -15px
          width: 50px

          &.box-img
            left: 120px
          &.delivery-img
            left: 105px

      .box-img
        max-width: 140px
        grid-area: 3 / 1 / 4 / 2

      .delivery-img
        max-width: 140px
        grid-area: 3 / 2 / 4 / 3

    h2
      width: fit-content

    p
      span
        font-weight: normal
        color: var(--dark-grey)
</style>