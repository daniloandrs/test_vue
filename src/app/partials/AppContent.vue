<script setup lang="ts">
</script>
<template>
  <div style="flex: 1; position: relative">
    <main
      style="
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        overflow-y: auto;
      "
      :style="{
        'background-color': 'white'
      }"
    >
      <slot></slot>
    </main>
  </div>
</template>
