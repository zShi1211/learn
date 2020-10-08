import { a as axios } from './index'
import urls from './urlls'

export function getSearchHotWords() {
  return axios.get(urls.searchHotWords)
}
export function getSearch() {
  return axios.get(urls.search)
}
export function getMenu() {
  return axios.get(urls.nav)
}

export function getRsultsByKeywords() {
  return axios.get(urls.resultsByKeywords)
}

export function getCityList() {
  return axios.get(urls.cityList)
}

export function getHotCity() {
  return axios.get(urls.hotCity)
}

export function getProvince() {
  return axios.get(urls.province)
}

export function getRecentsCity() {
  return axios.get(urls.recentsCity)
}

export function getPosition() {
  return axios.get(urls.getPosition)
}

export function getClassify() {
  return axios.get(urls.classify)
}
export function getAreaList() {
  return axios.get(urls.areaList)
}
export function getGoodsList() {
  return axios.get(urls.goodsList)
}
export function getRecommend() {
  return axios.get(urls.recommend)
}
export function getDetail() {
  return axios.get(urls.detail)
}

export function login(params) {
  return axios.get(urls.login, {
    params
  })
}

export function register(params) {
  return axios.get(urls.register, {
    params
  })
}
