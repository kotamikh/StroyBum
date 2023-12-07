<template>
  <div class="wrapper">
    <div class="delivery-methods">
      <div class="method">
        <h2 style="grid-area: 1 / 1 / 2 / 2">Самовывоз</h2>
        <div class="text-center" style="grid-area: 2 / 1 / 3 / 2">
          <p>г. Киров, 2-й Кирпичный пер. 2/1
            (территория базы “Слон”).</p>
          <p>Режим работы: Пн-Пт 8:30-17:30,
            Сб 9:00-13:00.</p>
        </div>
        <img :src="pickup" alt="самовывоз" class="box-img" style="grid-area: 3 / 1 / 4 / 2"/>
      </div>
      <div class="method">
        <h2 style="grid-area: 1 / 2 / 2 / 3">Доставка</h2>
        <div class="text" style="grid-area: 2 / 2 / 3 / 3">
          <p>В любой город России через транспортные компании СДЭК, БайкалСервис, ПЭК, Объём, Деловые линии.</p>
          <p><span>Внимание!</span> Стоимость доставки рассчитывается согласно тарифу транспортной компании.</p>
        </div>
        <img :src="delivery" alt="доставка" class="delivery-img" style="grid-area: 3 / 2 / 4 / 3">
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
  color: var(--grey)

.wrapper
  width: 85%
  display: flex
  margin: 60px auto 0
  flex-direction: column
  font-size: calc((100vw - 320px) / (1280 - 320) * (18 - 16) + 16px)

  @media screen and (max-width: 1079px)
    width: 98%

  @media screen and (max-width: 709px)
    width: 95%
    margin: 40px auto 10px

  .delivery-methods
    display: grid
    grid-column-gap: 4%
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
      width: 90%

    @media screen and (min-width: 709px)
      .method
        display: contents

    .method
      position: relative

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
          left: 100px

      .box-img
        max-width: 140px

      .delivery-img
        max-width: 145px

    h2
      width: fit-content
      margin-bottom: 10px

      @media screen and (max-width: 709px)
        text-align: left

    p
      margin-bottom: 10px

      @media screen and (max-width: 709px)
        margin-bottom: 20px

      span
        font-weight: bold

  .payment
    h2
      margin: 40px 0 10px
      vertical-align: middle

    @media screen and (max-width: 709px)
      margin-top: 20px

      h2
        margin-top: 0
</style>