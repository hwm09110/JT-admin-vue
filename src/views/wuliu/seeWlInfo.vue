<style lang="scss" scoped>
.manage{
  padding: 20px;
  padding-top: 55px;
  background-color: #f1f4f7;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  .manage-box{
    border-radius: 5px;
    height: 740px;
    background-color: #fff;
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
          margin-bottom: 15px;
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
              height: 100px;
              // float: left;
              padding-top: 10px;
              // margin-right: 70px;
              .good-img{
                width: 100px;
                height: 100px;
                background-color: #ccc;
                float: left;
                margin-right: 20px;
              }
              .good-name{
                // margin-bottom: 40px;
                .base{
                  margin-bottom: 25px;
                }
                .about{
                  margin-bottom: 25px;
                }
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
          .manage-item-wlInfo-content1{
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
                cursor: pointer;
              }
            }
          }
          .manage-item-wlInfo-content2{
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
                cursor: pointer;
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
}
</style>

<template>
  <div class="manage">
    <breadcrumb :breadcrumbList='breadcrumbList'></breadcrumb>
    <div class="manage-box">
      <div class="manage-box-title">物流管理</div>
      <div class="manage-box-content">
        <div class="manage-item">
          <div class="manage-item-ddInfo">
            <div class="manage-item-ddInfo-title">
              <span class="title">订单信息</span>
              <span class="state">状态：已发货/已签收</span>
            </div>
            <el-row>
            <div class="manage-item-ddInfo-content">
              <el-col :span="12">
                <div class="userInfo">
                  <div class="user-time">
                    <span>订单日期：</span>
                    <span style="margin-right:20px;">{{goodsList.time | filterYear}}</span>
                    <span>支付时间：</span>
                    <span>{{goodsList.time | filterTimes}}</span>
                  </div>
                  <div class="user-sure" v-if="false">
                    <span>用户确认订单时间</span>
                    <span>未确认</span>
                  </div>
                  <div class="user-sure" v-if="false">
                    <span>用户确认订单时间</span>
                    <span>未确认</span>
                    <span>(还剩9天23小时50分)</span>
                  </div>
                  <div class="user-sure" v-if="true">
                    <span>用户确认收货时间</span>
                    <span>2018-09-01 18:30:15</span>
                  </div>
                  <div class="user-phone">
                    <span>用户手机号：</span>
                    <span>{{goodsList.phone}}</span>
                  </div>
                  <div class="user-name">
                    <span>收货人：</span>
                    <span>{{goodsList.name}}</span>
                  </div>
                  <div class="user-phone">
                    <span>收货人手机号：</span>
                    <span>{{goodsList.phone}}</span>
                  </div>
                  <div class="user-addr">
                    <span>收货地址：</span>
                    <span>{{goodsList.address}}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="goodInfo" v-for="(item, index) in goodsList.goods" :key="index">
                  <div class="good-img">
                    <!-- <img src="../../images/636-2.png" alt=""> -->
                  </div>
                  <div class="good-name">
                    <div class="base">{{item.name}}</div>
                    <div class="about">
                      <span style="margin-right:50px;">单位：{{item.unit}}</span>
                      <span style="margin-right:50px;">颜色：{{item.color}}</span>
                      <span>型号：{{item.size}}</span>
                    </div>
                  </div>
                  <div class="good-num">
                    数量：{{item.num}}
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
            <!-- 查看已有物流信息的订单 -->
            <div class="manage-item-wlInfo-content1" v-if="true">
              <div class="courier-company">
                <span>快递公司</span>
                <span>顺丰速运</span>
              </div>
              <div class="courier-num">
                <span>快递单号</span>
                <span>6284597845126800</span>
              </div>
              <div class="handle">
                <button @click="back">返回</button>
              </div>
            </div>

            <!-- 查看未添加物流信息 -->
            <div class="manage-item-wlInfo-content2" v-if="false">
              <div class="courier-company">
                <span>快递公司</span>
                <input type="text" placeholder="快递公司名称" v-model="courierCompanyAdd">
              </div>
              <div class="courier-num" >
                <span>快递单号</span>
                <input type="text" placeholder="快递单号" v-model="courierNumAdd">
              </div>
              <div class="handle">
                <button class="submit">提交</button>
                <button class="back" @click="back">返回</button>
              </div>
            </div>

            <!-- 查看修改物流信息 -->
            <div class="manage-item-wlInfo-content2" v-if="false">
              <div class="courier-company">
                <span>快递公司</span>
                <input type="text" placeholder="快递公司名称" v-model="courierCompanyEdit">
              </div>
              <div class="courier-num" >
                <span>快递单号</span>
                <input type="text" placeholder="快递单号" v-model="courierNumEdit">
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
// import com from '../../common/common'
export default {
  created () {
    // this.time = com.leftTimer(1)
  },
  data () {
    return {
      // 面包屑数据
      time: '',
      breadcrumbList: [
        // {name: '首页', path: '/home'},
        {name: '物流管理', path: '/wlList'},
        {name: '查看订单', path: '/addWlInfo'}
      ],
      goodsList: {
        time: new Date(),
        name: '谁谁谁',
        id: '111111',
        phone: '13265656565',
        size: '安泰-636 防霉密封胶 300ml*24支/箱',
        color: '白色',
        unit: '箱',
        num: 5,
        company: '',
        courier_num: '',
        state: '交易成功',
        address: '广州市黄埔区南翔南翔南翔南翔一路62号',
        goods: [
          {
            name: '安泰-636 防霉密封胶 300ml*24支/箱',
            color: '白色',
            unit: '箱',
            num: 5,
            size: '300ml'
          },
          {
            name: '安泰-636 防霉密封胶 300ml*24支/箱',
            color: '白色',
            unit: '箱',
            num: 5,
            size: '300ml'
          }
        ]
      },
      courierCompanyAdd: '',
      courierNumAdd: '',
      courierCompanyEdit: '顺丰速运',
      courierNumEdit: '02154681256845'
    }
  },
  components: {
    breadcrumb
  },
  methods: {
    back () {
      this.$router.push({path: '/WlList'})
    }
  },
  filters: {
    // 获取订单下单年月日
    filterYear (time) {
      let Y = time.getFullYear()
      let M = time.getMonth() + 1
      let D = time.getDate()
      M = M > 9 ? M : '0' + M
      D = D > 9 ? D : '0' + D
      return Y + '-' + M + '-' + D
    },
    // 获取支付时分秒
    filterTimes (time) {
      let H = time.getHours()
      let M = time.getMinutes()
      let S = time.getSeconds()
      M = M > 9 ? M : '0' + M
      S = S > 9 ? S : '0' + S
      return H + ':' + M + ':' + S
    }
  }
}
</script>
