<template>
  <footer>
    <div id="footer-container">
      <img src="https://eventos.animaeducacao.com.br/assets/img/logo-anima-branco.svg" alt="">
      <div id="footer-content">
        <Button variant="secondary">Inscreva-se</Button>
        <div id="socials">
          <Icon @click="navigateTo('https://www.facebook.com/AnimaEducacao', { open: { target: '_blank' } })"
            name="ri:facebook-fill" />
          <Icon @click="navigateTo('https://x.com/animaedu', { open: { target: '_blank' } })" name="ri:twitter-fill" />
          <Icon @click="navigateTo('https://www.youtube.com/@AnimaEducacaoVideos', { open: { target: '_blank' } })"
            name="ri:youtube-fill" />
          <Icon @click="navigateTo('https://www.instagram.com/anima.educacao', { open: { target: '_blank' } })"
            name="ri:instagram-line" />
          <Icon @click="navigateTo('https://www.linkedin.com/company/animaeducacao', { open: { target: '_blank' } })"
            name="ri:linkedin-fill" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>

</script>

<style scoped>
#footer-contet {
  margin-top: 2rem;
}

footer {
  background-color: #703a9f;
  padding: 3rem;
  gap: 2rem;
}

button {
  width: 100%
}

.iconify {
  font-size: 1.5rem;
  color: white
}

#socials {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

@media (min-width: 768px) {
  footer {
    display: flex;
    justify-content: center;
  }

  #footer-content {
    width: 255px;
  }

  #footer-container {
    width: 60%;
    display: flex;
    justify-content: space-between;
  }

  img {
    margin-bottom: 2rem;
  }

}
</style>