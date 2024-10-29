<template>

  <NuxtLayout style="background-color: #b3157e" name="section" id="cta">
    <div id="container-content">
      <h1>Tem interesse e está em busca de <strong>mais informações?</strong></h1>
      <p>Preencha o formulário abaixo que entraremos em contato.</p>
      <div id="form">
        <Input label="Nome completo *" v-model="nome" type="text" />
        <span v-if="errors.nome"> {{ errors.nome }}</span>
        <Input label="E-mail *" v-model="email" v-bind="emailAttrs" type="email" />
        <span v-if="errors.email"> {{ errors.email }}</span>
        <Input label="Telefone *" :mask="'(##) #####-####'" v-model="telefone" type="tel" />
        <Select label="Instituição *" v-model="instituicao" placeholder="Selecione a instituição de interesse"
          :options="data" />
      </div>
      <p style="font-size: 0.875rem; text-align: start;">Nós usaremos seus dados para entrar em contato com você sobre
        as informações solicitadas neste formulário e
        sobre outras informações correlacionadas que podem ser de seu interesse. Você pode cancelar o envio da
        divulgação, a qualquer momento, utilizando o opt-out existente nas mensagens encaminhadas por nós.</p>
      <div style="display: flex; justify-content: center; margin-top: 20px">
        <Button @click="send" :disabled="Object.keys(errors).length || isFieldsFilled"
          variant="secondary">Enviar</Button>
      </div>
    </div>

  </NuxtLayout>

</template>

<script lang="ts" setup>


const { data } = await useFetch('/api/instituicoes')

const instituicoes = computed(() => {
  return data.value?.map(instituicao => instituicao.value)
})

const { nome, email, telefone, instituicao, values, errors } = usePayloadValidator(instituicoes)

const isFieldsFilled = computed(() => {
  return !nome.value || !email.value || !telefone.value || !instituicao.value
})

const { execute: send, data: response, status } = useAsyncData(
  'send',
  () => $fetch('api/send', {
    method: 'POST',
    body: values,
  }), {
  immediate: false,
  lazy: true
})

const toast = useToast()
watch(status, (value) => {
  if (value === 'success') {
    toast.add({ title: "Contato realizado com sucesso!", color: 'pink' })
  }
})

</script>

<style scoped>
h1 {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1.8rem;
  color: white;
  margin-top: 60px;
}

p {
  font-size: 1.25rem;
  color: white;
  text-align: center;
  margin-top: 10px
}

#form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 20px
}

button {
  width: 12rem !important;
}

@media (min-width: 768px) {
  #container-content {
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 0 auto
  }
}

span {
  background-color: white;
  color: #dc3545;
  padding: 0.5rem;
}
</style>