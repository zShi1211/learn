import axios from 'axios';
import urls from './urlls';

export const a = axios.create({
  method: 'get',
  baseURL: urls.baseUrl,
  params: {
    appkey: 'wangzs_1580992833625'
  }
})

a.interceptors.response.use(res => {
  return res.data;
}, err => {
  return Promise.reject(err);
})

export default function (Vue) {
  Vue.prototype.$axios = a;
}
