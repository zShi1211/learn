import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router'
import axios from './axios'
import store from './store'

Vue.use(ElementUI);
Vue.use(axios);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
