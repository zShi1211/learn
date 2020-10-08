import Vue from 'vue'
import Vuex from 'vuex'
import { getPosition, login } from '@/axios/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '',
    login: {
      userName: "",
      isLogin: false
    }
  },
  mutations: {
    changeCityM(state, val) {
      state.city = val;
    },
    changeLogin(state, val) {
      state.login = val;
    }
  },
  actions: {
    async getPositionA({ commit }) {
      const res = await getPosition();
      commit('changeCityM', res.data.name);
    },
    async loginHandel({ commit }, val) {
      const res = await login(val);
      if (res.status === 'success') {
        window.localStorage.setItem('userName', val.userName);
        window.localStorage.setItem('password', val.password);
        commit('changeLogin', {
          userName: val.userName,
          isLogin: true
        })
      }
      return res;
    }
  },
  modules: {
  }
})
