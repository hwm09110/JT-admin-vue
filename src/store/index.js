import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)
const state = {
  nav: '物流管理',

  //线上
  imgBaseUrl: 'https://oa.jointas.com',
  apiDomain: 'https://oa.jointas.com',

  //测试
  // imgBaseUrl: 'http://192.168.8.90',
  // apiDomain: 'http://192.168.8.90',
  
  //权限路由表
  constantRoutePath:{
    '1': '/goods',
    '2': '/inviteCode',
    '3': '/order',
    '4': '/inventory',
    '5': '/manage',
    '6': '/record',
    '7': '/user'
  },
  //有权访问的路由
  accessRouteList:[],
  //是否是超级管理员
  is_supper_admin:false
}
const mutations = {
  changeNav (state, navName) {
    state.nav = navName
  },
  addAccessRouter (state,routeList) {
    state.accessRouteList = routeList
    localStorage.setItem('accessRouteList', JSON.stringify(routeList))
  },
  setAdmin (state,isAdmin) {
    state.is_supper_admin = isAdmin
  }
}
const actions = {
  getAccessRouter ({ commit }) {
    return new Promise((resolve,reject)=>{
      api.getUserAccountAuth().then(res=>{
        if(res.code == 200){
          commit('addAccessRouter',res.extraData.info)
          commit('setAdmin',res.extraData.is_admin == 1?true:false)
          resolve(res)
        }else{
          reject(res)
        }
      }).catch(error=>{
        reject(error)
      })
    })
  }
}
const getters = {
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})



