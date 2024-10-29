<template>
  <button :disabled="disabled" :class="[variant]">
    <slot />
  </button>
</template>

<script lang="ts" setup>

type Variant = 'primary' | 'secondary'

interface ButtonProps {
  variant?: Variant
  disabled?: boolean
}

defineProps<ButtonProps>()

</script>

<style scoped>
button {
  border-radius: 0.8rem;
  padding: 0.7rem 1.25rem;
  background-color: #b3157e;
  border: none;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  /* margin-right: 3rem;
  margin-left: 1rem; */
}

button:disabled {
  opacity: 60%;
  cursor: not-allowed;
}

button.secondary {
  background-color: white;
  color: #703a9f;
}
</style>