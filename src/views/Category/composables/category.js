
import { ref, onMounted } from "vue";
import { findTopCategoryAPI } from "@/apis/category"
import { onBeforeRouteUpdate, useRoute } from "vue-router";
export function useCategory(){
  const route = useRoute();
  const category = ref({});
  const getCategory = async (id=route.params.id) => {
    const res = await findTopCategoryAPI(id);
    category.value = res.result;
  };

  onBeforeRouteUpdate((to)=>{
    getCategory(to.params.id)
  })

  onMounted(()=>getCategory())
  return {
    category
  }
}
