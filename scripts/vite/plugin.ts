import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import windiCSS from 'vite-plugin-windicss'
import { viteMockServe } from 'vite-plugin-mock'

export function createVitePlugins(env: ImportMetaEnv): (Plugin | Plugin[])[] {
  const { VITE_MOCK_ENABLED } = env

  const plugins = [vue(), vueJsx(), windiCSS()]

  if (VITE_MOCK_ENABLED) {
    plugins.push(
      viteMockServe({
        ignore: /^_/,
        mockPath: 'mock',
        localEnabled: true,
      }),
    )
  }

  return plugins
}
