<template>
  <label :for="label">
    {{ label }}
    <input v-if="mask" v-mask="mask" :type="type" :id="label" v-model="model" :placeholder="placeholder">
    <input v-else :type="type" :id="label" v-model="model" :placeholder="placeholder">
  </label>
</template>

<script lang="ts" setup>

const model = defineModel()

interface InputProps {
  label: string
  type: string
  mask?: string
  placeholder: string
}

defineProps<InputProps>()
</script>

<style scoped>
label {
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;

}

input {
  color: black;
  outline: none;
  padding: 0.4rem;
  border-radius: 5px;
  margin-top: 5px;
}
</style>