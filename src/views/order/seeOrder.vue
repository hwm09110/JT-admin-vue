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
    // height: 740px;
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
        // 订单信息
        .manage-item-ddInfo{
          padding-bottom: 15px;
          border-bottom: 1px solid #dcdcdc;
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
            // height: 145px;
            padding: 10px 30px;
            box-sizing: border-box;
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
            .inviteCodeInfo{
              font-size: 14px;
              color: #5f6468;
              .inviteCode,
              .saleName{
                height: 34px;
                line-height: 34px;
                margin-bottom: 20px;
              }
            }
          }
        }
        // 商品信息
        .manage-item-goods{
          width: 100%;
          // padding-left: 30px;
          padding-top: 20px;
          box-sizing: border-box;
          color: #5f6468;
          font-size: 14px;
          padding-bottom: 20px;
          border-bottom: 1px solid #dcdcdc;
          .goods-item-title{
            box-sizing: border-box;
            height: 50px;
            line-height: 50px;
            padding-left: 30px;
            width: 100%;
            background-color: #f9f9f9;
            font-size: 14px;
            margin-bottom: 20px;
            .title{
              margin-right: 50px;
              font-weight: 600;
            }
          }
          .goods-item{
            box-sizing: border-box;
            padding: 20px;
            border: 1px solid #dcdcdc;
            border-top: 0;
            .item-info{
              box-sizing: border-box;
              width: 50%;
              float: left;
              // margin-bottom: 10px;
              border-right: 1px solid #dcdcdc;
              .info-img{
                float: left;
                width: 100px;
                height: 100px;
                // background-color: #ccc;
              }
              .info-base{
                margin-left: 20px;
                float: left;
                .name{
                  margin-top: 20px;
                  margin-bottom: 20px;
                }
              }
            }
            .item-price{
              width: 50%;
              float: left;
              padding-left: 20px;
              box-sizing: border-box;
              .price,
              .buyNum,
              .allprice{
                margin-bottom: 15px;
              }
              .price{
                margin-top: 5px;
              }
            }
          }
          .bt {
            border-top: 1px solid #dcdcdc;
          }
        }
        // 发票信息
        .manage-item-invoice{
          width: 100%;
          // padding-left: 30px;
          padding-top: 20px;
          box-sizing: border-box;
          color: #5f6468;
          font-size: 14px;
          .invoice-item-title{
            box-sizing: border-box;
            height: 50px;
            line-height: 50px;
            padding-left: 30px;
            width: 100%;
            background-color: #f9f9f9;
            font-size: 14px;
            margin-bottom: 20px;
            .title{
              margin-right: 50px;
              font-weight: 600;
            }
          }
          .invoice-item-company{
            padding-left: 30px;
            div{
              margin-bottom: 20px;
            }
          }
        }
      }
    }
  }
  .back{
    width: 120px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    cursor: pointer;
    color: #1f7fb1;
    border: 1px solid #1f7fb1;
    border-radius: 5px;
    font-size: 14px;
    margin-left: 30px;
    margin-top: 50px;
  }
}
</style>

