<style lang="scss" scoped>
.sendCode{
  padding: 20px;
  padding-top: 55px;
  background-color: #f1f4f7;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  .code-box{
    border-radius: 5px;
    height: 100%;
    background-color: #fff;
    .code-box-title{
      height: 60px;
      line-height: 60px;
      padding-left: 15px;
      color: #5f6468;
      font-weight: 600;
      font-size: 18px;
      border-bottom: 1px solid #dcdcdc;
    }
    .code-box-content{
      padding: 20px;
      padding-left: 30px;
      font-size: 14px;
      color: #5f6468;
      .user-phone,
      .user-inviteCode{
        height: 36px;
        line-height: 36px;
        margin-bottom: 20px;
        span{
          margin-right: 30px;
        }
        .inviteCode-title{
          margin-right: 50px;
        }
        input {
          height: 36px;
          padding-left: 20px;
          width: 260px;
          border: 0;
          border: 1px solid #dcdcdc;
        }
      }
      .handle{
        margin-top: 30px;
        .send{
          width: 160px;
          height: 35px;
          border:0;
          background-color: #1f7fb1;
          color: #fff;
          border-radius: 5px;
          border: 1px solid #1f7fb1;
          outline: none;
          text-align: center;
          line-height: 35px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>

<template>
  <div class="sendCode">
    <breadcrumb :breadcrumbList='breadcrumbList'></breadcrumb>
    <div class="code-box">
      <div class="code-box-title">发送邀请码</div>
      <div class="code-box-content">
        <div class="user-phone">
          <span class="phone-title">用户手机号</span>
          <input type="text" placeholder="请输入用户手机号" v-model="phone">
        </div>
        <div class="user-inviteCode">
          <span class="inviteCode-title">邀 请 码</span>
          <input type="text" placeholder="请输入邀请码" v-model="inviteCode">
        </div>
        <div class="handle">
          <div class="send" @click="sendCode">发送</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import breadcrumb from '../../components/breadcrumb'
import api from '../../api/index'

export default {
  data () {
    return {
      // 面包屑数据
      breadcrumbList: [
        // {name: '首页', path: '/home'},
        {name: '邀请码', path: '/inviteCode'},
        {name: '发送邀请码', path: '/inviteCode/sendCode'}
      ],
      // 用户手机号
      phone: '',
      // 邀请码
      inviteCode: ''
    }
  },
  components: {
    breadcrumb
  },
  methods: {
    sendCode () {
      api.sendYqm({
        code: this.inviteCode,
        phone: this.phone,
        flag: 1
      }).then(res => {
        console.log(res, '发送邀请码')
        this.$message(res.message)
      })
    }
  }
}
</script>
