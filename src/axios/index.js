import axios from 'axios'

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:1111/data' : 'http://proxy.shiisme.top/data'


axios.interceptors.response.use(resp => {
    return resp.data
}, err => {
    return Promise.reject(err)
})

export { axios };

export default (Vue) => {
    Vue.prototype.$axios = axios;
}