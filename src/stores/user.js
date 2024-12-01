import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from "@/apis/user";

export const useUserStore = defineStore('user', () => {

  const userInfo = ref({})

  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    res.value = res.result
  }

  return {
    userInfo,
    getUserInfo
  }
})
