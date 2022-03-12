import 'virtual:windi.css'
import '@/design/index.less'

import { createApp } from 'vue'
import { idux } from './plugins'
import { router } from './router'
import App from './App.vue'

createApp(App).use(idux).use(router).mount('#app')
