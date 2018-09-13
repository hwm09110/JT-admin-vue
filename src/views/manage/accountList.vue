
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

.operate-box{}
.operate-box .add-account{
  display: inline-block;
  cursor: pointer;
  width: 120px;
  height: 35px;
  line-height: 35px;
  border-radius: 5px;
  background-color: #1f7fb1;
  margin-top: 20px;
  margin-left: 20px;
  color: #fff;
  text-align: center;
  font-size: 14px;
}

.table-wrap{
  padding: 20px;
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
    <div class="manage-box-title">账号列表</div>
    <div class="operate-box">
      <span class="add-account" @click="addAccount">添加新账号</span>
    </div>
    <div class="table-wrap">
      <table class="table-box">
        <tbody>
          <tr>
            <th>账号</th>
            <th>手机号</th>
            <th>角色</th>
            <th>权限</th>
            <th>操作</th>
          </tr>
          <tr v-for="(item,index) in tableData" :key="index">
            <td>{{item.account}}</td>
            <td>{{item.tel}}</td>
            <td>{{item.is_admin|getRoleName}}</td>
            <td>{{item.auth|getAuthName}}</td>
            <td>
              <a href="javascript:;" class="btn"  @click="seenDetail(item)">查看</a>
              <a href="javascript:;" class="btn" @click="delAccount(item)">删除</a>
            </td>
          </tr>
          <tableNoData msg="没有相关数据" colspanNum="5" v-if="tableData.length==0"></tableNoData>
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
    this.getAccountList()
  },
  mounted () {
    // 获取最高的元素高度
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
          "id": "2",
          "user_guid": "ab0e6e01164802R07094403",
          "account": "xietongkun",
          "tel": "15008489804",
          "is_admin": "1",
          "auth": "1,2,3,4"
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
      addAccount () {
        this.$router.push('/manage/addAccount')
      },
      //拉取账号列表
      getAccountList (page=1) {
        api.getUserAccountList({
          page: page
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
      //查看详情
      seenDetail (data) {
        console.log(data)
        this.$router.push({path:'/manage/accountDetail',query:{id:data.id}})
      },
      //删除账号
      delAccount (data) {
        console.log(data)
        var acount_id = data.id;
         this.$confirm('确定删除该账号?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then((res) => {
          api.delUserAccount({
            id:acount_id
          })
          .then(res=>{
            if(res.code == 200){
              this.$message({
                message: res.message,
                type: 'success',
                duration: 2000
              });
              this.getAccountList()
            }else{
              this.$message.error(res.message)
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      // 控制页码到首页或尾页
      jumpToPage (page) {
        this.currentPage = page
        this.getAccountList(this.currentPage)
      },
      // 控制页码到上一页或下一页
      nextOrPrevPage (page) {
        this.currentPage += page
        if (this.currentPage >= 1 && this.currentPage <= this.totalPage) {
          // 发请求
          this.getAccountList(this.currentPage)
        }
        if (this.currentPage <= 1) {
          this.currentPage = 1
        }
        if (this.currentPage > this.totalPage && this.totalPage !== 0) {
          this.currentPage = this.totalPage
        }
      }
  },
  filters: {
    getAuthName (authListStr) {
      var auth_str = '';
      var auth_arr = authListStr.split(',');

      auth_arr.forEach((item,index)=>{
            if(item == 1){
              auth_str += '商品管理、';
            }else if(item == 2){
              auth_str += '邀请码管理、';
            }else if(item == 3){
              auth_str += '订单管理、';
            }else if(item == 4){
              auth_str += '库存管理、';
            }else if(item == 5){
              auth_str += '管理员设置、';
            }else if(item == 6){
              auth_str += '修改记录、';
            }else if(item == 7){
              auth_str += '用户、';
            }
      });
      auth_str = auth_str.substring(0,auth_str.length - 1);
      return auth_str;
    },
    getRoleName (role_id) {
      var role_name = '';
      if(role_id == 1){
        role_name = '超级管理员';
      }else if(role_id == 2){
        role_name = '普通管理员';
      }
      return role_name;
    }
  }
}
</script>
