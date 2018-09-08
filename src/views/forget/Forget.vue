<style lang="scss" scoped>
@import '../../styles/common.css';
.forget{
  height: 1080px;
  position: relative;
}
.common-box-view{
  padding-top: 0;
}
.forget-box{
  width: 420px;
  margin: 0 auto;
  height: 100%;
}
/* 标题 */
.forget-box-title{
  height: 112px;
  line-height: 112px;
  text-align: center;
  font-size: 32px;
}
/* 步骤条 */
.forget-box-stepIcon{
  height: 30px;
  position: relative;
  margin-bottom: 15px;
  .line{
    position: absolute;
    top: 14px;
    left: 34px;
    width: 160px;
    border-bottom: 2px solid #1f7fb1;
    &:nth-child(4) {
      left:226px;
    }
  }
  .one,
  .two,
  .three{
    width: 32px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    border-radius: 50%;
    border: 2px solid #1f7fb1;
    color: #1f7fb1;
    font-size: 18px;
    position: absolute;
    top: 0;
  }
  .one{
    left: 0;
  }
  .two{
    left: 50%;
    transform: translate(-50%);
  }
  .three{
    right: 0;
  }
  .activeStep{
    color: #fff;
    background-color: #1f7fb1;
  }
}
.forget-box-stepName{
  position: relative;
  height: 16px;
  line-height: 16px;
  margin-bottom: 80px;
  .one,
  .two,
  .three{
    position: absolute;
    top: 0;
    font-size: 16px;
  }
  .one{
    left: -12px;
  }
  .two{
    left: 50%;
    transform: translate(-50%);
  }
  .three{
    right: 0;
  }
}

