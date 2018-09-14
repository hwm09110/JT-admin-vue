import Vue from 'vue'
import Router from 'vue-router'

// import ManageWL from '@/views/wuliu/ManageWL'
// 订单管理
import invenManage from '@/views/inventory/invenManage'
import inventory from '@/views/inventory/Inventory'

// 订单管理
import order from '@/views/order/order'
import orderInfo from '@/views/order/orderInfo'
import seeOrder from '@/views/order/seeOrder'

// 邀请码
import inviteCode from '@/views/inviteCode/InviteCode'
import codeManage from '@/views/inviteCode/codeManage'
import sendCode from '@/views/inviteCode/sendCode'

// 物流管理
import ChangeWlInfo from '@/views/wuliu/ChangeWlInfo'
import AddWlInfo from '@/views/wuliu/AddWlInfo'
import seeWlInfo from '@/views/wuliu/seeWlInfo'
import WlList from '@/views/wuliu/WlList'

// 商品管理
import goods from '@/views/goods/Goods'
import goodsList from '@/views/goods/goodsList'
import goodsDetail from '@/views/goods/goodsDetail'

//设置
import manage from '@/views/manage/manage'
import accountList from '@/views/manage/accountList'
import addAccount from '@/views/manage/addAccount'
import accountDetail from '@/views/manage/accountDetail'

//用户
import user from '@/views/user/user'
import userList from '@/views/user/userList'

//操作记录
import record from '@/views/record/record'
import kcRecordList from '@/views/record/kcRecordList'
import goodsRecordList from '@/views/record/goodsRecordList'

//错误页面
import error from '@/views/error'

