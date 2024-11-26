import '@/styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useIntersectionObserver } from '@vueuse/core'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)


app.directive('img-lazy',{

   mounted(el,binding){
      const { stop } = useIntersectionObserver(
        el,
        ([{isIntersecting}]) => {
          console.log(isIntersecting);
          if(isIntersecting){
            el.src=binding.value
            stop()
          }
        },
      )
   }


})
app.mount('#app')
