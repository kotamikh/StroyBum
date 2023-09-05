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

  .content
    display: flex
    padding-bottom: 70px
    flex-direction: column
</style>