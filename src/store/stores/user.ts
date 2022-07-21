import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref<string>('')
    const userInfo = ref<object>()

    async function login() {}
    async function logout() {}

    async function getUserInfo() {
      return userInfo.value
    }

    return {
      token,
      login,
      logout,
      getUserInfo,
    }
  },
  {
    persist: {
      enabled: true,
      strategies: [{ storage: localStorage, paths: ['token', 'userInfo'] }],
    },
  },
)