// 步骤1
.stepBox-one{
  // display: none;
  .forget-box-form-one{
    .phone,
    .TPcode,
    .DXcode{
      position: relative;
      img{
        position: absolute;
        right: 20px;
        top: 10px;
        cursor: pointer;
      }
      .imgCode{
        right: -40px;
        top: 0px;
      }
      .phone-icon{
        left: 20px;
      }
      input{
        border: 1px solid #dcdcdc;
        border-radius: 5px;
        height: 45px;
        width: 360px;
        margin-left: 5px;
        margin-bottom: 30px;
        padding-left: 45px;
        color: #333;
        // background: url(../../images/phone.png) no-repeat 10px center;
      }
      .warn-tip1,
      .warn-tip2{
        // display: none;
        width: 300px;
        line-height: 46px;
        color: #ff4e4e;
        font-size: 14px;
        height: 46px;
        background: url(../../images/tip_kuang.png) no-repeat;
        position: absolute;
        top: 0;
        right: -340px;
        padding-left: 20px;
        a{
          text-decoration: underline;
        }
      }
    }
    .TPcode,
    .DXcode{
      input {
        width: 250px;
        background: url(../../images/yzcode.png) no-repeat 10px center;
        margin-right: 20px;
      }
      span{
        cursor: pointer;
        color: #1f7fb1;
      }
      .img{
        cursor: pointer;
        width: 80px;
        height: 34px;
        background-color: #f5f5f5;
        color:#999;
        font-size: 12px;
        text-align: center;
        line-height: 34px;
        position: absolute;
        top: 5px;
        right: 20px;
      }
    }
    .nextStep{
      margin-left: 10px;
      .btn{
        width: 360px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        background-color: #1f7fb1;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
}
// 步骤2
.stepBox-two{
  // display: none;
  .forget-box-form-two{
    .reset{
      margin-left: 10px;
      position: relative;
      img{
        position: absolute;
        left: 10px;
        top: 10px;
      }
      input{
        width: 360px;
        height: 45px;
        border: 1px solid #dcdcdc;
        border-radius: 5px;
        padding-left: 45px;
        // background: url(../../images/psd.png) no-repeat 10px center;
        margin-bottom: 15px;
      }
      .warn-tip{
        // display: none;
        width: 300px;
        line-height: 46px;
        color: #ff4e4e;
        font-size: 14px;
        height: 46px;
        background: url(../../images/tip_kuang.png) no-repeat;
        position: absolute;
        top: 0;
        right: -340px;
        padding-left: 20px;
        a{
          text-decoration: underline;
        }
      }
      .reset-tip{
        color: #999;
        margin-bottom: 60px;
      }
    }
  }
  .nextStep{
    margin-left: 10px;
    .btn{
      cursor: pointer;
      width: 360px;
      height: 45px;
      line-height: 45px;
      text-align: center;
      background-color: #1f7fb1;
      color: #fff;
      border-radius: 5px;
    }
  }
}
// 步骤3
.stepBox-three{
  // display: none;
  text-align: center;
  .finish-tip{
    margin-bottom: 95px;
    .time{
      color: #1f7fb1;
    }
  }
  .backTologin{
    margin-left: 10px;
    .btn{
      cursor: pointer;
      width: 360px;
      height: 45px;
      line-height: 45px;
      text-align: center;
      background-color: #1f7fb1;
      color: #fff;
      border-radius: 5px;
    }
  }
}
</style>

<template>
  <div class="forget">
    <div class="common-bg">
    </div>
    <div class="common-box w clearfix">
      <div class="common-box-logo"></div>
      <div class="common-box-word">集泰家装小程序后台管理系统</div>
      <!-- 中间盒子 -->
      <div class="common-box-view">
        <div class="forget-box">
          <div class="forget-box-title">
            密码重置
          </div>
          <!-- 步骤条 -->
          <div class="forget-box-stepIcon">
            <div :class="{'one':true, 'activeStep' : stepShow[0]}">1</div>
            <div class="line"></div>
            <div :class="{'two':true, 'activeStep' : stepShow[1]}">2</div>
            <div class="line"></div>
            <div :class="{'three':true, 'activeStep' : stepShow[2]}">3</div>
          </div>
          <div class="forget-box-stepName">
            <div class="one">验证身份</div>
            <div class="two">重置密码</div>
            <div class="three">完成</div>
          </div>
          <!-- 步骤1 -->
          <div class="stepBox-one" v-if="stepShow[0]">
            <form action="" class="forget-box-form-one">
              <div class="phone">
                <img src="../../images/phone.png" alt="" class="phone-icon">
                <input type="text" name="phone" placeholder="请输入手机号" v-model="phone" @blur="checkPhone">
                <div class="warn-tip1" v-if="checkShow[0]">*请输入正确的手机号码!</div>
              </div>
              <div class="TPcode">
                <input type="text" name="" placeholder="请输入右侧图片验证码" v-model="tpCode" @blur="checkTpCode">
                <!-- <div class="img" @click="getImgCode"> -->
                  <!-- 点击切换 -->
                  <img :src="imgUrl" alt="" @click="getImgCode" class="imgCode">
                <!-- </div> -->
                <div class="warn-tip2" v-if="checkShow[1]">*请输入正确的验证码，看不清 <a href="">换一张</a></div>
              </div>
              <div class="DXcode">
                <input type="text" name="" placeholder="请输入短信验证码" v-model="dxCode" >
                <span @click="sendDxCode">发送验证码</span>
              </div>
              <div class="nextStep" @click="nextStep(1)">
                <div class="btn">下一步</div>
              </div>
            </form>
          </div>
          <!-- 步骤2 -->
          <div class="stepBox-two" v-if="stepShow[1]">
            <form action="" class="forget-box-form-two">
              <div class="reset">
                <img src="../../images/psd.png" alt="">
                <input type="text" placeholder="请输入新密码" v-model="newPsd" @blur="checkPsd">
                <div class="reset-tip">
                  *6-20位字母、数字、符号
                </div>
                <div class="warn-tip" v-if="checkShow[2]">*密码位数必须在6-20位之间!</div>
              </div>
              <div class="nextStep" @click.prevent="nextStep(2)">
                <div class="btn">下一步</div>
              </div>
            </form>
          </div>
          <!-- 步骤3 -->
          <div class="stepBox-three" v-if="stepShow[2]">
            <div class="finish-tip">
              密码重置成功，<span class="time">{{time}}s</span>后返回
            </div>
            <div class="backTologin" @click="backTologin">
              <div class="btn">立即返回</div>
            </div>
          </div>
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
import axios from 'axios'
import api from '../../api/index'
export default {
  mounted () {
    this.getImgCode()
    this.user = localStorage.getItem('user')
  },
  data () {
    return {
      user: '',
      reg: /^1[3|4|5|6|7|8|9][0-9]{9}$/,
      phone: '',
      tpCode: '',
      dxCode: '',
      newPsd: '',
      stepShow: [true, false, false],
      checkShow: [false, false, false],
      backLogin: false,
      time: 3,
      imgUrl: ''
    }
  },
  methods: {
    // 下一步
    nextStep (index) {
      if (index === 1) {
        // 上线去掉
        // this.stepShow = [false, true, false]
        if (this.reg.test(this.phone) && this.tpCode) {
          // 检查短信是否正确
          api.checkMsg({
            smscode: this.dxCode
          }).then(res => {
            console.log(res, '检查短信是否正确')
            if (res.data.code === '200') {
              this.stepShow = [false, true, false]
              this.$set(this.checkShow, 1, false)
              this.$message({
                type: 'success',
                message: res.data.message
              })
            } else {
              this.$message({
                type: 'warning',
                message: res.data.message
              })
            }
            // z正确：下一步
            // this.stepShow = [false, false, true]
            // this.$set(this.checkShow, 1, false)
            // 错误：显示tip2
            // this.$set(this.checkShow, 1, true)
          })
        }
      } else if (index === 2) {
        // 上线去掉
        // this.stepShow = [false, false, true]
        // this.backLogin = true
        if (this.newPsd) {
          api.forgetPsd({
            'account': this.user,
            'pswd': this.newPsd
          }).then(res => {
            console.log(res, '找回密码')
            if (res.data.code === '200') {
              this.backLogin = true
              this.stepShow = [false, false, true]
              this.$set(this.checkShow, 2, false)
            } else {
              this.$set(this.checkShow, 2, true)
              this.$message(res.data.message)
            }
            // 密码设置成功：
            // this.backLogin = true
            // this.stepShow = [false, false, true]
            // this.$set(this.checkShow, 2, false)
            // 设置失败：
            // this.$set(this.checkShow, 2, true)
          })
        }
      }
    },
    // 返回登录页面
    backTologin () {
      this.$router.push({name: 'Login'})
    },
    // 检查输入
    checkPhone () {
      if (this.phone) {
        this.$set(this.checkShow, 0, !this.reg.test(this.phone))
      }
    },
    checkTpCode () {
      this.$set(this.checkShow, 1, !this.tpCode)
    },
    checkPsd () {
      if (this.newPsd) {
        this.$set(this.checkShow, 2, (this.newPsd.length < 6 || this.newPsd.length > 20))
      }
    },
    // 发送短信验证码
    sendDxCode () {
      api.sendMsg({
        tel: this.phone,
        vcode: this.tpCode
      }).then(res => {
        console.log(res, '短信验证码')
        this.$message(res.data.message)
      })
    },
    // 发送图片验证码
    getImgCode () {
      axios.get('https://oa.jointas.com/jtds/Admin_captcha/createCode', {
        responseType: 'arraybuffer'
      }).then(response => {
        return 'data:image/png;base64,' + btoa(
          new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
        )
      }).then(data => {
        this.imgUrl = data
      })
    }
  },
  watch: {
    // 3s后返回登录
    backLogin () {
      if (this.backLogin) {
        let timeId = setInterval(() => {
          this.time--
          if (this.time === 0) {
            clearInterval(timeId)
            this.time = 0
            this.$router.push({name: 'Login'})
          }
        }, 1000)
      }
      return this.backLogin
    }
  }
}
</script>
