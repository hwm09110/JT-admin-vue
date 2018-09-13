
<style lang="scss" scoped>
.manage{
  padding: 20px;
  padding-top: 55px;
  background-color: #f1f4f7;
  height: 100%;
  box-sizing: border-box;
  position: relative;
}
.manage-box{
  border-radius: 5px;
  height: 100%;
  background-color: #fff;
}
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
}


.table-wrap{
  padding:20px;
}
.table-wrap .table-box{
  width: 100%;
}
.table-wrap .table-box th{
  background-color: #eff2f5;
  font-weight:700;
}
.table-wrap .table-box th,
.table-wrap .table-box td{
  padding: 15px;
  color: #5f6468;
  font-size: 14px;
  text-align: left;
}
.table-wrap .table-box tr:nth-child(2n-1){
  background-color:#fafafa;
}
.table-wrap .table-box tr{
  transition: all .4s;
}
.table-wrap .table-box tr:not(:first-child):hover{
  background-color: #ebeef5;
}
.table-box .btn{
  color: #1f7fb1;
  margin-right: 10px;
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
</style>

<template>
<div class="manage">
  <!-- 面包屑 -->
  <breadcrumb :breadcrumbList='breadcrumbList'></breadcrumb>

  <div class="manage-box">
    <div class="manage-box-title">首页商品修改记录列表</div>
    <div class="table-wrap">
      <table class="table-box">
        <colgroup>
          <col width="20%" />
          <col width="20%" />
          <col width="60%" />
        </colgroup>
        <tbody>
          <tr>
            <th>修改时间</th>
            <th>账号</th>
            <th>操作描述</th>
          </tr>
          <tr v-for="(item,index) in tableData" :key="index">
            <td>{{item.handle_date}}</td>
            <td>{{item.account}}</td>
            <td>{{item.handle_content}}</td>
          </tr>
          <tableNoData msg="没有相关数据" colspanNum="3" v-if="tableData.length==0"></tableNoData>
        </tbody>
      </table>
    </div>
    <!-- 分页 -->
    <div class="code-box-pagination" v-if="tableData.length!==0">
      <div class="item">
        <div :class="{'item-frist': true, 'handle': true, 'item-noneF': currentPage == 1}" @click="jumpToPage(1)"></div>
        <div :class="{'item-prev': true, 'handle': true, 'item-none': currentPage == 1}" @click="nextOrPrevPage(-1)">&lt;</div>
        <div class="item-page page">{{currentPage}}/{{totalPage}}</div>
        <div :class="{'item-next': true, 'handle': true, 'item-none': currentPage == totalPage}" @click="nextOrPrevPage(1)">&gt;</div>
        <div :class="{'item-last': true, 'handle': true, 'item-noneL': currentPage == totalPage}" @click="jumpToPage(totalPage)"></div>
      </div>
    </div>
    <!-- 分页 -->
  </div>
</div>
</template>

<script>
import breadcrumb from '../../components/breadcrumb'
import tableNoData from '../../components/tableNoData'
import api from '../../api/index'
export default {
  created () {
    this.getGoodRecordList(this.currentPage)
  },
  data () {
    return {
      // 面包屑数据
      breadcrumbList: [
        {name: '设置', path: '/manage'},
        {name: '账号列表', path: '/accountList'}
      ],
      tableData: [
        {
          "id": "3",
          "user_guid": "ab0e6e01164802R07094402",
          "account": "yanpan",
          "type": "2",
          "handle": "2",
          "handle_time": "1536743764",
          "handle_content": "yanpan编辑了商品27",
          "Excel": "0",
          "handle_date": "2018-09-12 17:16:04"
        }
      ],
      currentPage: 1,
      totalPage: 1,
      len: 10,
      count: 0
    }
  },
  components: {
    breadcrumb,
    tableNoData
  },
  methods: {
      //拉取首页商品修改记录列表
      getGoodRecordList (page) {
        api.getRecordList({
          page: page,
          type: 2
        }).then(res=>{
          console.log(res);
          if(res.code == 200){
            this.tableData = res.extraData.info
            this.count = res.extraData.count
            this.len = res.extraData.len
            // 计算总页数
            if (Math.ceil(this.count / this.len) !== 0) {
              this.totalPage = Math.ceil(this.count / this.len)
            } else {
              this.totalPage = 1
            }
          }else{
            this.$message.error(res.message)
          }
        })
      },
      // 控制页码到首页或尾页
      jumpToPage (page) {
        this.currentPage = page
        this.getGoodRecordList(this.currentPage)
      },
      // 控制页码到上一页或下一页
      nextOrPrevPage (page) {
        this.currentPage += page
        if (this.currentPage >= 1 && this.currentPage <= this.totalPage) {
          // 发请求
          this.getGoodRecordList(this.currentPage)
        }
        if (this.currentPage <= 1) {
          this.currentPage = 1
        }
        if (this.currentPage > this.totalPage && this.totalPage !== 0) {
          this.currentPage = this.totalPage
        }
      }
  }
}
</script>
