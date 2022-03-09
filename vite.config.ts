import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isBuild = command === 'build'

  return {
    envDir: './envs',
    plugins: [vue()],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(process.cwd(), 'src'),
        },
      ],
      dedupe: ['vue'],
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    define: {
      __DEV__: !isBuild,
    },
  }
})
