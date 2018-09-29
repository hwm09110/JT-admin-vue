<style lang="scss" scoped>
 @import '../styles/common.css';
.login{
  width: 100%;
  overflow: hidden;
  height: 1080px;
  position: relative;
}

/* 左边图片 */
.login-box-view-img{
  width: 490px;
  height: 365px;
  // background: url(../images/img_left.png) no-repeat;
  background: url(../../img/jtds/img_left.png) no-repeat;
  margin-left: 80px;
  float: left;
}
/* 右边操作 */
.login-box-view-handle{
  float: left;
  height: 365px;
  width: 440px;
  margin-left: 50px;
  /* border: 1px solid #000; */
}
.login-box-view-handle-title{
  font-size: 32px;
  font-family: '微软雅黑';
  height: 32px;
  line-height: 32px;
  margin-bottom: 60px;
}
.login-box-view-handle-user,
.login-box-view-handle-psd{
  margin-bottom: 30px;
  position: relative;
}
/* 输入框 */
.login-box-view-handle-user input,
.login-box-view-handle-psd input{
  margin-left: 30px;
  width: 360px;
  height: 45px;
  border: 0;
  outline: 0;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  padding-left: 40px;
  font-size: 16px;
  line-height: 16px;
  position: relative;
  box-sizing: border-box;
  // background: url(../images/user.png) no-repeat 10px center;
}
.login-box-view-handle-user img {
  position: absolute;
  left: 41px;
  top: 10px;
  z-index: 2;
}
.login-box-view-handle-psd input {
  background: url(../images/psd.png) no-repeat 10px center;
}
/* 忘记密码 */
.login-box-view-handle-forget{
  margin-left: 30px;
  width: 365px;
  margin-bottom: 60px;
  font-size: 14px;
  height: 16px;
  line-height: 16px;
}
.login-box-view-handle-forget-seven{
  float: left;
  position: relative;
  // padding-left: 20px;
}
// .login-box-view-handle-forget-seven input[type=checkbox]{
//   margin: 0;
//   position: absolute;
//   top: 1px;
//   left: 1px;
// }
// .login-box-view-handle-forget-seven label{
//   font-weight: 400;
// }
.login-box-view-handle-forget-getPsd{
  float: right;
  text-decoration: none;
  color: #1f7fb1;
  cursor: pointer;
  &:visited {
    color: #1f7fb1;
  }
}
/* 确定登录 */
.login-box-view-handle-sure{
  margin-left: 30px;
}
.login-box-view-handle-sure .submit{
  width: 365px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  background-color: #1f7fb1;
  color: #fff;
  border: 0;
  outline: none;
  border-radius: 5px;
}
</style>

<template>
  <div class="login">
    <div class="common-bg">
    </div>
    <div class="common-box w clearfix">
      <div class="common-box-logo"></div>
      <div class="common-box-word">集泰家装小程序后台管理系统</div>
      <!-- 中间盒子 -->
      <div class="common-box-view">
        <div class="login-box-view-img"></div>
        <div class="login-box-view-handle">
          <div class="login-box-view-handle-title">集泰家装小程序后台管理系统</div>
          <form action="">
            <div class="login-box-view-handle-user">
              <img src="../images/user.png" alt="">
              <input type="text" placeholder="请输入账号" name="user" v-model.trim="user"  @keyup.enter="logining">
            </div>
            <div class="login-box-view-handle-psd">
              <input type="password" placeholder="请输入密码" name="password" v-model.trim="password" @keyup.enter="logining">
            </div>
            <div class="login-box-view-handle-forget clearfix">
              <div class="login-box-view-handle-forget-seven">
                <!-- <input type="checkbox" name="isSeven" id="selfLogin"> -->
                <el-checkbox label="7天自动登录" v-model="sevenDay"></el-checkbox>
              </div>
              <span class="login-box-view-handle-forget-getPsd" @click="forget">忘记密码</span>
            </div>
            <div class="login-box-view-handle-sure">
              <div class="submit" @click="logining" >登录</div>
            </div>
          </form>
        </div>
      </div>
      <!-- 阴影盒子 -->
      <div class="common-box-shadow w"></div>
    </div>
    <!-- 底部 -->
    <footer>
      <div class="compang-name fl">广州宏途教育网络科技有限公司</div>
      <div class="compang-phone fr">服务热线：020-38664641</div>
    </footer>
  </div>
</template>

<script>
import api from '../api/index'
import Cookies from 'js-cookie'
import secret from '../utils/secret'

export default {
  created () {
    // 取出cookie，调用接口
    let isLogin = Cookies.get('isLogin')
    if (isLogin) {
      this.$router.push('/home')
      return
    }
    this.autoLogin()
  },
  mounted () {
  },
  data () {
    return {
      user: '',
      password: '',
      sevenDay: ''
    }
  },
  methods: {
    showMsg(content){
      this.$message({
        message: content,
        duration:2000,
        type: 'warning'
      });
    },
    // 进行登录
    logining () {
      if(!this.user){
        this.showMsg('请输入账号！')
        return
      }
      if(!this.password){
        this.showMsg('请输入密码！')
        return
      }
      api.checkLogin({
        'account': this.user,
        'pswd': this.password
      }).then(res => {
        console.log(res, '登录接口')
        if (res.data.code === '200') {
          this.rememberAccount()
          Cookies.set('isLogin',true)
          localStorage.setItem('accountName',this.user)
          //登录成功，拿权限列表
          this.$store.dispatch('getAccessRouter').then(res=>{
            this.jumpToFirstAccess()
          })
        }else{
            this.$message.error(res.data.message)
        }
      })
    },
    // 记住账号密码 七天自动登录
    rememberAccount () {
      if (this.sevenDay) {
        let encrypt_user = secret.Encrypt(this.user)
        let encrypt_pwd = secret.Encrypt(this.password)

        Cookies.set('user', encrypt_user, { expires: 7 })
        Cookies.set('password', encrypt_pwd, { expires: 7 })
      }
    },
    // 忘记密码
    forget () {
      this.$router.push({path: '/forget'})
    },
    //跳转到有权限访问的第一个页面
    jumpToFirstAccess () {
      // console.log(this.$store.state.accessRouteList);
      let constantRoutePath = this.$store.state.constantRoutePath
      let accessRouteList = this.$store.state.accessRouteList
      let path_code = Math.min(...accessRouteList)
      let jump_path = constantRoutePath[path_code] || {path: '/home'}
      this.$router.push(jump_path)
    },
    //自动登录
    autoLogin () {
      console.log('自动登录...')
      let encrypt_user = Cookies.get('user')
      let encrypt_password = Cookies.get('password')
      if(encrypt_user && encrypt_password){
        this.user = secret.Decrypt(encrypt_user)
        this.password = secret.Decrypt(encrypt_password)
        this.logining()
      }
    }
  }
}
</script>
