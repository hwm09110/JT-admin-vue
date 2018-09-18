import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/animate.css'
import router from './router/index'
// 引入覆盖element-ui样式
import '@/styles/resetElement-ui.scss'
import store from './store/index'

// 引入导入导出Excel的js文件
// import Blob from './excel/Blob.js'
// import Export2Excel from './excel/Export2Excel.js'
// import './excel/Blob.js'
// import './excel/Export2Excel.js'

Vue.use(ElementUI)
Vue.config.productionTip = false


// 路由守卫
router.beforeEach((to, from, next) => {
  // console.log('to 路由信息',to)
  let path_code = to.meta.code
  console.log('path_code',path_code)
  let accessRouteList = localStorage.getItem('accessRouteList')?JSON.parse(localStorage.getItem('accessRouteList')):[]
  // console.log(accessRouteList)

  // 路由变化修改页面title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  let isLogin = localStorage.getItem('isLogin')
  
  // return;
  // 如果登录了，就放行
  if (isLogin) {
    if(path_code){
      if(accessRouteList.includes(path_code.toString())){
        next()
      }else{
        next({path: '/error'})
      }
    }else{
      next()
    }
  } else {
    // 路由拦截，判读是否登录
    if (to.path === '/' || to.path === '/login' || to.path === '/forget') {
      next()
    } else {
      // 手动跳转到登录页时，title不会变化，因此手动更新title
      document.title = '登录'
      // 前往的是登录页
      next({path: '/login'})
    }
  }
  // next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')