import http from '@/utils/http'


/**
 * 获取轮播图数据
 * @returns
 */
export function getBannerAPI() {
  return http({
    url: '/home/banner'
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



