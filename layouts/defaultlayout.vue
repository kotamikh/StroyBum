<template>
  <div class="layout">
    <NavBar/>
    <div class="content">
      <slot/>
    </div>
    <TheFooter/>
  </div>
</template>

<style scoped lang="sass">
.layout
  width: 90vw
  margin: 20px auto
  box-sizing: border-box

  @media screen and (max-width: 1000px)
    width: 95vw

  @media screen and (max-width: 809px)
    display: flex
    margin: 10px auto
    flex-direction: column

  .content
    display: flex
    padding-bottom: 70px
    flex-direction: column

    @media screen and (max-width: 809px)
      padding-bottom: 170px

    @media screen and (max-width: 344px)
      padding-bottom: 220px
</style>