<template>
  <Icon :class="{ opened: toggleSidebar }" @click="toggleSidebar = !toggleSidebar" v-if="isMobile"
    :name="!toggleSidebar ? 'charm:menu-hamburger' : 'ic:round-close'" />
  <Teleport v-if="toggleSidebar && isMobile" to="body">
    <div id="backdrop"></div>
    <div id="sidebar">
      <!-- <Icon @click="toggleSidebar = false" name="ic:round-close" /> -->
      <ul style="padding: 2rem; display: flex; flex-direction: column; gap: 1rem;">
        <li @click="setParam('mais-informacoes'); toggleSidebar = false">Mais informações</li>
        <li @click="setParam('nossos-pilares'); toggleSidebar = false">Nossos pilares</li>
      </ul>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
const toggleSidebar = ref(false)

const { isMobile } = useIsMobile()
const { setParam } = useHashParams()
</script>

<style scoped>
.iconify {
  position: fixed;
  right: 1rem;
  top: 2rem;
  font-size: 1.8rem;
  color: #b3157e;
  z-index: 12;
}

.iconify.opened {
  color: white;
}

#backdrop {
  background-color: #b3157e;
  opacity: 60%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  position: fixed;
}

#sidebar {
  position: fixed;
  top: 5rem;
  bottom: 1.5rem;
  right: 1.5rem;
  left: 1.5rem;
  background-color: white;
  z-index: 10;
  border-radius: 10px;
  padding: 2rem 0;
}

#sidebar ul {
  display: flex;
  flex-direction: column;
}
</style>