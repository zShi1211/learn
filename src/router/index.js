import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './config'

Vue.use(VueRouter)

const routes = routerConfig

const router = new VueRouter({
  mode: process.env.NODE_ENV === 'development' ?'history' :'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
