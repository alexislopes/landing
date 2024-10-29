<template>
  <NuxtLayout name="section" id="nossos-pilares">
    <div id="container-content">
      <h2> Conheça os pilares da <strong>Ânima Educação.</strong> </h2>
      <div id="cards">
        <PilarCard v-for="pilar in pilares" :key="pilar.title" :pilar="pilar" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>

const pilares = ref([
  {
    icon: 'https://eventos.animaeducacao.com.br/assets/img/icon/icon_pilares_qualidade.svg',
    title: 'Espaços inspiradores',
    description: 'Destaque entre as universidades com a melhor infraestrutura do Brasil, oferecemos metodologias inovadoras e equipamentos de última geração.'
  },
  {
    icon: 'https://eventos.animaeducacao.com.br/assets/img/icon/icon_pilares_inovacao.svg',
    title: 'Inovação e Criatividade',
    description: 'Criamos novos padrões de mercado, oferecendo cursos inovadores e disruptivos que preparam você para o futuro.'
  },
  {
    icon: 'https://eventos.animaeducacao.com.br/assets/img/icon/icon_pilares_internacionalidade.svg',
    title: 'Internacionalização',
    description: 'Conectada com o Novo Futuro e novas Tendências, a Anhembi Morumbi integra um ecossistema global para preparar você para protagonizar o Novo Mundo.'
  }
])

</script>

<style scoped>
h2 {
  color: #353535;
}

h2 {
  font-size: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column
}

@media (min-width: 768px) {
  h2 {
    font-size: 2.4rem;
  }

  #cards {
    display: flex;
    gap: 40px;
    width: 80%;
  }

  section {
    display: flex;
    justify-content: center;
  }

  #container-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>