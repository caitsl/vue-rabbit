import http from '@/utils/http'


/**
 * 获取轮播图数据
 * @returns
 */
export function getBannerAPI(){
  return http({
      url:'/home/banner'
  })
}


export function findNewAPI(){
  return http({
    url:'/home/new'
})
}

