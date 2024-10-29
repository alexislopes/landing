  <template>
    <header>
      <div id="container">
        <img src="@/assets/images/logo-anima.svg" alt="">

        <div style="display: flex; align-items: center;">
          <nav>
            <ul>
              <li @click="setParam('mais-informacoes')">Mais informações</li>
              <li @click="setParam('nossos-pilares')">Nossos pilares</li>
            </ul>
          </nav>
          <Button @click="setParam('cta')">Inscreva-se</Button>
        </div>
      </div>
    </header>
  </template>

<script lang="ts" setup>



const { setParam } = useHashParams()

</script>

<style scoped>
div#container {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;

}

header {
  position: fixed;
  border-bottom: #ccc;
  width: 100%;
  background-color: white;
  z-index: 10;
  display: flex;
  justify-content: center;
  border-bottom: 1px #ccc solid;
}

ul {
  text-decoration: none;
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
}

li {
  font-weight: 600;
  color: #353535;
  cursor: pointer;
}

li:hover {
  color: #b3157e
}

button {
  /* margin-right: 3rem; */
  margin-left: 1rem;
}

@media (max-width: 768px) {
  nav {
    display: none;
  }
}

@media (min-width: 768px) {
  div#container {
    width: 60% !important;
  }
}
</style>