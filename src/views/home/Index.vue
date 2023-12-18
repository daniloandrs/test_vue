<script setup lang="ts">
import ContentScaffold from '@/components/ContentScaffold.vue'
import { ref } from 'vue';
import { PaymentService } from '@/services/payments.service';
import { onMounted } from 'vue';
import { useStore } from '@/app/store';
import { mdiInformationSlabCircleOutline,mdiSync, mdiHeartOutline,mdiCellphone, mdiLightbulbVariantOutline,mdiCalendarRange } from '@mdi/js';
import { useRouter } from 'vue-router';
const store = useStore()
const router = useRouter()
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
    icon: mdiCellphone,
    path: 'recharge'
  },
  {
    id: 2,
    name: 'Pagos y Servicios',
    icon:mdiLightbulbVariantOutline,
    path: 'recharge'
  },
  {
    id: 1,
    name: 'Historial de ganancias y operaciones',
    icon:mdiCalendarRange,
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

const to = (namePath: string) => {
  router.push({
    path:namePath
  })
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
    <div class="align-center mx-4">
      <div class="pb-0 mb-0 flex items-center content-center">
        <span class="font-weight-medium text-gray-700 font-semibold">
          Saldo Virtual
        </span>
        <button type="button" 
          class="text-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 ">
              <svg-icon type="mdi" :path="mdiInformationSlabCircleOutline"></svg-icon>
          </button>
      </div>
      <div  class="pt-0 mt-0 flex items-center content-center">
        <template v-if="loading">
          <div role="status" class="max-w-sm animate-pulse">
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <span class="sr-only">Loading...</span>
          </div>
        </template>
        <template v-else>
          <h2 class="text-3xl font-bold">
            S/ {{ ballancedCard }}
          </h2>
           <button type="button" 
            @click="getCurrentBalance()"
          class="text-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 ">
              <svg-icon type="mdi" :path="mdiSync"></svg-icon>
          </button>
        </template>
      </div>
      <div  class="pt-2  pb-2 mt-0">
        <button type="button" class="inline-flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">
          <svg-icon type="mdi" :path="mdiHeartOutline"></svg-icon> ¿Cómo cargar mi saldo virtual?
        </button>
      </div>
      <div>
        <span  class="font-weight-medium text-gray-700 font-semibold">
          Código para cargar tu saldo:
        </span>
        <span  class="font-weight-medium text-blue-500 font-semibold">
          {12345678901}
        </span>
      </div>
      
      <hr class="my-4" />

      <div>
        
        <div class="w-full text-gray-900 bg-white  ">
            <button type="button"
              @click="to(item.path)"
               v-for="(item) in options"
            class="relative inline-flex items-center w-full px-4 py-4 
              bg-gray-100
              my-2
            text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ">
                 <svg-icon type="mdi" class="text-yellow-600" :path="item.icon"></svg-icon>&nbsp; {{ item.name }}
            </button>
        </div>
      </div>
    </div>
  </ContentScaffold>
</template>
