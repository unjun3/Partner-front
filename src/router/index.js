import { createRouter, createWebHistory } from 'vue-router'
import {useUserStore} from "@/stores/user";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import("../views/Login.vue")
    },
    {
      path: '/',
      name: 'home',
      component: () => import("../views/Home.vue")
    },
    {
      path: '/404',
      name: '404',
      component: () => import("../views/404.vue")
    }
  ]
})

router.beforeEach((to,from,next)=>{
  //获取缓存的用户数据
  const store = useUserStore()
  const user = store.getUser();
  const hasUser = user && user.id
  if(!hasUser && to.path !== "/login"){   //没有匹配路由
    next("/login")
  }else{
    next()
  }

})

export default router
