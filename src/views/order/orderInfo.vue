<style lang="scss" scoped>
.manage{
  padding: 20px;
  padding-top: 55px;
  background-color: #f1f4f7;
  // height: 100%;
  box-sizing: border-box;
  position: relative;
  // 顶部表单
  .manage-box-form{
    border: 1px solid #dcdcdc;
    margin: 20px;
    width: 980px;
    padding: 16px 18px;
    box-sizing: border-box;
    .query{
      margin: 0;
      margin-top: 30px;
    }
    .people{
      margin-right: 30px;
    }
    .goodName{
      width: 300px;
      margin-right: 100px;
    }
    .state{
      margin-right: 40px;
    }
    .time{
      margin-bottom: 20px;
      margin-right: 20px;
      .title{
        margin-right: 13px;
        color: #5f6468;
      }
      .divide{
        margin: 0 15px;
        color: #ccc;
      }
    }
    .code{
      margin-right: 40px;
    }
    .saleName{
      // margin-top: 30px;
      margin-right: 30px;
    }
  }

  // 全选
  .manage-box-all{
    margin-left: 50px;
    padding-left: 20px;
    cursor: pointer;
    position: relative;
    .checkbox-all{
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      display: inline-block;
      width: 15px;
      height: 15px;
      background-color: #fff;
      -webkit-appearance:none;
      border: 1px solid #5f6468;
      border-radius: 2px;
      outline: none;
      cursor: pointer;
    }
    .test {
      background: url('../../images/check.png') no-repeat -1px -1px;
      border:1px solid #fff;
    }
    .checkbox-all:checked{
      background: url('../../images/check.png') no-repeat -1px -1px;
      border:0;
    }
    .del{
      box-sizing: border-box;
      display: inline-block;
      width: 120px;
      height: 35px;
      line-height: 35px;
      text-align: center;
      background-color: #fff;
      color: #1f7fb1;
      border:1px solid #1f7fb1;
      margin-left: 20px;
      font-size: 14px;
      border-radius: 5px;
    }
    span{
      margin-left: 5px;
      line-height: 35px;
      font-size: 14px;
      color: #333;
      font-weight: 600;
    }
  }

  .manage-box{
    // height: 740px;
    border-radius: 5px;
    // height: 100%;
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
      overflow-x:auto;
      padding: 20px;
      .manage-item{
        width:1558px;
        .manage-item-baseInfo{
          padding-left: 20px;
          height: 50px;
          background: #f9f9f9;
          padding-top: 20px;
          box-sizing: border-box;
          font-size: 14px;
          color: #333;
          font-weight: 600;
          .item-checkbox{
            margin: 0;
            margin-left: 20px;
            margin-right: 20px;
            float: left;
            width: 15px;
            height: 15px;
            background-color: #fff;
            -webkit-appearance:none;
            border: 1px solid #5f6468;
            border-radius: 2px;
            outline: none;
            cursor: pointer;
          }
          .item-checkbox:checked{
            background: url('../../images/check.png') no-repeat -1px -1px;
            border:0;
          }
          .order-code{
            float: left;
            margin-right: 50px;
          }
          .time{
            margin-right: 50px;
            float: left;
            .year{
              margin-right: 30px;
            }
          }
          .consignee{
            float: left;
            margin-right: 50px;
          }
          .phone{
            float: left;
            margin-right: 50px;
          }
          .inviteCode{
            float: left;
            margin-right: 50px;
          }
          .saleName{
            float: left;
          }
        }
        .manage-item-descInfo{
          // height: 60px;
          display: flex;
          // padding: 15px 0;
          color: #5f6468;
          font-size: 14px;
          margin-bottom: 15px;
          .order{
            float: left;
            margin-top: 15px;
            // border-left: 1px solid #dcdcdc;
            // .goodInfo{
            //   border-bottom: 1px solid #dcdcdc;
            // }
            .size{
              // padding-top: 15px;
              // width: 66%;
              width: 195px;
              padding-left: 30px;
              padding-right: 20px;
              // height: 87px;
              float: left;
              &-color,
              &-unit,
              &-size{
                margin-bottom: 10px;
              }
            }
            .more{
              padding-top: 15px;
              border-top: 1px solid #dcdcdc;
            }
            .num{
              // width: 34%;
              border-left: 1px solid #dcdcdc;
              // padding-top: 15px;
              width: 150px;
              float: left;
              // border-left: 1px solid #dcdcdc;
              height: 72px;
              // line-height: 80px;
              padding-left: 20px;
              padding-right: 20px;
              .price,
              .buyNum{
                margin-bottom: 10px;
              }
            }
          }
          .address{
            margin-top: 15px;
            box-sizing: border-box;
            position: relative;
            // width: 20.6%;
            width: 240px;
            float: left;
            border-left: 1px solid #dcdcdc;
            height: inherit;
            // line-height: 30px;
            padding: 0 20px;
          }
          .invoice{
            margin-top: 15px;
            position: relative;
            // width: 24.7%;
            float: left;
            width: 250px;
            padding-left: 30px;
            height: inherit;
            border-left: 1px solid #dcdcdc;
            border-right: 1px solid #dcdcdc;
            &-company,
            &-type,
            &-num{
              margin-bottom: 10px;
            }
            span{
              margin-right: 30px;
            }
          }
          .courier{
            margin-top: 15px;
            position: relative;
            // width: 24.7%;
            float: left;
            width: 210px;
            padding-left: 30px;
            height: inherit;
            border-right: 1px solid #dcdcdc;
            &-company{
              margin-bottom: 25px;
            }
            span{
              margin-right: 30px;
            }
          }
          .statePay{
            margin-top: 15px;
            position: relative;
            text-align: center;
            // width: 14.6%;
            width: 105px;
            // padding-left: 30px;
            height: inherit;
            // line-height: 60px;
            float: left;
          }
          .handlePay{
            margin-top: 15px;
            text-align: center;
            position: relative;
            // width: 14.6%;
            width: 130px;
            // padding-left: 30px;
            height: inherit;
            border-left: 1px solid #dcdcdc;
            border-right: 1px solid #dcdcdc;
            float: left;
            cursor:pointer;
            &-see{
              margin-bottom: 25px;
            }
            &-do{
              color: #1f7fb1;
            }
          }
          .buyer-message{
            margin-top: 15px;
            position: relative;
            text-align: center;
            width: 90px;
            height: inherit;
            float: left;
            .content{
              line-height:20px;
            }
          }
          .middle-text{
            box-sizing: border-box;
            padding-left: 20px;
            width: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
          }
        }
      }
      .manage-bottom{
        height: 30px;
        border-top: 1px solid #dcdcdc;
      }
    }

    // 分页
    .code-box-pagination{
      width: 100%;
      height: 100px;
      .item{
        float: right;
        margin-top: 18px;
        margin-right: 20px;
        .handle{
          cursor: pointer;
          float: left;
          width: 25px;
          height: 25px;
          line-height: 25px;
          font-size: 14px;
          color: #fff;
          text-align: center;
          background: #1f7fb1;
          margin-right: 15px;
          border-radius: 50%;
        }
        .item-frist{
          background: #1f7fb1 url(../../images/frist.png) no-repeat center center;
        }
        .item-last{
          background: #1f7fb1 url(../../images/last.png) no-repeat center center;
        }
        .item-noneF{
          background: #c2c8cc url(../../images/frist.png) no-repeat center center;
        }
        .item-noneL{
          background: #c2c8cc url(../../images/last.png) no-repeat center center;
        }
        .item-none{
          background-color: #c2c8cc;
        }
        .page{
          float: left;
          margin-top: 5px;
          margin-right: 30px;
          margin-left: 15px;
          color: #5f6468;
        }
      }
    }
  }

  // 添加物流信息、修改物流信息对话框
  .edit-dialog,
  .add-dialog{
    .ipt{
      width: 255px;
    }
    .handle{
      .sureBtn,
      .delBtn{
        cursor: pointer;
        width: 160px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        background-color: #1f7fb1;
        color: #fff;
        border-radius: 5px;
        float: left;
      }
      .delBtn{
        margin-left: 30px;
        background-color: #ccc;
      }
    }
  }
  // 空搜索提示
  .emptyTip{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #5f6468;
    font-size: 16px;
  }
}
</style>

