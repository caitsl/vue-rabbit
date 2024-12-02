import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from "@/apis/user";
import { useCartStore } from './cart';
import { mergeCartAPI } from '@/apis/cart';

export const useUserStore = defineStore('user', () => {
  const userInfo = ref({})
  const cartStore = useCartStore()

  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    userInfo.value = res.result

    await mergeCartAPI(cartStore.cartList.map(item => {
      return {
        skuId: item.skuId,
        selectId: item.selectId,
        count: item.count
      }
    }))

    cartStore.updateNewList()
  }

  const clearUserInfo = () => {
    userInfo.value = {}
    cartStore.clearCart()
  }

  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
}, {
  persist: true
})
