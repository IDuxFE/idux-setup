<template>
  <router-view>
    <template #default="{ Component, route }">
      <transition>
        <keep-alive v-if="route.meta.keepAlive">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
        <component v-else :is="Component" :key="route.fullPath" />
      </transition>
    </template>
  </router-view>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
