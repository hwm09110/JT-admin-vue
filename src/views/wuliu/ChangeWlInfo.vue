<style lang="scss" scoped>
.manage{
  padding: 20px;
  padding-top: 55px;
  background-color: #f1f4f7;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  .manage-box{
    // height: 740px;
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
    .manage-box-title{
      height: 60px;
      line-height: 60px;
      padding-left: 15px;
      color: #5f6468;
      font-weight: 600;
      font-size: 18px;
      border-bottom: 1px solid #dcdcdc;
    }
    .manage-box-content{
      padding: 20px;
      box-sizing: border-box;
      .manage-item{
        .manage-item-ddInfo{
          .manage-item-ddInfo-title{
            box-sizing: border-box;
            height: 50px;
            line-height: 50px;
            padding-left: 30px;
            width: 100%;
            background-color: #f9f9f9;
            font-size: 14px;
            .title{
              margin-right: 50px;
              font-weight: 600;
            }
            .state{
              color: #1f7fb1;
            }
          }
          .manage-item-ddInfo-content{
            height: 145px;
            padding: 10px 30px;
            .userInfo{
              font-size: 14px;
              color: #5f6468;
              // float: left;
              // margin-right: 210px;
              div{
                height: 34px;
                line-height: 34px;
                span:nth-child(1) {
                  margin-right: 30px;
                }
              }
            }
            .goodInfo{
              // width: 460px;
              font-size: 14px;
              color: #5f6468;
              // float: left;
              padding-top: 10px;
              // margin-right: 70px;
              .good-img{
                float: left;
                margin-right: 20px;
              }
              .good-name{
                margin-bottom: 40px;
              }
            }
          }
        }
        .manage-item-wlInfo{
          .manage-item-wlInfo-title{
            box-sizing: border-box;
            height: 50px;
            line-height: 50px;
            padding-left: 30px;
            width: 100%;
            background-color: #f9f9f9;
            font-size: 14px;
            font-weight: 600;
          }
          .manage-item-wlInfo-content{
            padding-top: 20px;
            padding-left: 30px;
            font-size: 14px;
            color: #5f6468;
            .courier-company,
            .courier-num{
              height: 36px;
              line-height: 36px;
              margin-bottom: 20px;
              span{
                margin-right: 30px;
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
              button{
                width: 100px;
                height: 34px;
                border:0;
                background-color: #fff;
                color: #1f7fb1;
                border-radius: 5px;
                border: 1px solid #1f7fb1;
                outline: none;
              }
              .submit{
                margin-right: 30px;
                background-color: #1f7fb1;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
  .main-nav{
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #e9ecf2;
    box-sizing: border-box;
    padding-left: 40px;
    color: #5f6468;
    .main-nav-frist{
      margin-right: 5px;
    }
    .today{
      float: right;
      margin-right: 30px;
    }
  }
}
</style>

<template>
  <div class="manage">
    <!-- <div class="main-nav">
      <span class="main-nav-frist">物流管理</span>
      <span class="main-nav-second">> 修改物流信息</span>
      <span class="today">{{today}}</span>
    </div> -->
    <breadcrumb :breadcrumbList='breadcrumbList'></breadcrumb>
    <div class="manage-box">
      <div class="manage-box-title">物流管理</div>
      <div class="manage-box-content">
        <div class="manage-item">
          <div class="manage-item-ddInfo">
            <div class="manage-item-ddInfo-title">
              <span class="title">订单信息</span>
              <span class="state">状态：未发货</span>
            </div>
            <el-row>
              <div class="manage-item-ddInfo-content">
                <el-col :span="12">
                  <div class="userInfo">
                    <div class="user-num">
                      <span>订单号：</span>
                      <span>20184567891234</span>
                    </div>
                    <div class="user-phone">
                      <span>用户手机号：</span>
                      <span>13225252525</span>
                    </div>
                    <div class="user-name">
                      <span>收货人：</span>
                      <span>小明</span>
                    </div>
                    <div class="user-addr">
                      <span>收货地址：</span>
                      <span>广东省广州市南翔一路62号广州宏途教育</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="goodInfo">
                    <div class="good-img">
                      <img src="../../images/636-2.png" alt="">
                    </div>
                    <div class="good-name">安泰-636 防霉密封胶 300ml*24支/箱 单位：箱 颜色：白</div>
                    <div class="good-num">
                      数量：5箱
                    </div>
                  </div>
                </el-col>
              </div>
            </el-row>
          </div>
          <div class="manage-item-wlInfo">
            <div class="manage-item-wlInfo-title">
              <span class="title">物流信息</span>
            </div>
            <div class="manage-item-wlInfo-content">
              <div class="courier-company">
                <span>快递公司</span>
                <input type="text" placeholder="快递公司名称" v-model="courierCompany">
              </div>
              <div class="courier-num" >
                <span>快递单号</span>
                <input type="text" placeholder="快递单号" v-model="courierNum">
              </div>
              <div class="handle">
                <button class="submit">提交</button>
                <button class="back" @click="back">返回</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import breadcrumb from '../../components/breadcrumb'
export default {
  created () {
    // 获取/:后的参数
    // console.log(this.$route.params.id)
  },
  data () {
    return {
      // 快递公司
      courierCompany: '顺丰',
      // 快递单号
      courierNum: 123456789,
      // 面包屑数据
      breadcrumbList: [
        {name: '首页', path: '/home'},
        {name: '物流管理', path: '/wlList'},
        {name: '修改物流信息', path: '/addWlInfo'}
      ]
    }
  },
  components: {
    breadcrumb
  },
  methods: {
    back () {
      this.$router.push({path: '/WlList'})
    }
  }
}
</script>
