<template>
  <Head>
    <Title>СтройБум | Сайдинг Киров</Title>
    <Meta name="general page" content="this is the main page"/>
  </Head>
  <ul class="advantages">
    <li>
      <img src="@/assets/main-page-images/утп-склад.png" alt="удобство"/>
      <p>Удобное расположение офиса и склада</p>
    </li>
    <li>
      <img src="@/assets/main-page-images/утп-качество.png" alt="качество"/>
      <p>Работаем напрямую с производителем</p>
    </li>
    <li>
      <img src="@/assets/main-page-images/утп-выбор.png" alt="ассортимент"/>
      <p>Широкий выбор <br> Низкие цены</p>
    </li>
  </ul>
</template>

<script setup>

</script>

<style scoped lang="sass">
.advantages
  display: flex
  justify-content: space-evenly
  li
    width: 15%
    text-align: center
    img
      margin: auto
</style>