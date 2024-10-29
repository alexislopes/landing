<script setup lang="ts"></script>

<template>
  <Title>Ânima</Title>
  <HamburgerMenu />
  <Header />
  <div id="main">
    <slot />
  </div>
</template>

<script setup>

</script>

<style scoped>
#main {
  position: absolute;
  top: 6rem;
  margin: 0 auto;
  width: 100%;
}
</style>