<template>
  <div class="manage">
    <breadcrumb :breadcrumbList='breadcrumbList'></breadcrumb>
    <div class="manage-box">
      <div class="manage-box-title">订单管理</div>
      <div class="manage-box-content">
        <div class="manage-item">
          <div class="manage-item-ddInfo">
            <div class="manage-item-ddInfo-title">
              <span class="title">订单信息</span>
              <span class="state" v-if="goodsList.wl_status == 1 && goodsList.pay_status == 1">状态：未发货</span>
              <span class="state" v-if="goodsList.wl_status == 2 && goodsList.pay_status == 1">状态：已发货</span>
              <span class="state" v-if="goodsList.wl_status == 3 && goodsList.pay_status == 1">状态：已完成</span>
              <span class="state" v-if="goodsList.pay_status == 2">状态：订单未支付</span>
            </div>
            <el-row>
            <div class="manage-item-ddInfo-content clearfix">
              <el-col :span="12">
                <div class="userInfo">
                  <div class="user-time">
                    <span>订单日期：</span>
                    <span style="margin-right:20px;">{{goodsList.create_time | filterYear}}</span>
                    <!-- 已支付显示支付时间 -->
                    <span v-if="goodsList.pay_status == 1">支付时间：{{goodsList.pay_time | filterTimes}}</span>
                    <!-- 未支付显示下单时间 -->
                    <span v-if="goodsList.pay_status == 2">下单时间：{{goodsList.create_time | filterTimes}}</span>
                  </div>
                  <div class="user-sure" v-if="goodsList.wl_status == 1">
                    <span>用户确认订单时间：</span>
                    <span>尚未发货</span>
                  </div>
                  <div class="user-sure" v-if="goodsList.wl_status == 2">
                    <!-- 倒计时十天自动确认 -->
                    <span>用户确认订单时间：</span>
                    <span>未确认</span>
                    <span>(还剩9天23小时50分)</span>
                  </div>
                  <div class="user-sure" v-if="goodsList.wl_status == 3">
                    <!-- 用户自动确认 -->
                    <span>用户确认收货时间：</span>
                    <span>{{goodsList.rec_time | filterRecTimes}}</span>
                  </div>
                  <div class="user-phone">
                    <span>用户手机号：</span>
                    <span>{{goodsList.user_phone}}</span>
                  </div>
                  <div class="user-name">
                    <span>收货人：</span>
                    <span>{{goodsList.rec_name}}</span>
                  </div>
                  <div class="user-phone">
                    <span>收货人手机号：</span>
                    <span>{{goodsList.phone}}</span>
                  </div>
                  <div class="user-addr">
                    <span>收货地址：</span>
                    <span>{{goodsList.addr}}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="inviteCodeInfo">
                  <div class="inviteCode" v-if='goodsList.code'>邀请码：{{goodsList.code}}</div>
                  <div class="saleName" v-if='goodsList.sale_name'>销售员姓名：{{goodsList.sale_name}}</div>
                  <div class="mark" v-if='goodsList.mark'>
                    客户备注：{{goodsList.mark}}
                  </div>
                </div>
              </el-col>
            </div>
            </el-row>
          </div>
          <div class="manage-item-goods clearfix">
            <div class="goods-item-title">
              <span class="title">商品信息</span>
            </div>
            <div :class="{'goods-item':true, 'clearfix':true, 'bt': gindex == 0}" v-for="(gitem, gindex) in goodsList.list" :key="gindex">
              <div class="item-info clearfix">
                <!-- <div class="info-img"></div> -->
                <img :src="$store.state.imgBaseUrl + gitem.goods_image" alt="" class="info-img">
                <div class="info-base">
                  <div class="name">{{gitem.goods_name}}</div>
                  <div class="info">
                    <span>单位：{{gitem.unit}}</span>
                    <span>颜色：{{gitem.color}}</span>
                    <span>型号：{{gitem.type}}</span>
                  </div>
                </div>
              </div>
              <div class="item-price clearfix">
                <div class="price">单价 (箱)：￥{{gitem.goods_price}}</div>
                <div class="buyNum">数量：{{gitem.goods_num}}</div>
                <div class="allprice">总价：￥{{gitem.goods_price*gitem.goods_num}}</div>
              </div>
            </div>
          </div>
          <div class="manage-item-invoice">
            <div class="invoice-item-title">
              <span class="title">发票信息</span>
            </div>
            <!-- 普通发票 -->
            <div class="invoice-item-company" v-if="goodsList.invoice_type == 1">
              <div class="invoiceType">发票类型：普通发票</div>
              <div class="invoiceHeader" v-if='goodsList.invoice_title_type == 1'>发票抬头：公司</div>
              <div class="invoiceHeader" v-if='goodsList.invoice_title_type == 2'>发票抬头：个人</div>
              <div class="invoiceCompany">抬头名称：{{goodsList.invoice_title}}</div>
              <div class="invoiceNum" v-if='goodsList.invoice_title_type == 1'>税号：{{goodsList.invoice_num}}</div>
            </div>
            <!-- 电子发票 -->
            <div class="invoice-item-company" v-if="goodsList.invoice_type == 2">
              <div class="invoiceType">发票类型：电子发票</div>
              <div class="invoiceHeader" v-if='goodsList.invoice_title_type == 1'>发票抬头：公司</div>
              <div class="invoiceHeader" v-if='goodsList.invoice_title_type == 2'>发票抬头：个人</div>
              <div class="invoiceCompany">抬头名称：{{goodsList.invoice_title}}</div>
              <div class="invoiceNum" v-if='goodsList.invoice_type == 2'>邮箱：{{goodsList.email}}</div>
            </div>
            <div class="invoice-item-company" v-if="!goodsList.invoice_type">
              客户不开发票
            </div>
          </div>
        </div>
        <div class="back" @click="back">返回</div>
      </div>
    </div>
  </div>
