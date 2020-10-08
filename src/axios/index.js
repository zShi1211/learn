import axios from 'axios'

axios.interceptors.request.use(request => {
    request.url = `/api${request.url}`
    return request
})

axios.interceptors.response.use(resp => {
    return resp.data
}, err => {
    return Promise.reject(err)
})

export { axios };

export default (Vue) => {
    Vue.prototype.$axios = axios;
}