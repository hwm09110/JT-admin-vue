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
.login-box-view-handle-user .user-tip1,
.login-box-view-handle-psd .user-tip2{
  position: absolute;
  bottom : -22px;
  left: 40px;
  color: red;
  font-size: 14px;
  // display: none;
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
              <input type="text" placeholder="请输入账号" name="user" v-model="user" @blur="checkUser" @keyup.enter="logining">
              <div class="user-tip1" v-if="tipShow[0]">请填写账号</div>
            </div>
            <div class="login-box-view-handle-psd">
              <input type="password" placeholder="请输入密码" name="password" v-model="password" @blur="checkPsd" @keyup.enter="logining">
              <div class="user-tip2" v-if="tipShow[1]">请填写密码</div>
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
export default {
  created () {
    // 取出cookie，调用接口
    if (localStorage.getItem('isLogin')) {
      this.user = this.getCookie('user')
      this.password = this.getCookie('password')
      this.logining()
    }
  },
  mounted () {
  },
  data () {
    return {
      tipShow: [false, false],
      user: 'yanpan',
      password: '123456',
      sevenDay: ''
    }
  },
  methods: {
    // 验证输入
    checkUser () {
      this.$set(this.tipShow, 0, !this.user)
      localStorage.setItem('user', this.user)
    },
    checkPsd () {
      this.$set(this.tipShow, 1, !this.password)
    },
    // 进行登录
    logining () {
      this.checkUser()
      this.checkPsd()

      if (this.user && this.password) {
        // 设置本地存储来存储登录状态
        // localStorage.setItem('isLogin', true)
        // 发送登录请求
        // 设置cookie--7天过期
        // this.setCookie('test1', this.user, 7)
        // this.setCookie('test2', this.password, 7)
        api.checkLogin({
          'account': this.user,
          'pswd': this.password
        }).then(res => {
          console.log(res, '登录接口')
          if (res.data.code === '200') {
            this.rememberAccount()
            localStorage.setItem('isLogin', true)
            //登录成功，拿权限列表
            this.$store.dispatch('getAccessRouter').then(res=>{
              
              this.jumpToFirstAccess()
            })
            
          }else{
             this.$message.error(res.data.message)
          }
        })
      }
    },
    // 记住账号密码 七天自动登录
    rememberAccount () {
      if (this.sevenDay) {
        this.setCookie('user', this.user, 7)
        this.setCookie('password', this.password, 7)
      }
    },
    // 忘记密码
    forget () {
      this.$router.push({path: '/forget'})
    },
    // 设置cookie
    setCookie (cname, cvalue, exdays) {
      var d = new Date()
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
      var expires = 'expires=' + d.toUTCString()
      // console.info(cname + '=' + cvalue + '; ' + expires)
      document.cookie = cname + '=' + cvalue + '; ' + expires
      // console.info(document.cookie)
    },
    // 获取cookie
    getCookie (cname) {
      var name = cname + '='
      var ca = document.cookie.split(';')
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) === ' ') c = c.substring(1)
        if (c.indexOf(name) !== -1) return c.substring(name.length, c.length)
      }
      return ''
    },
    // 清除cookie
    clearCookie () {
      this.setCookie('username', '', -1)
    },
    checkCookie () {
      var user = this.getCookie('username')
      if (user !== '') {
        alert('Welcome again ' + user)
      } else {
        user = prompt('Please enter your name:', '')
        if (user !== '' && user !== null) {
          this.setCookie('username', user, 365)
        }
      }
    },
    // 获取当天日期
    getToday () {
      let date = new Date()
      let Y = date.getFullYear()
      let M = date.getMonth() + 1
      let D = date.getDate()
      M = M > 9 ? M : '0' + M
      D = D > 9 ? D : '0' + D
      let X = date.getDay()
      switch (X) {
        case 0:
          X = '  星期日'
          break
        case 1:
          X = '  星期一'
          break
        case 2:
          X = '  星期二'
          break
        case 3:
          X = '  星期三'
          break
        case 4:
          X = '  星期四'
          break
        case 5:
          X = '  星期五'
          break
        case 6:
          X = '  星期六'
          break
      }
      this.today = Y + '年' + M + '月' + D + '日' + X
      localStorage.setItem('today', this.today)
    },
    //跳转到有权限访问的第一个页面
    jumpToFirstAccess () {
      console.log(this.$store.state.accessRouteList);
      let constantRoutePath = this.$store.state.constantRoutePath
      let accessRouteList = this.$store.state.accessRouteList
      let path_code = Math.min(...accessRouteList)
      let jump_path = constantRoutePath[path_code] || {path: '/home'}
      this.$router.push(jump_path)
    }
  },
  destroyed () {
    localStorage.setItem('user', this.user)
  }
}
</script>
