<script setup lang="ts">
import { type DrawerProviderInstance } from '@idux/components/drawer'
import { type ModalProviderInstance } from '@idux/components/modal'

import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import IduxProviderRegister from './IduxProviderRegister.vue'

const drawerProviderRef = ref<DrawerProviderInstance>()
const modalProviderRef = ref<ModalProviderInstance>()

const router = useRouter()

onMounted(() => {
  // 每次路由切换时销毁当前的抽屉和弹窗（仅对通过 useDrawer/useModal 创建的生效）
  router.afterEach(() => {
    drawerProviderRef.value!.destroyAll()
    modalProviderRef.value!.destroyAll()
  })
})
</script>

<template>
  <IxDrawerProvider ref="drawerProviderRef">
    <IxNotificationProvider>
      <IxModalProvider ref="modalProviderRef">
        <IxMessageProvider>
          <IduxProviderRegister></IduxProviderRegister>
          <slot></slot>
        </IxMessageProvider>
      </IxModalProvider>
    </IxNotificationProvider>
  </IxDrawerProvider>
</template>
