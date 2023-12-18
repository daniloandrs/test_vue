<script setup lang="ts">
</script>
<template>
  <div style="flex: 1; position: relative">
    <main
      style="
        position: absolute;
        overflow-y: auto;
        width: 100%;
      "
      :style="{
        'background-color': 'white'
      }"
    >
      <slot></slot>
    </main>
  </div>
</template>
