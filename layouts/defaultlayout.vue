<template>
  <div class="layout">
    <NavBar/>
    <div class="content">
      <slot/>
    </div>
    <TheFooter/>
  </div>
</template>

<script setup>

</script>

<style scoped lang="sass">
.layout
  width: 90vw
  margin: 20px auto
  box-sizing: border-box

  @media screen and (max-width: 1000px)
    width: 95vw

  @media screen and (max-width: 809px)
    display: flex
    flex-direction: column

  .content
    display: flex
    padding: 20px 0 70px 0
    flex-direction: column

    @media screen and (max-width: 809px)
      padding-top: 0
      padding-bottom: 160px

    @media screen and (max-width: 344px)
      padding-bottom: 220px
</style>