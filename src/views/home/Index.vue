<script setup lang="ts">
import ContentScaffold from '@/components/ContentScaffold.vue'
import { ref } from 'vue';
import { PaymentService } from '@/services/payments.service';
import { onMounted } from 'vue';
import { useStore } from '@/app/store';

const store = useStore()
const loading = ref(false)
const ballancedCard = ref<number | null>(null)
const options = ref<{
  id: number,
  name: string
  icon: string
  path: string
}[]>([
  {
    id: 1,
    name: 'Recargas',
    icon: 'mdi-cellphone',
    path: 'recharge'
  },
  {
    id: 2,
    name: 'Pagos y Servicios',
    icon: 'mdi-lightbulb-variant-outline',
    path: 'recharge'
  },
  {
    id: 1,
    name: 'Historial de ganancias y operaciones',
    icon: 'mdi-calendar-range',
    path: 'recharge'
  }
])

const getCurrentBalance = async () => {
  try {
    loading.value = true
    const { data } = await PaymentService.getCurrentBalance()
    
    ballancedCard.value = +data.balanceCommerce

  } catch (error) {

  } finally {
    loading.value = false
  }
}


onMounted(async () => {
  store.navbar = {
    title: 'Recargas y pagos'
  }
  await getCurrentBalance()
})

</script>

<template>
  <ContentScaffold>
    <v-row class="align-center">
      <v-col cols="12" class="pb-0 mb-0">
        <span class="font-weight-medium text-grey-darken-1">
          Saldo Virtual
        </span>
        <v-btn icon variant="text">
          <v-icon color="light-blue-accent-3">mdi-information-slab-circle-outline</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" class="pt-0 mt-0">
        <v-skeleton-loader boilerplate type="text" width="200" v-if="loading"></v-skeleton-loader>
        <template v-else>
          <span class="text-h4 font-weight-bold">
            S/ {{ ballancedCard }}
          </span>
          <v-btn icon variant="text" @click="getCurrentBalance">
            <v-icon color="light-blue-accent-3">mdi-sync</v-icon>
          </v-btn>
        </template>
      </v-col>
      <v-col cols="12">
        <v-btn color="grey-darken-1" rounded="xl" variant="outlined">
          ¿Cómo cargar mi saldo virtual?
        </v-btn>
      </v-col>
      <v-col cols="12">
        <span class="font-weight-medium text-grey-darken-1">
          Código para cargar tu saldo:
        </span>
        <span class="font-weight-medium text-light-blue-accent-3">
          {12345678901}
        </span>
      </v-col>
      <v-col cols="12">
        <v-divider></v-divider>
      </v-col>
      <v-col cols="12">
        <v-card class="mx-auto mb-2" width="350" 
        variant="tonal"
        :to="item.path"
        v-for="(item) in options">
        <template v-slot:prepend>
          <v-icon :icon="item.icon" color="orange-accent-4"></v-icon>
        </template>
          <template v-slot:subtitle>
            {{ item.name }}
          </template>
        </v-card>
      </v-col>
    </v-row>
  </ContentScaffold>
</template>
