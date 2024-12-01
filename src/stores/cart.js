
import { defineStore } from "pinia";
import { computed, ref } from "vue";


export const useCartStore = defineStore('cart', () => {

  //购物车列表
  const cartList = ref([])

  const isAll = computed(() => cartList.value.every(item => item.selected))

  //添加购物车
  const addCart = (goods) => {
    console.log("添加", goods);
    //添加购物车逻辑
    const item = cartList.value.find(item => goods.skuId === item.skuId)
    return item ? item.count += goods.count : cartList.value.push(goods)
  }

  //删除购物车
  const delCart = (skuId) => {
    cartList.value = cartList.value.filter(item => item.skuId !== skuId)
  }

  //单选操作
  const singleCheck = (skuId, selected) => {
    const item = cartList.value.find(item => skuId === item.skuId)
    item.selected = selected
  }

  //全选操作
  const allCheck = (selected) => {
    cartList.value.forEach(item => item.selected = selected)
  }


  //总价
  const totalPrice = computed(() => cartList.value.reduce((sum, item) => sum + item.count * item.price, 0))
  //总数量
  const totalCount = computed(() => cartList.value.reduce((sum, item) => sum + item.count, 0))

  return {
    cartList,
    totalPrice,
    totalCount,
    isAll,
    addCart,
    delCart,
    singleCheck,
    allCheck
  }
}, {
  persist: true
})
