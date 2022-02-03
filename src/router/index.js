import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {name: 'Home'}
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'homes',
        name: 'Homes',
        component: () => import('@/components/Home/Homes.vue')
      },
      {
        path: 'news',
        name: 'News',
        component: () => import('@/components/Home/News.vue')
      },
      {
        path: 'smile',
        name: 'Smile',
        component: () => import('@/components/Home/Smile.vue')
      },
      {
        path: 'subscribe',
        name: 'Subscribe',
        component: () => import('@/components/Home/Subscribe.vue')
      },
    ],
    redirect:'home/homes'
  },
  {
    path:'/login',
    name:'/Login',
    component:() => import('@/views/Login.vue')
  },
  {
    path:'/lock',
    name:'/Lock',
    component:() => import('@/views/Lock.vue')
  }
  // // {
  // //   path: '/about',
  // //   name: 'About',
  // //   // route level code-splitting
  // //   // this generates a separate chunk (about.[hash].js) for this route
  // //   // which is lazy-loaded when the route is visited.
  // //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { y: 0 }
  },
  routes
})
router.beforeEach((to, from, next ) => {
  if(from.path == '/lock' && localStorage.getItem('lock') == 'true'){
    next(false)
  }
  else{
    if(to.path != '/login' && localStorage.getItem('lock' == 'true')){
      next('/lock')
    }else {
      next()
    }
  }
 
})

export default router
