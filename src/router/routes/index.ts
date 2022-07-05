import { sortRoutes } from '@/router/utils'
import { type RouteRecordRaw } from 'vue-router'

const allModules = import.meta.globEager('./*.ts')

const moduleRoutes: RouteRecordRaw[] = []

Object.keys(allModules).forEach(key => {
  const mod = allModules[key].default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  moduleRoutes.push(...modList)
})

export default sortRoutes(moduleRoutes)
