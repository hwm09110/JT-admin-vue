<style lang="scss" scoped>
.manage{
  padding: 20px;
  padding-top: 55px;
  background-color: #f1f4f7;
  // height: 100%;
  box-sizing: border-box;
  position: relative;
  // 顶部切换订单状态
  .manage-box-tab{
    padding-left: 20px;
    border-bottom: 1px solid #dcdcdc;
    div{
      float: left;
      font-size: 18px;
      color: #5f6468;
      padding: 20px 25px;
    }
    span{
      padding-bottom: 14px;
      cursor: pointer;
      // border-bottom: 3px solid #1f7fb1;
    }
    .activeTab{
      border-bottom: 3px solid #1f7fb1;
      color: #1f7fb1;
    }
  }
  // 顶部表单
  .manage-box-form{
    border: 1px solid #dcdcdc;
    margin: 20px;
    width: 890px;
    padding: 16px 18px;
    box-sizing: border-box;
    .query{
      margin: 0;
    }
    .goodName{
      width: 300px;
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
    .state{
      margin-right: 450px;
      margin-bottom: 30px;
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
      padding: 20px;
      .manage-item{
        .manage-item-baseInfo{
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
          }
        }
        .manage-item-descInfo{
          // height: 60px;
          // display: flex;
          // padding: 15px 0;
          color: #5f6468;
          font-size: 14px;
          margin-bottom: 15px;
          .order{
            float: left;
            margin-top: 15px;
            // border-left: 1px solid #dcdcdc;
            .goodInfo{
              // border-bottom: 1px solid #dcdcdc;
            }
            .size{
              // padding-top: 15px;
              // width: 66%;
              width: 195px;
              padding-left: 30px;
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
              width: 98px;
              float: left;
              // border-left: 1px solid #dcdcdc;
              height: 72px;
              // line-height: 80px;
              padding-left: 20px;
              padding-right: 20px;
            }
          }
          .address{
            margin-top: 15px;
            box-sizing: border-box;
            position: relative;
            // width: 20.6%;
            width: 235px;
            float: left;
            border-left: 1px solid #dcdcdc;
            height: inherit;
            // line-height: 30px;
            padding: 0 20px;
          }
          .courier{
            margin-top: 15px;
            position: relative;
            // width: 24.7%;
            float: left;
            width: 235px;
            padding-left: 30px;
            height: inherit;
            border-left: 1px solid #dcdcdc;
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
            width: 102px;
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
            &-do{
              margin-bottom: 25px;
              color: #1f7fb1;
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
    }
  }

  // 添加物流信息、修改物流信息对话框
  .edit-dialog,
  .add-dialog{
    .ipt{
      width: 255px;
    }
    // .courierCompany{
    //   .ipt{
    //     margin-left: 2px;
    //   }
    // }
    // .courierNum{
    //   .ipt{
    //     margin-left: 30px;
    //   }
    // }
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

  // 删除商品对话框
  .del-dialog{
    .del-title{
      margin-bottom: 70px;
      padding-top: 40px;
    }
    .del-handle{
      .sureBtn,
      .delBtn{
        cursor: pointer;
        display: inline-block;
        height: 35px;
        line-height: 35px;
        width: 160px;
        background-color: #1f7fb1;
        border-radius: 5px;
        color: #fff;
        font-size: 14px;
      }
      .delBtn{
        margin-left: 30px;
        background-color: #ccc;
      }
    }
  }
}
</style>

<template>
<div class="manage">
  <!-- 面包屑 -->
  <breadcrumb :breadcrumbList='breadcrumbList'></breadcrumb>

  <div class="manage-box">
    <div class="manage-box-title">物流管理</div>

    <!-- 切换订单状态 -->
    <!-- <div class="manage-box-tab clearfix">
      <div v-for="(item, index) in activeTab" :key="index">
        <span :class="{activeTab:activeTab[index].active}" @click="selectTab(index)">{{item.name}}</span>
      </div>
    </div> -->

    <!-- 顶部表单 -->
    <div class="manage-box-form">
      <el-form :inline="true" :model="searchform" class="demo-form-inline">
        <el-form-item label="" class="goodName">
          <el-input v-model="searchform.goodName" placeholder="请输入商品名进行搜索"></el-input>
        </el-form-item>
        <!-- <el-form-item class="query">
          <el-button type="primary">搜索</el-button>
        </el-form-item> -->
        <el-form-item class="time">
          <span class="title">订单日期</span>
          <el-date-picker
            v-model="searchform.start"
            type="date"
            placeholder="请选择时间范围起始">
          </el-date-picker>
          <span class="divide">~</span>
          <el-date-picker
            v-model="searchform.end"
            type="date"
            placeholder="请选择时间范围结束">
          </el-date-picker>
        </el-form-item>
        <el-form-item class="people" label="收货人">
          <el-input v-model="searchform.people" placeholder="请输入收货人姓名"></el-input>
        </el-form-item>
        <el-form-item class="state" label="交易状态">
          <el-select v-model="searchform.state" placeholder="请选择">
            <el-option
              v-for="item in searchOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="query">
          <el-button type="primary">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 全选按钮 -->
    <div class="manage-box-all">
      <!-- <el-checkbox class="checkbox" :indeterminate="checkAll" @change="delCheckAll">全选</el-checkbox> -->
      <!-- <input type="checkbox" class="checkbox-all" :checked="checkAll" @change="delCheckAll"> -->
      <div class="checkbox-all" v-if='!checkAll' @click="delCheckAll(true)"></div>
      <div class="checkbox-all test" v-if='checkAll' @click="delCheckAll(false)"></div>
      <span>全选</span>
      <div class="del" @click="showDialog('del')">删除</div>
    </div>

    <div class="manage-box-content">
      <div class="manage-item" v-for="(item, index) in orderList" :key='index'>
        <div class="manage-item-baseInfo">
          <input type="checkbox" class="item-checkbox" :checked="item.isCheck" @change="checkThis(index, item.id)">
          <!-- <el-checkbox-group> -->
            <!-- <el-checkbox class="item-checkbox" :checked="item.isCheck" @change="checkThis(index)"></el-checkbox> -->
          <!-- </el-checkbox-group> -->
          <div class="time">
            <span class="year">订单日期：{{item.time | filterYear}}</span>
            <span>支付时间：{{item.time | filterTimes}}</span>
          </div>
          <div class="consignee">收货人：{{item.people}}</div>
          <div class="phone">手机号：{{item.phone}}</div>
        </div>
        <div class="manage-item-descInfo clearfix">

          <div class="order">
            <div class="goodInfo clearfix" v-for="(gitem, gindex) in item.goods" :key='gindex'>
              <div :class="{size:true,more:gindex != 0}">
                <div class="size-unit">{{gitem.name}}</div>
                <div class="size-color">
                  <span style="margin-right:20px;">单位：{{gitem.unit}} </span>
                  <span>颜色：{{gitem.color}}</span>
                </div>
                <div class="size-size">型号：{{gitem.size}}</div>
              </div>
              <div :class="{num:true,more:gindex != 0}">数量：{{gitem.num}}</div>
            </div>
          </div>
          <div class="address">
            <!-- <div class="middle-text"> -->
              <div style="line-height:20px;">收货地址：{{item.address}}</div>
              <!-- <div>{{item.address}}</div> -->
            <!-- </div> -->
          </div>

          <div class="courier">
            <!-- <div class="middle-text"> -->
              <div class="courier-company">
                <span>快递公司</span>
                {{item.company | fliterState}}
              </div>
              <div class="courier-num">
                <span>快递单号</span>
                {{item.courier_num | fliterState}}
              <!-- </div> -->
            </div>
          </div>
          <div class="statePay">{{item.state}}</div>
          <div class="handlePay">
            <div class="handlePay-do" @click="showDialog('add')" v-if="item.state == '未发货'">添加物流信息</div>
            <div class="handlePay-do" @click="showDialog('edit',item)" v-if="item.state == '派件中'">修改物流信息</div>
            <div class="handlePay-see" @click="doWlInfoChange('see')">查看订单</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 添加物流信息对话框 -->
  <div class="add-dialog">
    <el-dialog title="添加物流信息" :visible.sync="addDialog" class="add-dialog">
      <el-form :model="addform">
        <el-form-item label="快递公司" prop="courierCompany" class="courierCompany">
          <el-input v-model="addform.courierCompany" class="ipt"></el-input>
        </el-form-item>
        <el-form-item label="快递单号" prop="courierNum" class="courierNum">
          <el-input v-model="addform.courierNum" class="ipt"></el-input>
        </el-form-item>
        <el-form-item class="handle">
          <div class="sureBtn">提交</div>
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
          <el-input v-model="editform.courierCompany" class="ipt"></el-input>
        </el-form-item>
        <el-form-item label="快递单号" prop="courierNum" class="courierNum">
          <el-input v-model="editform.courierNum" class="ipt"></el-input>
        </el-form-item>
        <el-form-item class="handle">
          <div class="sureBtn">提交</div>
          <div class="delBtn" @click="cancelHand('edit')">返回</div>
        </el-form-item>
      </el-form>
    </el-dialog>

  </div>

  <!-- 删除物流信息对话框 -->
  <div class="del">
    <el-dialog
    :visible.sync="delDialog"
    class="del-dialog">
      <div class="del-title">确定删除选中的物流信息？</div>
      <div class="del-handle">
        <div class="sureBtn" @click="delWlHandle">删除</div>
        <div class="delBtn" @click="cancelHand('del')">取消</div>
      </div>
    </el-dialog>
  </div>

</div>
</template>

<script>
import breadcrumb from '../../components/breadcrumb'
export default {
  created () {
  },
  mounted () {
    // let item = this.getClass('manage-item-descInfo')
    // 获取最高的元素高度
    let chlid = []
    for (let i = 0; i < this.getClass('.order').length; i++) {
      chlid.push(this.getClass('.order')[i].offsetHeight)
    }
    // console.log(chlid, 'h')
    let address = this.getClass('.address')
    let courier = this.getClass('.courier')
    let statePay = this.getClass('.statePay')
    let handlePay = this.getClass('.handlePay')
    for (let i = 0; i < this.getClass('.order').length; i++) {
      address[i].style.height = chlid[i] + 'px'
      courier[i].style.height = chlid[i] + 'px'
      statePay[i].style.height = chlid[i] + 'px'
      handlePay[i].style.height = chlid[i] + 'px'
    }
  },
  data () {
    return {
      // 订单列表
      orderList: [
        {
          time: new Date(),
          id: '00000',
          people: '小明',
          phone: '13265656565',
          size: '安泰-636 防霉密封胶',
          color: '白色',
          unit: '箱',
          // num: 5,
          company: '顺丰',
          courier_num: '123456789013256',
          state: '派件中',
          address: '广州市黄埔区南翔南翔南翔一路62号',
          isCheck: false,
          invoiceType: '专用发票',
          invoiceCompany: '广州集泰化工股份有限公司',
          invoiceNum: '914401017910339629',
          goods: [
            {
              name: '安泰-636 防霉密封胶',
              color: '白色',
              unit: '箱',
              num: 2,
              size: '300ml',
              price: 602
            }
          ]
        },
        {
          time: new Date(),
          id: '111111',
          people: '小明',
          phone: '13265656565',
          size: '安泰-636 防霉密封胶',
          color: '白色',
          unit: '箱',
          // num: 5,
          company: '',
          courier_num: '',
          state: '未发货',
          address: '广州市黄埔区南翔南翔南翔南翔一路62号',
          isCheck: false,
          invoiceType: '普通发票',
          invoiceCompany: '广州集泰化工股份有限公司',
          invoiceNum: '914401017910339629',
          goods: [
            {
              name: '安泰-635 防霉密封胶',
              color: '白色',
              unit: '箱',
              num: 4,
              size: '300ml',
              price: 602
            },
            {
              name: '安泰-622 防霉密封胶',
              color: '白色',
              unit: '箱',
              num: 4,
              size: '300ml',
              price: 602
            },
            {
              name: '安泰-636 防霉密封胶',
              color: '白色',
              unit: '箱',
              num: 4,
              size: '300ml',
              price: 602
            }
          ]
        },
        {
          time: new Date(),
          id: '22222',
          people: '小明',
          phone: '13258484848',
          size: '安泰-636 防霉密封胶 300ml*24支/箱',
          color: '白色',
          unit: '箱',
          // num: 5,
          company: '顺丰',
          courier_num: '0012123154654',
          state: '交易成功',
          address: '广州市黄埔区南翔一路62号',
          isCheck: false,
          invoiceType: '普通发票',
          invoiceCompany: '张三',
          invoiceNum: '',
          goods: [
            {
              name: '安泰-636 防霉密封胶',
              color: '白色',
              unit: '箱',
              num: 5,
              size: '300ml',
              price: 602
            },
            {
              name: '安泰-636 防霉密封胶',
              color: '白色',
              unit: '箱',
              num: 3,
              size: '300ml',
              price: 602
            }
          ]
        }
      ],
      // 面包屑数据
      breadcrumbList: [
        // {name: '首页', path: '/home'},
        {name: '物流管理', path: '/wlList'},
        {name: '物流信息', path: '/wlList'}
      ],
      // 顶部搜索框
      searchform: {
        goodName: '',
        people: '',
        state: '',
        time: '',
        start: '',
        end: ''
      },
      searchOptions: [
        {value: '0', label: '全部'},
        {value: '1', label: '交易成功'},
        {value: '2', label: '派件中'},
        {value: '3', label: '未发货'}
      ],
      // 显示添加物流信息对话框
      addDialog: false,
      // 添加物流信息表单数据
      addform: {
        courierCompany: '',
        courierNum: ''
      },
      // 显示添加物流信息对话框
      editDialog: false,
      // 添加物流信息表单数据
      editform: {
        courierCompany: '',
        courierNum: ''
      },
      // checkAll: false
      checkBtnNum: 0,
      checkArr: [],
      // 顶部tab数据
      activeTab: [
        {name: '所有订单', active: true},
        {name: '交易成功', active: false},
        {name: '派件中', active: false},
        {name: '未完成', active: false}
      ],
      delDialog: false
    }
  },
  components: {
    breadcrumb
  },
  methods: {
    // 物流信息操作
    doWlInfoChange (item) {
      if (item === 'add') {
        this.$router.push({path: '/addWlInfo'})
      } else if (item === 'change') {
        this.$router.push({path: '/changeWlInfo'})
      } else if (item === 'see') {
        this.$router.push({path: '/seeWlInfo'})
      }
    },
    // 显示对话框操作
    showDialog (dialog, item) {
      if (dialog === 'add') {
        this.addDialog = true
      } else if (dialog === 'edit') {
        this.editDialog = true
        this.editform.courierCompany = item.company
        this.editform.courierNum = item.courier_num
      }
    },
    // 取消对话框操作
    cancelHand (item) {
      if (item === 'add') {
        this.addDialog = false
      } else if (item === 'edit') {
        this.editDialog = false
      } else if (item === 'del') {
        this.delDialog = false
      }
    },
    // 删除选中物流信息
    delWlHandle () {

    },
    // 选择该行订单
    checkThis (index, id) {
      this.checkArr = []
      this.$set(this.orderList[index], 'isCheck', !this.orderList[index].isCheck)
      if (this.orderList[index].isCheck) {
        // this.checkArr.push(this.orderList[index].id)
        // 数组去重
        // this.checkArr = [...new Set(this.checkArr)]
      }
      // console.log(this.checkArr)
    },
    // 取消全选
    delCheckAll (item) {
      for (let i = 0; i < this.orderList.length; i++) {
        this.$set(this.orderList[i], 'isCheck', item)
      }
    },
    // 顶部tab选择
    selectTab (index) {
      for (let i = 0; i < this.activeTab.length; i++) {
        this.activeTab[i].active = false
      }
      this.$set(this.activeTab[index], 'active', true)
    },
    // 获取选择器
    getClass (selector) {
      return document.querySelectorAll(selector)
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
