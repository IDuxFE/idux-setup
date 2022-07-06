// idux.ts
import type { App } from 'vue'

// 导入 cdk 样式，注意是 `index`, 因为 cdk 不会区分主题
import '@idux/cdk/index.css'

// 如果不需要 reset 全局样式和滚动条样式，移除下面 2 行代码
import '@idux/components/style/core/reset.default.css'
import '@idux/components/style/core/reset-scroll.default.css'

// 如果需要 css 按需加载，移除下面 2 行代码
import '@idux/components/default.css'
import '@idux/pro/default.css'

// 如果需要 js 按需加载，移除下面 3 行代码
import IduxCdk from '@idux/cdk'
import IduxComponents from '@idux/components'
import IduxPro from '@idux/pro'

import { createGlobalConfig } from '@idux/components/config'
import { IDUX_ICON_DEPENDENCIES, addIconDefinitions } from '@idux/components/icon'
// import { enUS } from "@idux/components/locales";

// 静态加载: `IDUX_ICON_DEPENDENCIES` 是 `@idux` 的部分组件默认所使用到图标，建议在此时静态引入。
addIconDefinitions(IDUX_ICON_DEPENDENCIES)

// 动态加载：不会被打包，可以减小包体积，需要加载的时候时候 http 请求加载
// 注意：请确认图标的 svg 资源被正确放入到 `public/idux-icons` 目录中
const loadIconDynamically = (iconName: string) => {
  return fetch(`/idux-icons/${iconName}.svg`).then(res => res.text())
}

const globalConfig = createGlobalConfig({
  // 默认为中文，可以打开注释设置为其他语言
  // locale: enUS,
  icon: { loadIconDynamically },
})

const install = (app: App): void => {
  app.use(IduxCdk).use(IduxComponents).use(IduxPro).use(globalConfig)
}

export default { install }
