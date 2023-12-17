<script setup lang="ts">
import ContentScaffold from '@/components/ContentScaffold.vue';
import { ref, onMounted, computed } from 'vue';
import { PaymentService } from '@/services/payments.service';
import type{  Company } from '@/services/payments.service';
import { toastError } from '../../util/toast.service';
import { useStore } from '@/app/store';

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
        icon : 'mdi-heart-outline'
    },
    {
        id:2 ,
        name:'favoritos',
        icon : 'mdi-star-outline'
    },
    {
        id:3 ,
        name:'telefonia',
        icon : 'mdi-phone-outline'
    },
    {
        id:4 ,
        name:'universidades',
        icon : 'mdi-account-school-outline'
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
        <v-row>
            <v-col cols="12">
                <label>Buscar empresa</label>
                <v-text-field
                    :loading="loading"
                    density="compact"
                    variant="outlined"
                    v-model="search"
                    label="Buscar"
                    append-inner-icon="mdi-magnify"
                    single-line
                    hide-details
                    @click:append-inner="onSearch"
                ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-sheet class="mx-auto" elevation="0" max-width="800">
                    <v-slide-group v-model="select" 
                        :show-arrows="false"
                        selected-class="bg-primary" 
                        multiple
                        variant="outline"
                    >
                        <v-slide-group-item v-for="item in filters" :key="item.id" v-slot="{ isSelected, toggle, selectedClass }">
                            <v-chip :class="selectedClass" class="mx-2" color="indigo" :prepend-icon="item.icon"
                            @click="toggle"
                            >
                                {{item.name}}
                            </v-chip>
                        </v-slide-group-item>
                    </v-slide-group>
                </v-sheet>
            </v-col>
            <v-col cols="12" style="height:23rem;overflow-y:hidden;">
                <v-skeleton-loader type="list-item-avatar@5" v-if="loadingProviders"></v-skeleton-loader>
                
                <v-list lines="two" v-else
                    height="100%"
                >
                    <v-list-item
                        v-for="company in listCompany"
                        :key="company._id"
                        :title="company.company"
                    >
                        <template v-slot:prepend>
                            <v-avatar>
                                <v-img :lazy-src="company.image" :src="company.image" alt="" >
                                    <template v-slot:placeholder>
                                        <div class="d-flex align-center justify-center fill-height">
                                            <v-progress-circular
                                            color="grey-lighten-4"
                                            indeterminate
                                            ></v-progress-circular>
                                        </div>
                                    </template>
                                    <template v-slot:error>
                                        <v-img
                                            class="mx-auto"
                                            height="300"
                                            max-width="500"
                                            src="@/assets/images/broken-image.png"
                                        ></v-img>
                                    </template>
                                </v-img>
                            </v-avatar>
                        </template>

                        <template v-slot:append>
                            <v-btn
                                color="grey-lighten-1"
                                icon="mdi-star-outline"
                                variant="text"
                            ></v-btn>
                        </template>
                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>
    </ContentScaffold>
</template>