</template>

<script>
import breadcrumb from '../../components/breadcrumb'
import api from '../../api/index'

export default {
  created () {
    // 获取url传参的订单id
    let temp = location.href
    temp = temp.split('?')[1].split('=')
    this.order_id = temp[1]
    // 获取订单详情
    this.getOrderInfo(this.order_id)
  },
  data () {
    return {
      tr: '',
      // imgBaseUrl: 'http://192.168.8.90',
      imgBaseUrl: 'https://oa.jointas.com',
      order_id: '',
      // 面包屑数据
      time: '',
      breadcrumbList: [
        // {name: '首页', path: '/home'},
        {name: '订单管理', path: '/wlList'},
        {name: '查看订单', path: '/addWlInfo'}
      ],
      goodsList: {
        create_time: new Date(),
        pay_time: new Date(),
        rec_time: new Date(),
        rec_name: '谁谁谁',
        order_id: '111111',
        user_phone: '13278787875',
        phone: '13265656565',
        addr: '广州市黄埔区南翔南翔南翔南翔一路62号',
        // 物流状态（1未发货，2发货中，3已完成）
        wl_status: '1',
        // 支付状态 （2未支付，1已支付）
        pay_status: '2',
        sale_name: '销售员1',
        code: 'AAJT0002',
        invoice_num: '0909090909090990099',
        // 发票类型（1普通，2电子）
        invoice_type: '1',
        email: '123456@123.com',
        // 抬头类型（1公司，2个人）
        invoice_title_type: '1',
        invoice_title: '集泰化工公司',
        // size: '安泰-636 防霉密封胶 300ml*24支/箱',
        list: [
          {
            goods_name: '安泰-622 防霉密封胶 300ml*24支/箱',
            color: '白色',
            unit: '箱',
            goods_num: 3,
            type: '300ml',
            goods_price: 602,
            goods_image: ''
          },
          {
            goods_name: '安泰-636 防霉密封胶 300ml*24支/箱',
            color: '白色',
            unit: '箱',
            goods_num: 5,
            size: '300ml',
            goods_price: 602,
            goods_image: ''
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
    // 返回上一级
    back () {
      this.$router.go(-1)
    },
    // 获取对应的订单信息
    getOrderInfo (id) {
      api.getOrderDetail({
        id: id
      }).then(res => {
        console.log(res, '订单详情')
        if (res.code === '200') {
          this.goodsList = res.extraData.info[0]
        }
      })
    }
  },
  filters: {
    // 获取订单下单年月日
    filterYear (time) {
      let date = new Date(time * 1000)
      let Y = date.getFullYear()
      let M = date.getMonth() + 1
      let D = date.getDate()
      M = M > 9 ? M : '0' + M
      D = D > 9 ? D : '0' + D
      return Y + '-' + M + '-' + D
    },
    // 获取支付时分秒
    filterTimes (time) {
      let date = new Date(time * 1000)
      let H = date.getHours()
      let M = date.getMinutes()
      let S = date.getSeconds()
      M = M > 9 ? M : '0' + M
      S = S > 9 ? S : '0' + S
      return H + ':' + M + ':' + S
    },
    filterRecTimes (time) {
      let date = new Date(time * 1000)
      let Y = date.getFullYear()
      let M = date.getMonth() + 1
      let D = date.getDate()
      let H = date.getHours()
      let Min = date.getMinutes()
      let S = date.getSeconds()
      M = M > 9 ? M : '0' + M
      D = D > 9 ? D : '0' + D
      Min = Min > 9 ? Min : '0' + Min
      S = S > 9 ? S : '0' + S
      return Y + '-' + M + '-' + D + '   ' + H + ':' + Min + ':' + S
    }
  }
}
</script>
