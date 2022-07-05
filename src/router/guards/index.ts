import { Router } from 'vue-router'
import whiteRouteList from './whiteRoutesList'

export const createRouterGuards = (router: Router): void => {
  router.beforeEach(guard => {
    // white list
    if (whiteRouteList.includes(guard.path)) {
      return
    }
    //
    if (!router.hasRoute(guard.name || '')) {
      router.push('/exception/404')
    }
  })

  router.afterEach(guard => {
    document.title = guard?.meta?.title || document.title
  })

  router.onError((error, to, from) => {
    console.error(error, from, to)
  })
}
