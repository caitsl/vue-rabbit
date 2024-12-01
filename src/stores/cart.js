import { defineStore } from "pinia";
import { computed, ref } from "vue";


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

  //删除购物车
  const delCart=(skuId)=>{
      cartList.value=cartList.value.filter(item=>item.skuId!==skuId)
  }

  //总价
  const totalPrice=computed(()=>cartList.value.reduce((sum,item)=>sum+item.count*item.price,0))
  //总数量
  const totalCount=computed(()=>cartList.value.reduce((sum,item)=>sum+item.count,0))

  return {
       cartList,
       totalPrice,
       totalCount,
       addCart,
       delCart
  }
},{
    persist:true
})
