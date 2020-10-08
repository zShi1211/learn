import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'index'
    }
  }, {
    path: '/index',
    name: 'index',
    component: () => import('@/page/Home'),
    redirect: {
      name: 'main'
    },
    children: [
      {
        path: 'main',
        name: 'main',
        component: () => import('@/views/Index')
      },
      {
        path: 'changecity',
        name: 'changecity',
        component: () => import('@/views/ChangeCity')
      },
      {
        path: 'shops/:id',
        name: 'shops',
        component: () => import('@/views/ShopList')
      },
      {
        path: 'detail',
        name: 'detail',
        component: () => import('@/views/Detail')
      }
    ]
  }, {
    path: '/login',
    name: 'login',
    component: () => import('@/page/Login')
  }, {
    path: '/register',
    name: 'register',
    component: () => import('@/page/Register')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router
