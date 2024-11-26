import http from '@/utils/http'


/**
 * 获取轮播图数据
 * @returns
 */
export function getBannerAPI(param={}) {
  const { distributionSite='1'} =param
  return http({
    url: '/home/banner',
    param:{
      distributionSite
    }
  })
}

/**
 * 获取新鲜好物数据
 * @returns
 */
export function findNewAPI() {
  return http({
    url: '/home/new'
  })
}

/**
 * 获取人气推荐数据
 * @returns
 */
export function findHotAPI(){
  return http({
      url:'/home/hot'
  })
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return http({
    url: '/home/goods'
  })
}
