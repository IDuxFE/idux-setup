import type { RouteComponent, RouteRecordRaw } from 'vue-router'
declare module 'vue-router' {
  export interface RouteMeta {
    title: string

    icon?: string

    keepAlive?: boolean
    /** 路由访问权限标识 */
    permissions?: string[]

    /** 菜单显示排序
     *
     * 菜单项在各自父级菜单中排序，越小越靠前
     *
     * @scope { 1 - 999 }
     */
    sort?: number
  }
}
