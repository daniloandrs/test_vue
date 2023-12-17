<script setup lang="ts">
import { ref, onUnmounted, onMounted, computed } from 'vue'
import ManageToast from '@/components/Toast/Index.vue'
import ConfirmationModal from '@/components/ConfirmationModal.vue'
import emitter from '../util/emmit.service'
import { ModalService } from '@/util/modal.service'
import { useStore } from './store'
import MenuNav from './partials/MenuNav.vue'
import AppContent from './partials/AppContent.vue'

const store = useStore()
const storeIsLoading = computed(() => store.isLoading)

const menuErrorMessage = ref<string>()
const menuHasData = ref(false)
const menuIsLoading = computed(
  () => !menuHasData.value && menuErrorMessage.value === undefined
)

const isLoading = computed(() => storeIsLoading.value || menuIsLoading.value)
const isMobile = ref(false)

onMounted(async () => {
  window.addEventListener('resize', handleResize)
  window.addEventListener('orientationchange', handleResize)
  document.querySelector('main')!.addEventListener('scroll', handleScroll)
  handleResize()

  setupConfirmationModal()

  await setupMenu()

  store.$patch({ appIsMounted: true })
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('orientationchange', handleResize)
  document.querySelector('main')!.removeEventListener('scroll', handleScroll)
})

const setupMenu = async () => {

}

const setupConfirmationModal = () => {
  emitter.on('modalClose', (event) => {
    const resolve = ModalService.getResolvers(event.id)
    if (resolve) resolve({ confirm: event.confirm })
  })
}
const handleResize = () => {
  isMobile.value = window.innerWidth < 768
}

const handleScroll = (event: Event) => {
  const scrollingEl = event.target as HTMLElement
  const navEl = document.querySelector('nav') as HTMLElement
  if (scrollingEl.scrollTop > 0) {
    navEl.classList.add('shadow')
  } else {
    navEl.classList.remove('shadow')
  }
}
</script>

<template>
  <v-container class="d-flex flex-column main-container">
    <MenuNav :is-mobile="isMobile" />
    <AppContent>
      <router-view />
    </AppContent>
  </v-container>

  <ManageToast />

  <ConfirmationModal />
</template>

<style scoped lang="scss"></style>

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
