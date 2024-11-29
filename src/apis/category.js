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

/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id
 * @return {*}
 *
 */
export function getCategoryFilterAPI(id){
    return http({
      url:'/category/sub/filter',
      params:{
         id
      }
    })
}


/**
 * @description: 获取导航数据
 * @data {
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   }
 * @return {*}
 */
   export function getSubCategoryAPI (data)  {
    return http({
      url:'/category/goods/temporary',
      method:'POST',
      data
    })
  }

