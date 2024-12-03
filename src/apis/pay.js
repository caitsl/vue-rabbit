import http from '@/utils/http'


export const getOrderInfoAPI=(id)=>{
     return http({
        url:`/member/order/${id}`
     })
}
