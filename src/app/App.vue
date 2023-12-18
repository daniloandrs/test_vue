<script setup lang="ts">
import MenuNav from './partials/MenuNav.vue'
import AppContent from './partials/AppContent.vue'
import ReloadPWA from '@/components/ReloadPWA.vue'
</script>

<template>
  <div class="d-flex flex-column main-container">
    <MenuNav />
    <AppContent>
      <router-view />
    </AppContent>
    <ReloadPWA />
  </div>

</template>

<style lang="scss">
:root {
  --radius: 0.75rem;
}

nav.shadow {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  z-index: 1;
}

.main-container {
  max-width: 400px !important;
  margin: auto;
  padding: 0 !important;
  height: 100vh;
  border:1px solid #d5d5d5;
}
</style>
