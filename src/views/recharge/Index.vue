<script setup lang="ts">
import ContentScaffold from '@/components/ContentScaffold.vue';
import { ref, onMounted, computed } from 'vue';
import { PaymentService } from '@/services/payments.service';
import type{  Company } from '@/services/payments.service';
import { toastError } from '../../util/toast.service';
import { useStore } from '@/app/store';
import { mdiHeartOutline, mdiStarOutline, mdiPhoneOutline, mdiAccountSchoolOutline } from '@mdi/js';
import Skeleton from '@/components/Skeleton.vue';

const store = useStore()
const loading = ref(false)
const loadingProviders = ref(false);
const companies = ref<Company[]>([])
const search = ref<string>('')

const select = ref<{
    id:number,
    name:string,
    icon:string
}>()

const filters = ref([
    {
        id:1 ,
        name:'todos',
        icon : mdiHeartOutline
    },
    {
        id:2 ,
        name:'favoritos',
        icon : mdiStarOutline
    },
    {
        id:3 ,
        name:'telefonia',
        icon : mdiPhoneOutline
    },
    {
        id:4 ,
        name:'universidades',
        icon :mdiAccountSchoolOutline
    }
])

const listCompany = computed(() => {
    if (search && companies) {
        return companies.value!.filter(item => {
            return search.value!.toLowerCase().split('').every(sub => item.company.toLowerCase().includes(sub))
        })
    }
    return companies.value
})
const onSearch  = () => {

}

const getProviders = async () => {
  try {
    loadingProviders.value = true
    const {  data } = await PaymentService.getProviders()

    companies.value = data.companies

  } catch (error) {
    toastError((error as Error).message)
  } finally {
    loadingProviders.value = false
  }
}

onMounted(async ()=> {
    store.navbar = {
    title: 'Recargas'
  }
    await getProviders()
})

</script>

<template>
    <ContentScaffold>
        <div class="mx-4">
            <div>
                <label class="font-bold">Buscar empresa</label>
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" 
                    v-model="search"
                    id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Buscar..." required>
                </div>
            </div>
            <div class="py-4">
                 <div class="flex gap-2 overflow-x-auto w-full">
                    <div
                        v-for="item in filters"
                        class="relative grid select-none items-center whitespace-nowrap rounded-full border  py-1.5 px-3 font-sans text-xs font-bold uppercase ">
                             <div class="absolute top-2/4 left-1.5 h-4 w-4 -translate-y-3/4">
                                <svg-icon  type="mdi" :path="item.icon"  class="relative inline-block h-full w-full -translate-x-0.5 !rounded-full  object-cover object-center" ></svg-icon>
                            </div>
                            <span class="ml-[28px]">
                                <p class="block font-sans text-sm antialiased font-medium leading-none text-gray-600 capitalize">
                               {{item.name}}
                                </p>
                            </span>
                    </div>
                </div>
            </div>
            
            <div style="height:23rem;overflow-y:scroll;">
                
                <Skeleton :items="6" v-if="loadingProviders" />

                <div class="w-full text-gray-900 bg-white" v-else>
                    <ul role="list" class="divide-y divide-gray-100">
                        <li class="flex justify-between gap-x-6 py-5 items-center"
                            v-for="company in listCompany"
                            :key="company._id"
                            :title="company.company"
                        >
                            <div class="flex min-w-0 gap-x-4 items-center">
                            <img 
                                class="h-8 w-8 flex-none rounded-full bg-gray-50" 
                                :src="company.image" loading="lazy">
                            <div class="min-w-0 flex-auto">
                                <p class="text-sm font-semibold leading-6 text-gray-900">
                                    {{ company.company }}
                                </p>
                            </div>
                            </div>
                            <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p class="text-sm leading-6 text-gray-900">
                                     <svg-icon  type="mdi" :path="mdiStarOutline"></svg-icon>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    </ContentScaffold>
</template>