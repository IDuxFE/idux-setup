import { useAppSettingStore } from './appSetting'

// const allModules = import.meta.globEager('./**/*.ts')

// Object.keys(allModules).forEach(path => {
//   const fileName = path.split('/')[1]
//   const module = allModules[path][fileName] || allModules[path].default || allModules[path]
//   Object.getOwnPropertyNames(module)
//     .filter(item => item.match(/^use/))
//     .forEach(item => {
//       appStore[item] = module[item]
//     })
// })

export default {
  useAppSettingStore,
}
