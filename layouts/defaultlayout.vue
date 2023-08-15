<template>
  <div class="content">
    <NavBar/>
    <slot/>
    <TheFooter/>
  </div>
</template>

<script setup>

</script>

<style scoped lang="sass">
.content
  width: 80vw
  margin: 0 auto
</style>