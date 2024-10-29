<template>
  <NuxtLayout name="section" id="mais-informacoes">
    <span id="separator"></span>
    <h1>Seja protagonista, <strong>o futuro já começou!</strong></h1>
    <div id="container">
      <NuxtImg src="https://uploads-pos-graduacao.s3.us-east-1.amazonaws.com//1_Mob_b7db4e7015.png" />
      <div id="container-content">
        <h2>Venha conosco, nós te ajudamos!</h2>
        <p>É hora de iniciar uma nova etapa! Sabemos que o momento pode ser assustador, mas não se preocupe.
          Quebramos as barreiras entre presencial e virtual e criamos um modelo inovador, exclusivo e com professores
          prontos para te preparar para os desafios reais do mercado!
          A nossa missão não é só pensar no futuro da educação, é fazê-lo chegar antes.</p>
      </div>
    </div>
  </NuxtLayout>>

</template>

<script lang="ts" setup>

</script>

<style scoped>
h1,
h2,
p {
  color: #353535;
}

h1 {
  font-size: 1.9rem;
  margin-bottom: 30px;
}

#separator {
  display: block;
  height: 0.3rem;
  width: 15rem;
  background-color: #b3157e;
  margin-bottom: 20px
}

img {
  margin: 0 auto;
  width: 100%;
  margin-bottom: 20px;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

p {
  font-size: 1.25rem;
}

@media (min-width: 768px) {
  #container {
    display: flex;
    gap: 60px;
  }

  #container-content {
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  img {
    height: 320px !important;
    width: 520px !important;
  }

  h1 {
    font-size: 2.5rem;
  }
}
</style>