<template>
<div class="manage">
  <!-- 面包屑 -->
  <breadcrumb :breadcrumbList='breadcrumbList'></breadcrumb>

  <div class="manage-box">
    <div class="manage-box-title">订单管理</div>

    <!-- 顶部表单 -->
    <div class="manage-box-form">
      <el-form :inline="true" :model="searchform" class="demo-form-inline">
        <el-form-item label="" class="goodName">
          <el-input v-model="searchform.goods_name" placeholder="请输入商品名进行搜索"></el-input>
        </el-form-item>
        <!-- <el-form-item class="query">
          <el-button type="primary">搜索</el-button>
        </el-form-item> -->
        <el-form-item class="time">
          <span class="title">订单日期</span>
          <el-date-picker
            value-format="timestamp"
            v-model="searchform.begin_time"
            type="date"
            placeholder="请选择时间范围起始">
          </el-date-picker>
          <span class="divide">~</span>
          <el-date-picker
            value-format="timestamp"
            v-model="searchform.end_time"
            type="date"
            placeholder="请选择时间范围结束">
          </el-date-picker>
        </el-form-item>
        <el-form-item class="people" label="收货人">
          <el-input v-model="searchform.receive_name" placeholder="请输入收货人姓名"></el-input>
        </el-form-item>
        <el-form-item class="state" label="交易状态">
          <el-select v-model="searchform.wl_status" placeholder="请选择" @change="wlStatuSearch">
            <el-option
              v-for="item in searchOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="code" label="邀请码">
          <el-input v-model="searchform.invite_code" placeholder="请输入邀请码"></el-input>
        </el-form-item>
        <el-form-item class="saleName" label="销售员姓名">
          <el-input v-model="searchform.sale_name" placeholder="请输入销售员姓名"></el-input>
        </el-form-item>
        <el-form-item class="query">
          <el-button type="primary" @click="searchOrder">搜索</el-button>
          <el-button type="primary" @click="exportOrder">导出</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 全选按钮 -->
    <!-- <div class="manage-box-all">
      <div class="checkbox-all" v-if='!checkAll' @click="delCheckAll(true)"></div>
      <div class="checkbox-all test" v-if='checkAll' @click="delCheckAll(false)"></div>
      <span>全选</span>
      <div class="del" @click='delSelectOrder'>删除</div>
    </div> -->

    <!-- 中间表单 -->
    <div class="manage-box-content" v-loading="loading">
      <div v-if="orderList.length == 0" class="emptyTip">暂无符合搜索条件的订单</div>
      <div class="manage-item" v-for="(item, index) in orderList" :key='index' v-if="orderList.length != 0">
        <div class="manage-item-baseInfo">
          <!-- <input type="checkbox" class="item-checkbox" :checked="item.isCheck" @change="checkThis(index, item.id)"> -->
          <div class="order-code">订单号：{{item.order_code}}</div>
          <div class="time">
            <span class="year">订单日期：{{item.create_time | filterYear}}</span>
            <!-- 已支付显示支付时间 -->
            <span v-if="item.pay_status == 1">支付时间：{{item.pay_time | filterTimes}}</span>
            <!-- 未支付显示下单时间 -->
            <span v-if="item.pay_status == 2">下单时间：{{item.create_time | filterTimes}}</span>
          </div>
          <div class="consignee">收货人：{{item.rec_name}}</div>
          <div class="phone">手机号：{{item.phone}}</div>
          <div class="inviteCode" v-if="item.code">邀请码：{{item.code}}</div>
          <div class="saleName" v-if="item.sale_name">销售员姓名：{{item.sale_name}}</div>
        </div>
        <div class="manage-item-descInfo clearfix">

          <div class="order">
            <div class="goodInfo clearfix" v-for="(gitem, gindex) in item.list" :key='gindex'>
              <div :class="{size:true,more:gindex != 0}">
                <div class="size-unit">{{gitem.goods_name}}</div>
                <div class="size-color">
                  <span style="margin-right:20px;">单位：{{gitem.unit}} </span>
                  <span>颜色：{{gitem.check_color}}</span>
                </div>
                <div class="size-size">型号：{{gitem.type}}</div>
              </div>
              <div :class="{num:true,more:gindex != 0}">
                <div class="price">单价 ( 箱 )：{{gitem.goods_price}}</div>
                <div class="buyNum">数量：{{gitem.goods_num}}</div>
                <div class="Allprice"> 总价： {{gitem.goods_price*gitem.goods_num}}</div>
              </div>
            </div>
          </div>
          <div class="address">
            <!-- <div class="middle-text"> -->
              <div style="line-height:20px;">收货地址：{{item.addr}}</div>
              <!-- <div>{{item.address}}</div> -->
            <!-- </div> -->
          </div>
          <!-- 发票 -->
          <div class="invoice">
            <!-- 普通发票 -->
            <div v-if="item.invoice_type == 1">
              <div class="invoice-type">
                <span>发票类型：普通发票</span>
              </div>
              <div class="invoice-company">
                <span>发票抬头：{{item.invoice_title}}</span>
              </div>
              <div class="invoice-num" v-if="item.invoice_title_type == 1">
                <span>税号：{{item.invoice_num}}</span>
              </div>
            </div>
            <!-- 电子发票 -->
            <div v-if="item.invoice_type == 2">
              <div class="invoice-type">
                <span>发票类型：电子发票</span>
              </div>
              <div class="invoice-company">
                <span>发票抬头：{{item.invoice_title}}</span>
              </div>
              <div class="invoice-num" v-if="item.invoice_title_type == 1">
                <span>税号：{{item.invoice_num}}</span>
              </div>
              <div class="invoice-email">
                <span>邮箱：{{item.email}}</span>
              </div>
            </div>
            <!-- 不开发票 -->
            <div v-if="item.invoice_type != 2 && item.invoice_type != 1">
              不开发票
            </div>
          </div>
          <!-- 快递信息-已支付才显示-->
          <div class="courier" v-if="item.pay_status == 1">
            <!-- 未发货 -->
            <div v-if="item.wl_status == 1">
              <div class="courier-company">
                <span>快递公司：未发货</span>
              </div>
              <div class="courier-num">
                <span>快递单号：未发货</span>
              </div>
            </div>
            <!-- 已发货 -->
            <div v-if="item.wl_status == 2">
              <div class="courier-company">
                <span>快递公司：{{item.express_name}}</span>
              </div>
              <div class="courier-num">
                <span>快递单号：{{item.express_code}}</span>
              </div>
            </div>
            <div v-if="item.wl_status == 3">
              <div class="courier-company">
                <span>快递公司：{{item.express_name}}</span>
              </div>
              <div class="courier-num">
                <span>快递单号：{{item.express_code}}</span>
              </div>
            </div>
          </div>
          <!-- 物流状态-已支付显示状态-->
          <div class="statePay" v-if="item.pay_status == 1">
            <span v-if="item.wl_status == 1">
              未发货
            </span>
            <span v-if="item.wl_status == 2">
              已发货
            </span>
            <span v-if="item.wl_status == 3">
              交易成功
            </span>
          </div>
          <!-- 未支付订单显示未支付 -->
          <div class="statePay" v-if="item.pay_status == 2">
            <span v-if="item.order_status == 1">订单尚未支付</span>
            <span v-if="item.order_status == 2">订单已删除</span>
            <span v-if="item.order_status == 3">订单已撤销</span>
          </div>
          <!-- 操作 -->
          <div class="handlePay">
            <div class="handlePay-see" @click="seeOrderInfo(item.order_id)">查看订单</div>
            <div class="handlePay-do" v-if="item.wl_status == 1 && item.pay_status == 1" @click="showDialog('add', item)">添加物流信息</div>
            <div class="handlePay-do" v-if="item.wl_status == 2 && item.pay_status == 1" @click="showDialog('edit', item)">修改物流信息</div>
          </div>
          <!-- 买家留言 -->
          <div class="buyer-message">
            买家留言：<span class="content">{{item.mark?item.mark:'--'}}</span>
          </div>
        </div>
      </div>
      <div class="manage-bottom"></div>
    </div>

    <!-- 分页 -->
    <div class="code-box-pagination">
      <div class="item">
        <div :class="{'item-frist': true, 'handle': true, 'item-noneF': currentPage == 1}" @click="jumpToPage(1)"></div>
        <div :class="{'item-prev': true, 'handle': true, 'item-none': currentPage == 1}" @click="nextOrPrevPage(-1)">&lt;</div>
        <div class="item-page page">{{currentPage}}/{{totalPage}}</div>
        <div :class="{'item-next': true, 'handle': true, 'item-none': currentPage == totalPage}" @click="nextOrPrevPage(1)">&gt;</div>
        <div :class="{'item-last': true, 'handle': true, 'item-noneL': currentPage == totalPage}" @click="jumpToPage(totalPage)"></div>
      </div>
    </div>

    <!-- 添加物流信息对话框 -->
    <div class="add-dialog">
      <el-dialog title="添加物流信息" :visible.sync="addDialog" class="add-dialog">
        <el-form :model="addform">
          <el-form-item label="快递公司" prop="courierCompany" class="courierCompany">
            <el-input v-model="addform.express_name" class="ipt"></el-input>
          </el-form-item>
          <el-form-item label="快递单号" prop="courierNum" class="courierNum">
            <el-input v-model="addform.express_code" class="ipt"></el-input>
          </el-form-item>
          <el-form-item class="handle">
            <div class="sureBtn" @click="addNewWl">提交</div>
            <div class="delBtn" @click="cancelHand('add')">返回</div>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>

    <!-- 修改物流信息对话框 -->
    <div class="edit-dialog">
      <el-dialog title="修改物流信息" :visible.sync="editDialog" class="edit-dialog">
        <el-form :model="editform">
          <el-form-item label="快递公司" prop="courierCompany" class="courierCompany">
            <el-input v-model="editform.express_name" class="ipt"></el-input>
          </el-form-item>
          <el-form-item label="快递单号" prop="courierNum" class="courierNum">
            <el-input v-model="editform.express_code" class="ipt"></el-input>
          </el-form-item>
          <el-form-item class="handle">
            <div class="sureBtn" @click="editOldWl">提交</div>
            <div class="delBtn" @click="cancelHand('edit')">返回</div>
          </el-form-item>
        </el-form>
      </el-dialog>

    </div>
  </div>
