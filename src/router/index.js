import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './config'

Vue.use(VueRouter)

const routes = routerConfig

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
