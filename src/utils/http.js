import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/stores/user'
import router from '@/router'

// 创建axios实例
const instance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 20000
})



// axios请求拦截器
instance.interceptors.request.use(config => {
  const userStore = useUserStore()
  //获取token
  const token = userStore.userInfo.token
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
instance.interceptors.response.use(res => res.data, e => {
  const userStore = useUserStore()
  //错误处理
  ElMessage({
    type: 'warning',
    message: e.response.data.message
  })

  //401-token失效处理
  if (e.response.status === 401) {
    userStore.clearUserInfo()
    router.push('/login')
  }


  return Promise.reject(e)
})


export default instance
