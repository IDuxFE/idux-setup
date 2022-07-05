<template>
  <router-view />
  <Footer />
</template>
<script setup lang="ts">
import Footer from '../components/idux-layout/components/Footer.vue'
import { RouterView } from 'vue-router'
</script>
