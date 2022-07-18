import { defineStore } from 'pinia'
import { ref } from 'vue'

export type ThemeType = 'light' | 'dark'

export const useAppSettingStore = defineStore(
  'appSetting',
  () => {
    const appTheme = ref<ThemeType>('light')
    const loading = ref<number>()

    /**
     * 修改系统主题
     */
    function changeTheme(theme: ThemeType) {
      appTheme.value = theme
    }
    function changeLoadingProgress(progress: number) {
      loading.value = progress
    }
    return {
      theme: appTheme,
      loading,
      changeLoadingProgress,
      changeTheme,
    }
  },
  {
    persist: {
      enabled: true,
      strategies: [{ storage: localStorage, paths: ['appTheme'] }],
    },
  },
)