// 主页面、登录页面、忘记密码页面
import index from '@/views/Index'
import Login from '@/views/Login'
// import test from '@/views/test'
import Forget from '@/views/forget/Forget'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  // 监听用户请求（动静-静态资源请求）
  // 当新项目部署到新的路径下，不要跟跟其他放在一起，放在一个独立项目（dist文件夹别放其他）
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    // 登录
    {
      name: 'Login',
      path: '/login',
      component: Login,
      // component: () => import('@/views/Login'),
      meta: {title: '登录'}
    },
    // 忘记密码
    {
      name: 'Forget',
      path: '/forget',
      component: Forget,
      // component: () => import('@/views/forget/Forget'),
      meta: {title: '密码重置'}
    },
    {
      name: 'home',
      path: '/home',
      redirect: '/goods',
      component: index,
      // component: () => import('@/views/Index'),
      meta: {title: '首页'},
      children: [
        // 物流管理
        {
          name: 'wlLIst',
          path: '/wlList',
          component: WlList,
          // component: () => import('@/views/wuliu/WlList'),
          meta: {title: '物流信息'}
        },
        {
          name: 'ChangeWlInfo',
          path: '/changeWlInfo',
          component: ChangeWlInfo,
          // component: () => import('@/views/wuliu/ChangeWlInfo'),
          meta: {title: '修改物流信息'}
        },
        {
          name: 'AddWlInfo',
          path: '/addWlInfo',
          component: AddWlInfo,
          // component: () => import('@/views/wuliu/AddWlInfo'),
          meta: {title: '添加物流信息'}
        },
        {
          name: 'seeWlInfo',
          path: '/seeWlInfo',
          component: seeWlInfo,
          // component: () => import('@/views/wuliu/seeWlInfo'),
          meta: {title: '查看订单'}
        },
        // 商品管理
        {
          name: 'goods',
          path: '/goods',
          redirect: '/goods/goodsList',
          component: goods,
          // component: () => import('@/views/goods/Goods'),
          meta: {title: '商品管理',code:1},
          children: [
            {
              name: 'goodsDetail',
              path: 'goodsDetail',
              component: goodsDetail,
              // component: () => import('@/views/goods/goodsDetail'),
              meta: {title: '商品详情',code:1}
            },
            {
              name: 'goodsList',
              path: 'goodsList',
              component: goodsList,
              // component: () => import('@/views/goods/goodsList'),
              meta: {title: '商品列表',code:1}
            }
          ]
        },
        // 邀请码
        {
          name: 'inviteCode',
          path: '/inviteCode',
          redirect: '/inviteCode/codeManage',
          component: inviteCode,
          // component: () => import('@/views/inviteCode/InviteCode'),
          meta: {title: '邀请码',code:2},
          children: [
            {
              name: 'codeManage',
              path: 'codeManage',
              component: codeManage,
              // component: () => import('@/views/inviteCode/codeManage'),
              meta: {title: '邀请码管理',code:2}
            },
            {
              name: 'sendCode',
              path: 'sendCode',
              component: sendCode,
              // component: () => import('@/views/inviteCode/sendCode'),
              meta: {title: '发送邀请码',code:2}
            }
          ]
        },
        // 订单管理
        {
          name: 'order',
          path: '/order',
          redirect: '/order/orderInfo',
          component: order,
          children: [
            {
              name: 'orderInfo',
              path: 'orderInfo',
              component: orderInfo,
              meta: {title: '订单信息',code:3}
            },
            {
              name: 'seeOrder',
              path: 'seeOrder',
              component: seeOrder,
              meta: {title: '查看订单',code:3}
            }
          ]
        },
        // 库存管理
        {
          name: 'inventory',
          path: '/inventory',
          redirect: '/inventory/invenManage',
          component: inventory,
          children: [
            {
              name: 'invenManage',
              path: 'invenManage',
              component: invenManage,
              meta: {title: '库存信息',code:4}
            }
          ]
        },
        //账号设置
        {
          name: 'manage',
          path: '/manage',
          redirect: '/manage/accountList',
          component: manage,
          children: [
            {
              name: 'accountList',
              path: 'accountList',
              component: accountList,
              meta: {title: '账号列表',code:5}
            },
            {
              name: 'addAccount',
              path: 'addAccount',
              component: addAccount,
              meta: {title: '添加账号',code:5}
            },
            {
              name: 'accountDetail',
              path: 'accountDetail',
              component: accountDetail,
              meta: {title: '账号详情',code:5}
            }
          ]
        },
        //修改记录
        {
          name: 'record',
          path: '/record',
          redirect: '/record/kcRecordList',
          component: record,
          children: [
            {
              name: 'kcRecordList',
              path: 'kcRecordList',
              component: kcRecordList,
              meta: {title: '库存修改列表',code:6}
            },
            {
              name: 'goodsRecordList',
              path: 'goodsRecordList',
              component: goodsRecordList,
              meta: {title: '首页商品修改列表',code:6}
            }
          ]
        },
        //用户 
        {
          name: 'user',
          path: '/user',
          redirect: '/user/userList',
          component: user,
          children: [
            {
              name: 'userList',
              path: 'userList',
              component: userList,
              meta: {title: '用户列表',code:7}
            }
          ]
        }
      ]
    },
    {
      name: 'error',
      path: '*',
      component: error
    },
    // 物流管理功能
    // {
    //   name: 'ManageWL',
    //   path: '/manageWL',
    //   // component: () => import('@/views/wuliu/ManageWL'),
    //   component: ManageWL,
    //   meta: {title: '物流管理'},
    //   children: [
    //     // 修改物流信息
    //     {
    //       name: 'ChangeWlInfo',
    //       path: '/changeWlInfo',
    //       // component: () => import('@/views/wuliu/ChangeWlInfo'),
    //       component: ChangeWlInfo,
    //       meta: {title: '修改物流信息'}
    //     },
    //     // 添加物流信息
    //     {
    //       name: 'AddWlInfo',
    //       path: '/addWlInfo',
    //       // component: () => import('@/views/wuliu/AddWlInfo'),
    //       component: AddWlInfo,
    //       meta: {title: '添加物流信息'}
    //     },
    //     // 查看订单
    //     {
    //       name: 'seeWlInfo',
    //       path: '/seeWlInfo',
    //       component: seeWlInfo,
    //       // component: () => import('@/views/wuliu/seeWlInfo'),
    //       meta: {title: '查看订单'}
    //     },
    //     // 物流信息列表
    //     {
    //       name: 'WlList',
    //       path: '/wlList',
    //       // component: () => import('@/views/wuliu/WlList'),
    //       component: WlList,
    //       meta: {title: '物流信息'}
    //     }
    //   ]
    // },
    // // 商品管理
    // {
    //   name: 'goods',
    //   path: '/goods',
    //   // components: () => import('@/views/goods/Goods'),
    //   component: Goods,
    //   meta: {title: '商品管理'},
    //   children: [
    //     {
    //       name: 'addGoods',
    //       path: '/addGoods',
    //       components: addGoods,
    //       // components: () => import('@/views/goods/addGoods'),
    //       meta: {title: '添加商品'}
    //     }
    //   ]
    // }
  ]
})
