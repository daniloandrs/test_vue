<script lang="ts" setup>
const props = defineProps<{
    items:number
}>()
</script>

<template>
    <div class="flex mb-2" v-for="item in props.items">
        <div class="flex-shrink-0">
            <span class="w-12 h-12 block bg-gray-200 rounded-full  animate-pulse"></span>
        </div>

        <div class="ms-4 mt-2 w-full">
            <ul class="mt-2 space-y-3">
                <li class="w-[90%] h-4 bg-gray-200 rounded-full  animate-pulse"></li>
            </ul>
        </div>
        <div class="flex-shrink-0">
            <span class="w-6 h-6 block bg-gray-200 rounded-full  animate-pulse"></span>
        </div>
    </div>
</template>