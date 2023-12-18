<script setup lang="ts"></script>

<template>
  <div class="container mx-auto">
    <div class="my-4" style="color: var(--primary-blue-color)">
      <h1 class="my-0 mb-0 font-weight-medium">
        <slot name="title"></slot>
      </h1>
      <p class="my-0 text-body-2">
        <slot name="subtitle"></slot>
      </p>
    </div>
    <slot></slot>
  </div>
</template>
