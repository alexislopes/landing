<template>
  <div id="card">
    <div id="icon">
      <img :src="pilar.icon" />
    </div>
    <div id="content">
      <h1> <strong>{{ pilar.title }}</strong></h1>
      <p>{{ pilar.description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>

interface Props {
  pilar: Pilar
}

interface Pilar {
  icon: string
  title: string
  description: string
}

defineProps<Props>()

</script>

<style scoped>
h1,
p {
  color: #353535;
}

#card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.1);
  position: relative;
  margin-top: 5rem
}

#icon {
  background-color: #b3157e;
  height: fit-content;
  width: fit-content;
  border-radius: 50%;
  padding: 1.5rem;
  position: absolute;
  transform: translateY(-50%);
}

h1 {
  font-size: 1.25rem;
  margin-top: 3rem;
}

#content {
  text-align: center;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding: 1rem;
}

@media (min-width: 768px) {
  #card {
    max-width: 255px;
  }
}
</style>