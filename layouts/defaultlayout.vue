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
    flex-direction: column
    padding-bottom: 65px
</style>