import axios from 'axios'
import Qs from 'qs'

// 设置基准路径
const URL = 'http://192.168.8.90'
// const URL = 'http://oa.jointas.com'
// const URL = 'https://oa.jointas.com'
axios.defaults.baseURL = URL
axios.defaults.withCredentials = true
// 设置请求超时
// axios.defaults.timeout = 10000

// 请求拦截器
axios.interceptors.request.use(function (config) {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  // 登录过就不拦截
  // var token = localStorage.getItem('adminToken')
  // if (token) {
  //   config.headers['Authorization'] = token
  // }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 登录接口
const checkLogin = (params) => {
  return axios.post('/jtds/Admin_login/denglu', Qs.stringify(params)).then(res => res)
}

// 忘记密码接口
const forgetPsd = (params) => {
  return axios.post('/jtds/Admin_login/editpswd', Qs.stringify(params)).then(res => res)
}

// 检查短信验证码接口
const checkMsg = (params) => {
  return axios.post('/jtds/Admin_login/verifysms', Qs.stringify(params)).then(res => res)
}

// 发送短信接口
const sendMsg = (params) => {
  return axios.post('/jtds/Admin_captcha/sendsms', Qs.stringify(params)).then(res => res)
}

// 发送图片验证码接口
const sendImg = (params) => {
  return axios.get('/jtds/Admin_captcha/createCode', {params: Qs.stringify(params)}).then(res => res)
}

// 邀请码接口：
// 获取邀请码列表
const getYqm = (params) => {
  return axios.post('/jtds/Admin_InviteCode/codeList', Qs.stringify(params)).then(res => res.data)
}
// 创建邀请码
const creatYqm = (params) => {
  return axios.post('/jtds/Admin_InviteCode/addCode', Qs.stringify(params)).then(res => res.data)
}

// 编辑邀请码
const editYqm = (params) => {
  return axios.post('/jtds/Admin_InviteCode/editCode', Qs.stringify(params)).then(res => res.data)
}

// 删除邀请码
const delYqm = (params) => {
  return axios.post('/jtds/Admin_InviteCode/delCode', Qs.stringify(params)).then(res => res.data)
}

// 发送邀请码
const sendYqm = (params) => {
  return axios.post('/jtds/Admin_Invitecode/sendCode', Qs.stringify(params)).then(res => res.data)
}

// 商品接口
// 添加新商品
const addGood = (params) => {
  return axios.post('/jtds/Admin_Goods/addGoods', Qs.stringify(params)).then(res => res.data)
}

// 编辑商品
const editGood = (params) => {
  return axios.post('/jtds/Admin_Goods/editGoods', Qs.stringify(params)).then(res => res.data)
}

// 获取商品
const getGoodList = (params) => {
  return axios.post('/jtds/Admin_Goods/goodsList', Qs.stringify(params)).then(res => res.data)
}

// 删除商品
const delGood = (params) => {
  return axios.post('/jtds/Admin_Goods/delGoods', Qs.stringify(params)).then(res => res.data)
}

// 添加商品详情
const addGoodDesc = (params) => {
  return axios.post('/jtds/Admin_Goods/addGoodsDetail', Qs.stringify(params)).then(res => res.data)
}

// 编辑商品详情
const editGoodDesc = (params) => {
  return axios.post('/jtds/Admin_Goods/editGoodsDetail', Qs.stringify(params)).then(res => res.data)
}

// 删除商品详情
const delGoodDesc = (params) => {
  return axios.post('/jtds/Admin_Goods/delGoodsDetail', Qs.stringify(params)).then(res => res.data)
}

// 获取商品详情列表
const getGoodDescList = (params) => {
  return axios.post('/jtds/Admin_Goods/goodsDetailList', Qs.stringify(params)).then(res => res.data)
}

// 订单管理-获取订单列表
const getOrderList = (params) => {
  return axios.post('/jtds/Admin_Order/orderList', Qs.stringify(params)).then(res => res.data)
}

// 订单管理-获取对应订单信息
const getOrderDetail = (params) => {
  return axios.post('/jtds/Admin_Order/orderDetail', Qs.stringify(params)).then(res => res.data)
}

// 订单管理-删除订单
const delOrder = (params) => {
  return axios.post('/jtds/Admin_Order/delOrder', Qs.stringify(params)).then(res => res.data)
}

// 物流信息-添加物流信息
const addExpress = (params) => {
  return axios.post('/jtds/Admin_Express/addExpress', Qs.stringify(params)).then(res => res.data)
}

// 物流信息-修改物流信息
const editExpress = (params) => {
  return axios.post('/jtds/Admin_Express/editExpress', Qs.stringify(params)).then(res => res.data)
}

// 库存-导入excel
const importExcel = (params) => {
  return axios.post('/jtds/Admin_Storage/import', Qs.stringify(params)).then(res => res.data)
}

// 库存-导出excel
const exporttExcel = (params) => {
  return axios.post('/jtds/Admin_Storage/export', Qs.stringify(params)).then(res => res.data)
}

// 库存-获取库存列表
const getStorageList = (params) => {
  return axios.post('/jtds/Admin_Storage/storageList', Qs.stringify(params)).then(res => res.data)
}

// 商品管理-查看库存信息
const getGoodsStorage = (params) => {
  return axios.post('/jtds/Admin_Goods/getGoodsStorage', Qs.stringify(params)).then(res => res.data)
}

// get请求
// const queryUserData = (obj) => {
//   return axios.get('users', {params: obj}).then(res => res.data)
// }

export default {
  checkLogin,
  forgetPsd,
  checkMsg,
  sendMsg,
  sendImg,
  getYqm,
  creatYqm,
  editYqm,
  delYqm,
  sendYqm,
  addGood,
  editGood,
  getGoodList,
  delGood,
  addGoodDesc,
  editGoodDesc,
  delGoodDesc,
  getGoodDescList,
  getOrderList,
  getOrderDetail,
  delOrder,
  editExpress,
  addExpress,
  importExcel,
  exporttExcel,
  getStorageList,
  getGoodsStorage
}
