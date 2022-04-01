<script setup lang="ts">
import { IduxProvider } from './components/idux-provider'
</script>

<template>
  <IduxProvider>
    <router-view />
  </IduxProvider>
</template>
