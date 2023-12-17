<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from '../store';
import { computed } from 'vue';

defineProps<{
  isMobile: boolean
}>()

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
        <v-btn icon variant="text"
        @click="back"
        >
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </div>
    <v-container class="d-flex justify-space-around align-center" style="height: 6rem;">

      <div class="d-flex align-center">
        <h2>
          {{navbar.title}}
        </h2>
      </div>
    </v-container>
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
