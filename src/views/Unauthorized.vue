<script lang="ts" setup>
import { onMounted } from 'vue';
import { useStore } from '../app/store';
const store = useStore()

onMounted(() => {
    store.navbar = {
        title: 'unauthorized'
    }
})
</script>

<template>
    <div class="m-auto d-flex align-center">
        <v-alert
            type="info"
            title="Unauthorized"
            text="your token expired, please login or generate a new token!"
            variant="tonal"
        ></v-alert>
    </div>
</template>
