<template>
  <IxProLayout :activeKey="activeKey" :menus="menus" type="mixin" :compress="true">
    <template #itemLabel="item">
      <router-link :to="item.key">{{ item.label }}</router-link>
    </template>
    <template #headerContent>
      <Header />
    </template>
    <template #headerExtra>
      <HeaderExtra />
    </template>
    <template #logo>
      <Logo />
    </template>
    <template #siderFooter>
      <IxProLayoutSiderTrigger />
    </template>
    <Main />
  </IxProLayout>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import type { MenuData } from '@idux/components/menu'
import Logo from '@/layout/components/Logo.vue'
import Main from '@/layout/components/Main.vue'
import { RouteRecordRaw, useRoute } from 'vue-router'
import { cloneDeep } from 'lodash-es'
import routes from '@/router/routes'
import Header from './components/Header.vue'
import HeaderExtra from './components/HeaderExtra.vue'
import { normalizePath } from '@/utils'

const menus = ref<MenuData[]>([])
const activeKey = computed(() => route.path)
const route = useRoute()

onMounted(() => {
  menus.value = walkMenus(routes, '/')
})

/**
 * traverse
 */
function walkMenus(routes: RouteRecordRaw | RouteRecordRaw[], parentPath: string) {
  let data: RouteRecordRaw[] = []
  const dataSource: MenuData[] = []

  if (!Array.isArray(routes)) {
    data = [routes]
  } else {
    data = routes
  }
  data.forEach(item => {
    const copy = cloneDeep(item)
    const { children, meta: { title = '', icon = undefined } = {} } = copy

    const _path = normalizePath(parentPath + '/' + item.path)

    if (children) {
      dataSource.push({
        type: 'sub',
        label: title,
        key: _path,
        icon: icon,
        children: walkMenus(children, _path),
      })
    } else {
      dataSource.push({
        type: 'item',
        label: title,
        key: _path,
        icon: icon,
      })
    }
  })
  return dataSource
}
</script>
