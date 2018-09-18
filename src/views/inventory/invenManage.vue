<style lang="scss" scoped>
.invenManage{
  padding: 20px;
  padding-top: 55px;
  background-color: #f1f4f7;
  // height: 100%;
  box-sizing: border-box;
  position: relative;
  .invenManage-box{
    border-radius: 5px;
    // height: 740px;
    background-color: #fff;
    padding: 0 20px;
    width: 2200px;
    box-sizing: border-box;
    // 标题
    .invenManage-box-title{
      height: 60px;
      line-height: 60px;
      padding-left: 15px;
      color: #5f6468;
      font-weight: 600;
      font-size: 18px;
      border-bottom: 1px solid #dcdcdc;
    }
    // 搜索表单
    .invenManage-box-from{
      border: 1px solid #dcdcdc;
      margin: 20px;
      margin-left: 0;
      width: 1120px;
      padding: 16px 18px;
      box-sizing: border-box;
      .el-form-item{
        margin-right: 30px;
      }
      .query{
        margin: 0;
      }
      .keyWord{
        width: 300px;
      }
      .ckCode{
        .ipt{
          width: 90px;
        }
      }
      .ckName{
        .ipt{
          width: 200px;
        }
      }
      .guige{
        .ipt{
          width: 170px;
        }
      }
      .unitFir{
        .ipt{
          width: 70px;
        }
      }
      .unitSec{
        .ipt{
          width: 70px;
        }
      }
      .zzCode{
        .ipt{
          width: 90px;
        }
      }
      .zzName{
        .ipt{
          width: 200px;
        }
      }
      .companyName{
        .ipt{
          width: 200px;
        }
      }
    }
    // 表格
    .invenManage-box-table{
      width: 2080px;
      padding-bottom: 50px;
      background-color: #fff;
      padding-right: 30px;
      table{
        border: 1px solid #dcdcdc;
        width: 100%;
        margin-right: 30px;
        border-collapse:collapse;
        thead{
          th{
            height: 50px;
            font-size: 14px;
            line-height: 50px;
            color: #fff;
            background-color: #19a78f;
            border: 1px solid #dcdcdc;
            &:nth-child(1){
              width: 90px;
            }
            &:nth-child(2){
              width: 200px;
            }
            &:nth-child(3){
              width: 120px;
            }
            &:nth-child(4){
              width: 120px;
            }
            &:nth-child(5){
              width: 90px;
            }
            &:nth-child(6){
              width: 150px;
            }
            &:nth-child(7){
              width: 125px;
            }
            &:nth-child(8){
              width: 250px;
            }
            &:nth-child(9){
              width: 160px;
            }
            &:nth-child(10){
              width: 110px;
            }
            &:nth-child(11){
              width: 90px;
            }
            &:nth-child(12){
              width: 100px;
            }
            &:nth-child(13){
              width: 90px;
            }
            &:nth-child(14){
              width: 90px;
            }
            &:nth-child(15){
              width: 100px;
            }
            &:nth-child(16){
              width: 90px;
            }
            &:nth-child(17){
              width: 90px;
            }
          }
        }
        tbody{
          td{
            height: 80px;
            line-height: 80px;
            border: 1px solid #dcdcdc;
            text-align: center;
            color: #5f6468;
            font-size: 14px;
          }
        }
      }
      .tableTip{
        font-size: 14px;
        color: #5f6468;
      }
    }
    // 导入导出表格
    .invenManage-box-excel{
      margin-bottom: 30px;
      height: 40px;
      position: relative;
      font-size: 14px;
      color:#fff;
      text-align: center;
      .inputExcel{
        position: relative;
        .hideInput{
          width: 160px;
          height: 35px;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          z-index: 10;
          cursor: pointer;
        }
        .showInput{
          width: 160px;
          height: 35px;
          line-height: 35px;
          position: absolute;
          top: 0;
          left: 0;
          background-color: #1f7fb1;
          border-radius: 5px;
          cursor: pointer;
        }
      }
      .outputExcel{
        position: absolute;
        left: 190px;
        top: 0;
        display: block;
        width: 160px;
        height: 35px;
        line-height: 35px;
        background-color: #1f7fb1;
        border-radius: 5px;
        cursor: pointer;
      }
      a:link{
        color:#fff;
        text-decoration: none;
      }
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
</style>

<template>
<div class="invenManage">
  <!-- 面包屑 -->
  <breadcrumb :breadcrumbList='breadcrumbList' style="width:2220px;"></breadcrumb>

  <div class="invenManage-box">
    <div class="invenManage-box-title">库存信息</div>
    <!-- 搜索表单 -->
    <div class="invenManage-box-from">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="" class="keyWord">
          <el-input v-model="form.search" placeholder="输入存货名称或存货编码进行搜索"></el-input>
        </el-form-item>
        <el-form-item class="query">
          <el-button type="primary" @click="doSearchCk">搜索</el-button>
        </el-form-item>
        <el-form-item class="ckCode" label="仓库编码">
          <el-input v-model="form.storage_code" class="ipt"></el-input>
        </el-form-item>
        <el-form-item class="ckName" label="仓库名称">
          <el-input v-model="form.storage_name" class="ipt"></el-input>
        </el-form-item>
        <el-form-item class="guige" label="规格">
          <el-input v-model="form.guige" class="ipt"></el-input>
        </el-form-item>
        <el-form-item class="unitFir" label="辅计量单位">
          <el-input v-model="form.sec_unit" class="ipt"></el-input>
        </el-form-item>
        <!-- <el-form-item class="unitSec" label="辅计量单位">
          <el-input v-model="form.unitSec" class="ipt"></el-input>
        </el-form-item> -->
        <el-form-item class="zzCode" label="库存组织编码">
          <el-input v-model="form.organiz_code" class="ipt"></el-input>
        </el-form-item>
        <el-form-item class="zzName" label="库存组织">
          <el-input v-model="form.organiz_name" class="ipt"></el-input>
        </el-form-item>
        <el-form-item class="companyName" label="公司名称">
          <el-input v-model="form.company_name" class="ipt"></el-input>
        </el-form-item>
      </el-form>
    </div>

    <!-- 导入导出表单 -->
    <div class="invenManage-box-excel">
      <!-- <excel :on-success='handleSuccess' :before-upload="beforeUpload"></excel> -->
      <form class="inputExcel" method="post" enctype="multipart/form-data">
         <!-- @change="update" -->
         <!-- 或者使用upload组件 -->
        <input type="file" class="hideInput" @change="inputExcel($event)" >
        <!-- <el-upload
          class="upload-demo"
          action="http://192.168.8.90/jtds/Admin_Storage/import"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-error="uploadFail"
          :on-success="uploadSuccess"
          :file-list="fileList"
          :auto-upload="true">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload> -->
        <div class="showInput">导入表格</div>
      </form>
      <a class="outputExcel" @click="outputExcel">导出表格</a>
    </div>

    <!-- 表格 -->
    <div class="invenManage-box-table">
      <table class="myTable" border="1" v-if="table">
        <thead>
          <tr>
            <th v-for='(item, index) in table.tableHead' :key="index">{{item}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='(item, index) in table.tableBody' :key="index">
            <td>{{item.company_code}}</td>
            <td>{{item.company_name}}</td>
            <td>{{item.organiz_code}}</td>
            <td>{{item.organiz_name}}</td>
            <td>{{item.storage_code}}</td>
            <td>{{item.storage_name}}</td>
            <td>{{item.goods_code}}</td>
            <td>{{item.goods_name}}</td>
            <td>{{item.guige}}</td>
            <td>{{item.type}}</td>
            <td>{{item.unit}}</td>
            <td>{{item.sec_unit}}</td>
            <td>{{item.num}}</td>
            <td>{{item.weight}}</td>
            <td>{{item.sec_num}}</td>
            <td>{{item.freeze_num}}</td>
            <td>{{item.freeze_weight}}</td>
          </tr>
        </tbody>
      </table>
      <!-- <el-table
        :data="table.tableBody"
        stripe
        style="width: 100%">
        <el-table-column
          prop="company_code"
          label="等级"
          >
        </el-table-column>
        <el-table-column
          prop="company_name"
          label="等级"
          >
        </el-table-column>
        <el-table-column
          prop="organiz_code"
          label="等级"
          >
        </el-table-column>
        <el-table-column
          prop="organiz_name"
          label="等级"
          >
        </el-table-column>
        <el-table-column
          prop="storage_code"
          label="等级"
          >
        </el-table-column>
        <el-table-column
          prop="storage_name"
          label="等级"
          >
        </el-table-column>
        <el-table-column
          prop="goods_code"
          label="等级"
          >
        </el-table-column>
        <el-table-column
          prop="goods_name"
          label="等级"
          >
        </el-table-column>
        <el-table-column
          prop="guige"
          label="等级"
          >
        </el-table-column>
        <el-table-column
          prop="type"
          label="等级"
          >
        </el-table-column>
        <el-table-column
          prop="unit"
          label="等级"
          >
        </el-table-column>
        <el-table-column
          prop="sec_unit"
          label="等级"
          >
        </el-table-column>
        <el-table-column
          prop="num"
          label="等级"
          >
        </el-table-column>
        <el-table-column
          prop="weight"
          label="等级"
          >
        </el-table-column>
        <el-table-column
          prop="sec_num"
          label="等级"
          >
        </el-table-column>
        <el-table-column
          prop="num"
          label="等级"
          >
        </el-table-column>
        <el-table-column
          prop="freeze_num"
          label="等级"
          >
        </el-table-column>
        <el-table-column
          prop="freeze_weight"
          label="等级"
          >
        </el-table-column>
      </el-table> -->
      <div class="tableTip" v-if="!table.tableHead">暂无数据，请导入表格</div>
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
  </div>
</div>
</template>

<script>
import breadcrumb from '../../components/breadcrumb'
import api from '../../api/index'
import axios from 'axios'
// import Qs from 'qs'
// import excel from '../../components/excel'
export default {
  created () {
    this.storageList()
  },
  data () {
    return {
      fileList: [],
      // 面包屑数据
      breadcrumbList: [
        // {name: '首页', path: '/home'},
        {name: '库存', path: '/inventory'},
        {name: '库存信息', path: '/inventory/invenManage'}
      ],
      form: {
        storage_code: '',
        storage_name: '',
        guige: '',
        sec_unit: '',
        organiz_code: '',
        organiz_name: '',
        company_name: '',
        search: ''
      },
      table: {
        tableHead: [
          '公司编码',
          '公司名称',
          '库存组织编码',
          '库存组织',
          '仓库编码',
          '仓库名称',
          '存货编码',
          '存货名称',
          '规格',
          '型号',
          '计量单位',
          '辅计量单位',
          '结存数量',
          '结存毛重',
          '结存辅数量',
          '冻结数量',
          '冻结毛重'
        ],
        tableBody: [
          {
            // company_code: '01',
            // company_name: '广州集泰化工股份有限公司',
            // organiz_code: '03',
            // organiz_name: '建筑胶仓储组',
            // storage_code: '0324',
            // storage_name: '东洋建筑胶成品仓',
            // goods_code: '04090410003',
            // goods_name: '软硅酮胶',
            // guige: '171软黑色W 500ml',
            // type: '',
            // unit: '支',
            // sec_unit: '箱',
            // num: '22357.00',
            // weight: '0.00',
            // sec_num: '1117.85',
            // freeze_num: '',
            // freeze_weight: ''
          }
        ]
      },
      tableData: [],
      tableHeader: [],
      currentPage: 1,
      totalPage: 1
    }
  },
  components: {
    breadcrumb
    // excel
  },
  methods: {
    // 导入excel
    inputExcel (e) {
      console.log(20)
      let file = e.target.files[0]
      let param = new FormData()
      param.append('excelfile', file)
      // {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
      //var apiDomain = this.$store.state.apiDomain;
      // axios.post(
      //   apiDomain+'/jtds/Admin_Storage/import',
      //   param
      // ).then(res => {
      //   console.log(res.data, '接口import')
      //   if (res.data.code === '200') {
      //     this.$message({
      //       message: res.data.message,
      //       type: 'success'
      //     });
      //     this.storageList()
      //   }else{
      //     this.$message.error(res.data.message)
      //   }
      // })

      api.importExcel(param).then(res => {
        console.log(res, '接口import')
        if (res.code === '200') {
          this.$alert(res.message, '信息', {
            confirmButtonText: '确定',
          });
          this.storageList()
        }else{
          this.$message.error(res.message)
        }
      })
    },
    // 导出excel
    outputExcel () {
      var apiDomain = this.$store.state.apiDomain;
      var apiPath = `/jtds/Admin_Storage/export?storage_code=${this.form.storage_code}
                  &storage_name=${this.form.storage_name}
                  &guige=${this.form.guige}
                  &sec_unit=${this.form.sec_unit}
                  &organiz_code=${this.form.organiz_code}
                  &organiz_name=${this.form.organiz_name}
                  &company_name=${this.form.company_name}
                  &search=${this.form.search}`;

      var url = apiDomain+apiPath;
      console.log('导出库存',url);
      window.open(url);
    },
    // 控制页码到首页或尾页
    jumpToPage (page) {
      this.currentPage = page
      this.storageList(this.form.storage_code, this.form.storage_name, this.form.guige, this.form.sec_unit, this.form.organiz_code, this.form.organiz_name, this.form.company_name, this.form.search, this.currentPage)
    },
    // 控制页码到上一页或下一页
    nextOrPrevPage (page) {
      this.currentPage += page
      if (this.currentPage >= 1 && this.currentPage <= this.totalPage) {
        // 发请求
        this.storageList(this.form.storage_code, this.form.storage_name, this.form.guige, this.form.sec_unit, this.form.organiz_code, this.form.organiz_name, this.form.company_name, this.form.search, this.currentPage)
      }
      if (this.currentPage <= 1) {
        this.currentPage = 1
      }
      if (this.currentPage > this.totalPage && this.totalPage !== 0) {
        this.currentPage = this.totalPage
      }
    },
    // 点击搜索筛选
    doSearchCk () {
      this.currentPage = 1
      this.storageList(this.form.storage_code, this.form.storage_name, this.form.guige, this.form.sec_unit, this.form.organiz_code, this.form.organiz_name, this.form.company_name, this.form.search, this.currentPage)
    },
    // 获取库存列表-筛选库存
    storageList (storageCode, storageName, guige, secUnit, organizCode, organizName, companyName, search, page = 1) {
      api.getStorageList({
        storage_code: storageCode,
        storage_name: storageName,
        guige: guige,
        sec_unit: secUnit,
        organiz_code: organizCode,
        organiz_name: organizName,
        company_name: companyName,
        search: search,
        page: page
      }).then(res => {
        console.log(res, '库存列表')
        if (res.code === '200') {
          this.table.tableBody = res.extraData.info
          // 计算总页数
          if (Math.ceil(res.extraData.count / res.extraData.len) !== 0) {
            this.totalPage = Math.ceil(res.extraData.count / res.extraData.len)
          } else {
            this.totalPage = 1
          }
        }
      })
    }
  }
}
// let reader = new FileReader()
// 二进制读取
// reader.readAsBinaryString(file)
// 纯文本读取
// reader.readAsText(file)
// reader.onload = function (res) {
//   console.log(res.target.result)
//   api.importExcel({
//     excelfile: res.target.result
//   }).then(res => {
//     console.log(res, '上传excel')
//   })
// }
</script>
