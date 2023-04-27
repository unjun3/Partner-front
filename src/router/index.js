import { createRouter, createWebHistory } from 'vue-router'

import {useCounterStore} from "@/stores/counter";

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
  // const store = useCounterStore()
  // const count =  store.count;
  if(!to.matched.length){   //没有匹配路由
    next("/login")
  }else{
    next()
  }

})

export default router
