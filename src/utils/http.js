import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/stores/user'

// 创建axios实例
const instance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// axios请求拦截器
instance.interceptors.request.use(config => {
  const userStore=useUserStore()
  //获取token
  const token=userStore.userInfo.token
  if(token) config.headers.Authorization=`Bearer ${token}`
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
instance.interceptors.response.use(res => res.data, e => {
  //错误处理
  ElMessage({
      type:'warning',
      message:e.response.data.message
  })
  return Promise.reject(e)
})


export default instance
