import { createPinia } from 'pinia'
import { App } from 'vue'
import piniaPersist from 'pinia-plugin-persist'

const store = createPinia()

const install = (app: App): void => {
  store.use(piniaPersist)

  app.use(store)
}
export default { install }
