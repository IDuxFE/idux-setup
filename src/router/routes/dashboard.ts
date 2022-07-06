import { IduxLayout } from '@/layout'
import type { RouteRecordRaw } from 'vue-router'

const routeName = 'dashboard'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: routeName,
    meta: {
      title: 'Dashboard',
      sort: 1,
      icon: 'dashboard',
    },
    component: IduxLayout,
    // children: [],
  },
]
export default routes
