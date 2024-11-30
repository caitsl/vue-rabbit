import http from '@/utils/http'

export const getDetailAPI=(id)=>{
      return http({
           url:'/goods',
           params:{
              id
           }
      })
}
