<script setup lang="ts">
import { IxMenu } from '@idux/components/menu'
import { computed } from 'vue'
import { RouteRecordRaw, useRoute, type RouteLocationMatched } from 'vue-router'

const route = useRoute()

const generateCurMenus: any = (routers: RouteLocationMatched[] | RouteRecordRaw[]) =>
  routers.map((item: RouteLocationMatched | RouteRecordRaw) => {
    return {
      label: item.meta?.title,
      key: item.path,
      disabled: item.path === '/',
      children:
        item.children && item.children.length > 0 ? generateCurMenus(item.children) : undefined,
    }
  })

const breadcrumbList = computed(() => {
  return generateCurMenus(route.matched)
})
</script>
<template>
  <IxBreadcrumb>
    <!-- TODO: MenuData type problem -->
    <IxBreadcrumbItem v-for="menuItem in breadcrumbList" :key="menuItem.key">
      <IxDropdown v-if="menuItem.children">
        <router-link :to="menuItem.key" class="ix-dropdown-trigger">
          <span>
            {{ menuItem.label }}
          </span>
        </router-link>

        <template #overlay>
          <IxMenu :dataSource="menuItem.children" />
        </template>
      </IxDropdown>

      <router-link :to="menuItem.key" v-else>
        <span>
          {{ menuItem.label }}
        </span>
      </router-link>
    </IxBreadcrumbItem>
  </IxBreadcrumb>
</template>
