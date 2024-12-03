import http from '@/utils/http'

export const getDetailAPI=(id)=>{
      return http({
           url:'/goods',
           params:{
              id
           }
      })
}


export const getHotGoodsAPI=({id,type,limit=3})=>{
    return http({
        url:'/goods/hot',
        params:{
             id,
             type,
             limit
        }
    })
}

export const getLikeListAPI=({limit})=>{
  return http({
      url:'/goods/relevant',
      params:{
        limit
      }
  })
}

