<template>
  <div id="select">
    <label :for="label">
      {{ label }}
    </label>
    <div @click="opened = true" id='selector'>
      <p :id="label">{{ labelValue || "Selecione a instituição de interesse" }}</p>
      <Icon :name="`cuida:caret-${opened ? 'up' : 'down'}-outline`" />
    </div>
    <ul ref="optionsRef" v-if="opened">
      <li @click="selected = option.value; opened = false" v-for="option in filteredOptions" :key="option.value"> {{
        option.label }}</li>
    </ul>

  </div>
</template>

<script lang="ts" setup>

interface Option {
  label: string
  value: string
}

interface SelectProps {
  label: string
  placeholder: string
  options: Option[]
}

const props = defineProps<SelectProps>()

const selected = defineModel()
const labelValue = computed({
  get() {
    return props.options.find(option => option.value === selected.value)?.label
  },
  set(v) {
    term.value = v
  }
})

const opened = ref(false)
const optionsRef = ref()
onClickOutside(optionsRef, () => {
  opened.value = false
})

const term = ref()
const filteredOptions = computed(() => {
  if (term.value) {
    return props.options.filter(option => Object.values(option).toString().toLocaleLowerCase().includes(term.value.toLocaleLowerCase()))
  }

  return props.options
})

</script>

<style scoped>
input {
  background-color: transparent;
  outline: none;
  width: 100%;
}

#selector {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0.4rem;
  border-radius: 8px
}

label {
  color: white;
  margin-bottom: 5px;
}

#select {
  position: relative;
}

ul {
  position: absolute;
  background-color: white;
  width: 100%;
  margin-top: 5px;
  border-radius: 10px;
  max-height: 33vh;
  overflow: auto;
}

li {
  color: #703a9f;
  font-size: 1.25rem;
  padding: 0.5rem;
}

li:hover {
  color: #b3157e
}
</style>