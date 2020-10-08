import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import './element-variables.scss'
import "@/assets/css/index.css"
import axios from './axios'
import "animate.css";

Vue.use(ElementUI)
Vue.use(axios)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
