import { RouteRecordRaw } from 'vue-router'

/**
 * recursively sort
 * @param routes
 * @returns sorted incrementally routes
 */
export const sortRoutes = (routes: RouteRecordRaw[]): RouteRecordRaw[] =>
  routes.sort((a, b) => {
    if (a.children) {
      a.children = sortRoutes(a.children)
    }
    if (b.children) {
      b.children = sortRoutes(b.children)
    }
    return (a.meta?.sort || 999) - (b.meta?.sort || 999)
  })