</div>
</template>

<script>
import breadcrumb from '../../components/breadcrumb'
import api from '../../api/index'
export default {
  created () {
    this.getAllOrder()
  },
  mounted () {
    // 获取最高的元素高度
    // let chlid = []
    // for (let i = 0; i < this.getClass('.order').length; i++) {
    //   chlid.push(this.getClass('.order')[i].offsetHeight)
    // }
    // // console.log(chlid, 'h')
    // let address = this.getClass('.address')
    // let invoice = this.getClass('.invoice')
    // let statePay = this.getClass('.statePay')
    // let handlePay = this.getClass('.handlePay')
    // for (let i = 0; i < this.getClass('.order').length; i++) {
    //   address[i].style.height = chlid[i] + 'px'
    //   invoice[i].style.height = chlid[i] + 'px'
    //   statePay[i].style.height = chlid[i] + 'px'
    //   handlePay[i].style.height = chlid[i] + 'px'
    // }
  },
  data () {
    return {
      loading:false,
      // 订单列表
      orderList: [
        {
          order_id: '1',
          order_code: '0145145185451',
          // 支付状态 （2未支付，1已支付）
          pay_status: '1',
          // 物流状态（1未发货，2发货中，3已完成）
          wl_status: '1',
          total_price: '990',
          create_time: new Date(),
          pay_time: new Date(),
          rec_name: '小明',
          sale_name: '销售员12',
          code: 'AAJT0006',
          phone: '13265656565',
          addr: '广州市黄埔区南翔南翔南翔一路62号',
          express_name: '韵达',
          express_code: '01234567',
          invoice_num: '09095858585858',
          invoice_title: '集泰化工公司',
          // 抬头类型（1公司，2个人）
          invoice_title_type: '1',
          // 发票类型（1普通，2电子）
          invoice_type: '3',
          email: '123456@789.com',
          isCheck: false,
          mark: '麻烦请尽快发货！！！',
          list: [
            {
              check_color:'',
              color: '白',
              goods_name: '商品1111',
              goods_num: '5',
              goods_price: '500',
              type: '300ml*24支/箱',
              unit: '箱'
            },
            {
              check_color: '',
              color: '黑',
              goods_name: '商品5511',
              goods_num: 2,
              goods_price: 600,
              type: '300ml*24支/箱',
              unit: '箱'
            }
          ]
          // --------------------
        }
      ],
      selectArr: [],
      // 面包屑数据
      breadcrumbList: [
        // {name: '首页', path: '/home'},
        {name: '订单管理', path: '/wlList'},
        {name: '订单信息', path: '/wlList'}
      ],
      // 顶部搜索框
      searchform: {
        goods_name: '',
        receive_name: '',
        wl_status: '',
        time: '',
        begin_time: '',
        end_time: '',
        sale_name: '',
        invite_code: ''
      },
      searchOptions: [
        {value: '', label: '全部'},
        {value: 3, label: '交易成功'},
        {value: 2, label: '已发货'},
        {value: 1, label: '未发货'}
      ],
      // 显示添加物流信息对话框
      addDialog: false,
      // 添加物流信息表单数据
      addform: {
        express_name: '',
        express_code: ''
      },
      addId: '',
      // 显示修改物流信息对话框
      editDialog: false,
      // 添加物流信息表单数据
      editform: {
        express_name: '',
        express_code: ''
      },
      editId: '',
      // checkAll: false
      checkBtnNum: 0,
      checkArr: [],
      currentPage: 1,
      totalPage: 1
    }
  },
  components: {
    breadcrumb
  },
  methods: {
    // 查看订单操作
    seeOrderInfo (id) {
      this.$router.push({path: `/order/seeOrder?order_id=${id}`})
      // console.log(id, 'order_id')
      // localStorage.setItem(id, 'orderId')
    },
    // 显示对话框操作
    showDialog (dialog, item) {
      if (dialog === 'add') {
        this.addDialog = true
        this.addId = item.order_id
      } else if (dialog === 'edit') {
        this.editDialog = true
        this.editId = item.order_id
        this.editform.express_name = item.express_name
        this.editform.express_code = item.express_code
      }
    },
    // 取消对话框操作
    cancelHand (item) {
      if (item === 'add') {
        this.addDialog = false
      } else if (item === 'edit') {
        this.editDialog = false
      }
    },
    // 选择该行订单
    checkThis (index, id) {
      let arr = []
      this.selectArr = []
      this.$set(this.orderList[index], 'isCheck', !this.orderList[index].isCheck)
      // if (this.orderList[index].isCheck) {
      // }
      this.orderList.forEach(item => {
        if (item.isCheck) {
          arr.push(item.order_id)
          this.selectArr = [...new Set(arr)]
        }
      })
      console.log(this.selectArr, 'select')
    },
    // 取消全选
    delCheckAll (item) {
      let arr = []
      this.selectArr = []
      for (let i = 0; i < this.orderList.length; i++) {
        this.$set(this.orderList[i], 'isCheck', item)
      }
      this.orderList.forEach(item => {
        if (item.isCheck) {
          arr.push(item.order_id)
          this.selectArr = [...new Set(arr)]
        }
      })
      console.log(this.selectArr, 'select')
    },
    // 删除所选订单
    delSelectOrder () {
      // 处理数据
      let delArr = {}
      this.selectArr.forEach((item, index) => {
        let key = 'idArr' + item
        delArr[key] = +item
      })
      console.log(delArr, 'delArr')
      api.delOrder({
        idArr: delArr
      }).then(res => {
        console.log(res, '删除订单')
        if (res.code === '200') {
          this.getAllOrder(this.searchform.goods_name, this.searchform.begin_time, this.searchform.end_time, this.searchform.receive_name, this.searchform.wl_status, this.searchform.invite_code, this.searchform.sale_name, this.currentPage)
        }
        this.$message(res.message)
      })
    },
    // 控制页码到首页或尾页
    jumpToPage (page) {
      this.currentPage = page
      this.getAllOrder(this.searchform.goods_name, this.searchform.begin_time, this.searchform.end_time, this.searchform.receive_name, this.searchform.wl_status, this.searchform.invite_code, this.searchform.sale_name, this.currentPage)
    },
    // 控制页码到上一页或下一页
    nextOrPrevPage (page) {
      this.currentPage += page
      if (this.currentPage <= 1) {
        this.currentPage = 1
      }
      if (this.currentPage > this.totalPage && this.totalPage !== 0) {
        this.currentPage = this.totalPage
      }
      if (this.currentPage >= 1 && this.currentPage <= this.totalPage) {
        // 发请求
        this.getAllOrder(this.searchform.goods_name, this.searchform.begin_time, this.searchform.end_time, this.searchform.receive_name, this.searchform.wl_status, this.searchform.invite_code, this.searchform.sale_name, this.currentPage)
      }
    },
    // 进行条件搜索
    searchOrder () {
      this.currentPage = 1
      this.getAllOrder(this.searchform.goods_name, this.searchform.begin_time, this.searchform.end_time, this.searchform.receive_name, this.searchform.wl_status, this.searchform.invite_code, this.searchform.sale_name, this.currentPage)
    },
    // 物流状态筛选
    wlStatuSearch () {
      this.currentPage = 1
      this.getAllOrder(this.searchform.goods_name, this.searchform.begin_time, this.searchform.end_time, this.searchform.receive_name, this.searchform.wl_status, this.searchform.invite_code, this.searchform.sale_name, this.currentPage)
    },
    // 添加物流信息
    addNewWl () {
      this.addDialog = false
      // 添加物流信息
      api.addExpress({
        order_id: this.addId,
        express_name: this.addform.express_name,
        express_code: this.addform.express_code
      }).then(res => {
        console.log(res, '添加物流')
        this.$message(res.message)
        if (res.code === '200') {
          this.getAllOrder(this.searchform.goods_name, this.searchform.begin_time, this.searchform.end_time, this.searchform.receive_name, this.searchform.wl_status, this.searchform.invite_code, this.searchform.sale_name, this.currentPage)
        }
      })
    },
    // 修改物流信息
    editOldWl () {
      this.editDialog = false
      // 编辑物流信息
      api.editExpress({
        order_id: this.editId,
        express_name: this.editform.express_name,
        express_code: this.editform.express_code
      }).then(res => {
        console.log(res, '编辑物流')
        this.$message(res.message)
        if (res.code === '200') {
          this.getAllOrder(this.searchform.goods_name, this.searchform.begin_time, this.searchform.end_time, this.searchform.receive_name, this.searchform.wl_status, this.searchform.invite_code, this.searchform.sale_name, this.currentPage)
        }
      })
    },
    // 获取订单列表
    getAllOrder (goodsName, beginTime, endTime, receiveName, wlStatus, inviteCode, saleName, page = 1) {
      this.loading = true
      api.getOrderList({
        goods_name: goodsName,
        begin_time: beginTime / 1000,
        end_time: endTime / 1000,
        receive_name: receiveName,
        wl_status: wlStatus,
        invite_code: inviteCode,
        sale_name: saleName,
        page: page
      }).then(res => {
        this.loading = false
        console.log(res, '获取订单列表')
        if (res.code === '200') {
          this.orderList = res.extraData.info
          // 计算总页数
          if (Math.ceil(res.extraData.count / res.extraData.len) !== 0) {
            this.totalPage = Math.ceil(res.extraData.count / res.extraData.len)
          } else {
            this.totalPage = 1
          }
          // 处理数字
          for (let i = 0; i < this.orderList.length; i++) {
            this.orderList[i].isCheck = false
            this.orderList[i].create_time = +this.orderList[i].create_time
            this.orderList[i].pay_time = +this.orderList[i].pay_time
          }
        }
      })
    },
    // 获取选择器
    getClass (selector) {
      return document.querySelectorAll(selector)
    },
    //导出订单
    exportOrder () {
      var apiDomain = this.$store.state.apiDomain;
      var apiPath = `/jtds/Admin_Order/export?goods_name=${this.searchform.goods_name}
                  &begin_time=${this.searchform.begin_time}
                  &end_time=${this.searchform.end_time}
                  &receive_name=${this.searchform.receive_name}
                  &wl_status=${this.searchform.wl_status}
                  &invite_code=${this.searchform.invite_code}
                  &sale_name=${this.searchform.sale_name}`;
      var url = apiDomain+apiPath;
      console.log('导出订单',url);
      window.open(url);
    }
  },
  computed: {
    checkAll () {
      let checkBtnNum = 0
      this.orderList.forEach((item) => {
        if (item.isCheck) {
          checkBtnNum++
        }
      })
      return checkBtnNum === this.orderList.length
    }
  },
  filters: {
    fliterState (state) {
      if (!state) {
        return '未发货'
      }
      return state
    },
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
    }
  }
}
</script>
