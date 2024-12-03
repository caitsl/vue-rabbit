import dayjs from "dayjs";
import { computed, onUnmounted, ref } from "vue";

export const useCountDown=()=>{

  let timer=null
  const time=ref(0)

  const formartTime=computed(()=>dayjs.unix(time.value).format('mm分ss秒'))

  const start=(curTime)=>{
    time.value=curTime
    timer=setInterval(()=>{
      if(time.value<=0){
        clearInterval(timer)
      }
        time.value--
    },1000)
  }

  onUnmounted(()=>{
      timer&&clearInterval(timer)
  })
  return {
      formartTime,
      start
  }
}
