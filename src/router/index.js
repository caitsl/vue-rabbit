import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/Home/index.vue')
        },
        {
          path: '/category/:id',
          component: () => import('@/views/Category/index.vue')
        },
        {
          path: '/category/sub/:id',
          component: () => import('@/views/Category/components/SubCategory.vue')
        },
        {
          path: '/detail/:id',
          component: () => import('@/views/Detail/index.vue')
        },
        {
          path: '/cartlist',
          component: () => import('@/views/CartList/index.vue')
        },
        {
          path:'/checkout',
          component:()=>import('@/views/Chekout/index.vue')
        },
        {
          path:'/pay',
          component:()=>import('@/views/Pay/index.vue')
        }

      ]
    },
    {
      path: '/login',
      component: () => import('@/views/Login/index.vue')
    }
  ],
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
