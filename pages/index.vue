<template>
  <Head>
    <Title>СтройБум | Сайдинг Киров</Title>
  </Head>
  <div class="main-page">
    <div class="banner">

    </div>
    <ul class="advantages">
      <li>
        <img src="@/assets/main-page-images/качество.png" alt="качество"/>
        <p>Работаем напрямую с производителем</p>
      </li>
      <li>
        <img src="@/assets/main-page-images/выбор.png" alt="ассортимент"/>
        <p>Широкий выбор <br> Низкие цены</p>
      </li>
      <li>
        <img src="@/assets/main-page-images/склад.png" alt="удобство"/>
        <p>Удобное расположение склада</p>
      </li>
    </ul>
  </div>
</template>

<script setup>

</script>

<style scoped lang="sass">
.main-page
  gap: 50px
  display: flex
  padding: 20px 0
  flex-direction: column

  .advantages
    width: 100%
    display: flex
    justify-content: space-evenly

    @media screen and (max-width: 579px)
      justify-content: space-between

    li
      width: 20%
      text-align: center

      @media screen and (max-width: 849px)
        width: 30%

      img
        margin: auto
        width: calc((100vw - 320px) / (1440 - 320) * (100 - 70) + 70px)

    p
      font-size: calc((100vw - 320px) / (1440 - 320) * (16 - 12) + 12px)

  .banner
    width: 100%
    aspect-ratio: 12/3
    background-color: #d3d3d3
</style>