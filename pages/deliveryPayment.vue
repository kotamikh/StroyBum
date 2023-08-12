<template>
  <div class="delivery-methods">
    <div class="method">
      <h3>Самовывоз</h3>
      <div class="method-text">
        <p>г. Киров, Второй Кирпичный пер. 2/1
          (территория базы “Слон”).</p>
        <p>Режим работы: пн-пт 8:30-17:30;
          сб 9:00-13:00.</p>
      </div>
      <img :src="pickup" alt="самовывоз" style="width: 40%; margin: auto"/>
    </div>
    <div class="method">
      <h3>Доставка</h3>
      <div class="method-text">
        <p>В любой город России через транспортные компании БайкалСервис, ПЭК, Объём, Деловые линии.</p>
        <p><span>Внимание!</span> Стоимость доставки рассчитывается согласно тарифу транспортной компании.</p>
      </div>
      <img :src="delivery" alt="доставка" style="width: 40%; margin: auto">
    </div>
  </div>

</template>

<script setup>
import pickup from '@/assets/самовывоз.png'
import delivery from '@/assets/доставка.png'

</script>

<style scoped lang="sass">
.delivery-methods
  display: flex
  align-items: stretch
  justify-content: space-evenly

  .method
    width: 35%
    display: grid
    grid-template-rows: 0.5fr 2fr 2fr

    h3
      font-weight: bold
      color: var(--grey)
      text-align: center
      margin-bottom: 20px

    p
      color: var(--grey)
      margin-bottom: 10px
      font-size: calc((100vw - 320px) / (1280 - 320) * (18 - 16) + 16px)

      span
        font-weight: bold
        color: #FF6126
</style>