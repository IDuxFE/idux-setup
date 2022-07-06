<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goHome() {
  router.push('/')
}
</script>

<template>
  <IxResult title="404 Not Found">
    <template #extra>
      <IxButton mode="primary" @click="goHome">Go Back</IxButton>
    </template>
  </IxResult>
</template>
