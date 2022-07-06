import { IduxLayout } from '../../layout/index'
import { type RouteRecordRaw } from 'vue-router'

const routeName = 'exception'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/exception',
    name: routeName,
    meta: {
      title: '异常页面',
      sort: 10,
      icon: 'exception',
    },
    redirect: '/exception/404',
    component: IduxLayout,
    children: [
      {
        path: '404',
        name: `${routeName}-404`,
        meta: {
          title: '404',
          sort: 0,
          icon: 'question',
        },
        component: () => import('@/views/exception/404.vue'),
      },
    ],
  },
]

export default routes
