<template>
  <section>
    <div id="container">
      <slot />
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style scoped>
section {
  max-width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  scroll-margin-top: 70px
}

#container {
  width: 80%;
}

@media (min-width: 768px) {
  #container {
    width: 60%
  }
}
</style>