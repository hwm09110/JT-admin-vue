import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  nav: '物流管理',
  // imgBaseUrl: 'https://oa.jointas.com'
  imgBaseUrl: 'http://192.168.8.90'
}
const mutations = {
  changeNav: (state, navName) => {
    state.nav = navName
  }
}
const actions = {
}
const getters = {
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
