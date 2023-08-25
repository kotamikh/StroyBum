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
  width: 80vw
  margin: 0 auto
</style>