import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'

import {
  convertViteEnv,
  createVitePlugins,
  generateGlobalVars,
  generateModifyVars,
} from './scripts/vite'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isBuild = command === 'build'
  const root = process.cwd()
  const envDir = './envs'
  const envConfig = convertViteEnv(loadEnv(mode, envDir))
  const { VITE_PUBLIC_PATH } = envConfig

  return {
    base: VITE_PUBLIC_PATH,
    envDir: envDir,
    plugins: createVitePlugins(envConfig),
    resolve: {
      alias: [{ find: '@', replacement: resolve(root, 'src') }],
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          globalVars: generateGlobalVars(),
          modifyVars: generateModifyVars(),
        },
      },
    },
    define: {
      __DEV__: !isBuild,
    },
  }
})
