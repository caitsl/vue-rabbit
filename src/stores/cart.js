
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./user";
import { addCartAPI, findNewCartListAPI, delCartAPI } from "@/apis/cart";
import { ElMessage } from "element-plus";
export const useCartStore = defineStore('cart', () => {

  const userStore = useUserStore()
  const isLogin = computed(() => userStore.userInfo.token)
  //购物车列表
  const cartList = ref([])

  const isAll = computed(() => cartList.value.every(item => item.selected))

  const updateNewList = async () => {
    const res = await findNewCartListAPI()
    cartList.value = res.result
  }

  //添加购物车
  const addCart = async (goods) => {
    const { skuId, count } = goods
    //添加购物车逻辑
    if (isLogin.value) {
      await addCartAPI({ skuId, count })
      updateNewList()
    } else {
      const item = cartList.value.find(item => goods.skuId === item.skuId)
      return item ? item.count += goods.count : cartList.value.push(goods)
    }
  }

  const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((sum, item) => sum + item.count, 0))
  const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((sum, item) => sum + item.count * item.price, 0))

  //删除购物车
  const delCart = async (skuId) => {
    if (isLogin.value) {
      await delCartAPI([skuId])
      updateNewList()
    } else {
      cartList.value = cartList.value.filter(item => item.skuId !== skuId)
    }

    ElMessage({ type: 'success', message: '删除购物车成功' })
  }

  //单选操作
  const singleCheck = (skuId, selected) => {
    const item = cartList.value.find(item => skuId === item.skuId)
    if (item) item.selected = selected
  }

  //全选操作
  const allCheck = (selected) => {
    cartList.value.forEach(item => item.selected = selected)
  }

  //清空购物车
  const clearCart = () => {
    cartList.value = []
  }


  //总价
  const totalPrice = computed(() => Array.isArray(cartList.value) ?
    cartList.value.reduce((sum, item) => sum + item.count * item.price, 0)
    : 0
  )
  //总数量
  const totalCount = computed(() => Array.isArray(cartList.value) ?
    cartList.value.reduce((sum, item) => sum + item.count, 0)
    : 0
  )

  return {
    cartList,
    totalPrice,
    totalCount,
    isAll,
    selectedCount,
    selectedPrice,
    addCart,
    delCart,
    singleCheck,
    allCheck,
    clearCart,
    updateNewList
  }
}, {
  persist: true
})
