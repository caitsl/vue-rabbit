import { defineStore } from "pinia";
import { ref } from "vue";


export const useCartStore=defineStore('cart',()=>{

  //购物车列表
  const cartList=ref([])

  //添加购物车
  const addCart=(goods)=>{
    console.log("添加",goods);

      //添加购物车逻辑
      const item=cartList.value.find(item=>goods.skuId===item.skuId)
      if(item){
          item.count+=goods.count
      }else{
        cartList.value.push(goods)
      }

  }

  return {
       cartList,
       addCart
  }
},{
    persist:true
})
