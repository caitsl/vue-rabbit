import http from '@/utils/http'

//加入购物车
export const addCartAPI = ({ skuId, count }) => {
  return http({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}

//获取购物车
export const findNewCartListAPI = () => {
  return http({
    url: '/member/cart'
  })
}

//删除购物车
export const delCartAPI = (ids) => {
  return http({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}

//合并购物车
export const mergeCartAPI = (data) => {
  return http({
    url: '/member/cart/merge',
    method: 'POST',
    data
  })
}

//获取结算信息
export const getCheckoutInfoAPI = () => {
  return http({
    url: '/member/order/pre',
  })
}

//提交订单
export const commitOrderAPI = (data) => {
  return http({
    url: '/member/order',
    method: 'POST',
    data
  })
}


