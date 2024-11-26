import http from '@/utils/http'

export function getCategoryAPI(){
     return http({
         url:'/home/category/head'
     })
}

export function findTopCategoryAPI(id){
    return http({
        url:'/category',
        params:{
            id:id
        }
    })
}


