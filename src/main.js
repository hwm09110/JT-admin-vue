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
  // 路由变化修改页面title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // isLogin上线去掉--用于测试版
  let isLogin = localStorage.getItem('isLogin')
  // 如果登录了，就放行
  if (isLogin) {
    next()
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
