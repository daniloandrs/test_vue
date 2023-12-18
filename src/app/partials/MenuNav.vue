<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from '@/app/store';
import { computed } from 'vue';
import { mdiArrowLeft } from '@mdi/js';
const router = useRouter()
const store = useStore()

const navbar = computed(()=> store.navbar)
const back = () => {
  router.go(-1)
}
</script>

<template>
  <nav class="nav-container">
    <div style="position: fixed; top: 25px;">
      <button type="button" 
        @click="back()"
      class="text-white bg-trasparent font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-transparent">
          <svg-icon type="mdi" :path="mdiArrowLeft"></svg-icon>
      </button>
    </div>
    <div class="d-flex justify-space-around align-center h-[6rem]">
      <div class="d-flex align-center h-full text-center">
        <h2 class="text-white h-full grid content-center text-2xl">
          {{navbar.title}}
        </h2>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss"></style>

<style lang="scss">
 .nav-container {
   background-color: black; 
   color: white;
   border-radius: 0px 0px 20px 20px !important;
 }
</style>
