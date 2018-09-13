
<style scoped>
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

.detail-wrap{
  padding: 20px;
}
.detail-wrap .detail-box{
  width: 680px;
  padding: 20px 10px 0;
  border:1px solid #dcdcdc;
}
.detail-wrap .item-box{
  font-size: 16px;
  color: #5f6468;
  margin-bottom: 25px;
}
.detail-wrap .item-box .label{
  display: inline-block;
  width: 75px;
  text-align: right;
}
.detail-wrap .item-box .val{
  margin-left: 15px;
}
.detail-wrap .item-box .edit-btn{
  margin-left: 100px;
}

.form-wrap{
  margin-top:20px;
  margin-left:20px;
  width: 600px;
}
</style>
<style>
  .form-wrap .el-button{
    margin:0 15px;
  }
</style>

<template>
<div class="manage">
  <!-- 面包屑 -->
  <breadcrumb :breadcrumbList='breadcrumbList'></breadcrumb>

  <div class="manage-box">
    <div class="manage-box-title">账号详情</div>
    <!-- 详情 -->
    <div class="detail-wrap" v-show="isShowDeail">
      <div class="detail-box">
        <div class="item-box">
          <span class="label">账号：</span>
          <span class="val">{{accountInfo.account}}</span>
        </div>
        <div class="item-box">
          <span class="label">密码：</span>
          <span class="val">{{accountInfo.pswd}}</span>
        </div>
        <div class="item-box">
          <span class="label">姓名：</span>
          <span class="val">{{accountInfo.userName}}</span>
        </div>
        <div class="item-box">
          <span class="label">手机号：</span>
          <span class="val">{{accountInfo.tel}}</span>
        </div>
        <div class="item-box">
          <span class="label">角色：</span>
          <span class="val">{{accountInfo.is_admin|getRoleName}}</span>
        </div>
        <div class="item-box">
          <span class="label">权限：</span>
          <span class="val">{{accountInfo.auth|getAuthName}}</span>
        </div>
        <div class="item-box">
          <el-button type="primary" @click="editDetail" class="edit-btn">修改</el-button>
          <el-button @click="goBack">返回</el-button>
        </div>
      </div>
    </div>
    <!-- 编辑 -->
    <div class="form-wrap" v-show="isShowForm">
      <el-form ref="form" :model="form" label-width="80px" :rules="rules" >
        <el-form-item label="账号" prop="name">
          <el-input v-model="form.name" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input v-model="form.pwd" type="password"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="form.userName"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="role">
          <el-radio-group v-model="form.role">
            <el-radio label="1">超级管理员</el-radio>
            <el-radio label="2">普通管理员</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="权限" prop="type">
          <el-checkbox-group v-model="form.type">
            <el-checkbox v-for="(item,index) in modules" :key="index" :label="item.id" name="type" >{{item.name}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确定</el-button>
          <el-button @click="goBack">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</div>
</template>

<script>
import breadcrumb from '../../components/breadcrumb'
import api from '../../api/index'
export default {
  created () {
    this.getAccountDetail()
  },
  mounted () {
    // 获取最高的元素高度
  },
  data () {
    return {
      // 面包屑数据
      breadcrumbList: [
        // {name: '首页', path: '/home'},
        {name: '设置', path: '/manage'},
        {name: '账号详情', path: '/accountDetail'}
      ],
      isShowDeail:true,
      isShowForm:false,
      //账号信息
      accountInfo:{
        "id": "1",
        "account": "yanpan",
        "pswd":"123456",
        "tel": "13691787932",
        "userName": 'yanpan',
        "is_admin": "1",
        "auth": "1,2,3,4"
      },
      modules:[
        {name:'商品管理',id:1},
        {name:'邀请码管理',id:2},
        {name:'订单管理',id:3},
        {name:'库存管理',id:4},
        {name:'管理员设置',id:5},
        {name:'修改记录',id:6},
        {name:'用户',id:7}
      ],
      form: {
        name: '',
        pwd: '',
        userName: '',
        phone: '',
        role: '',
        type: []
      },
      rules: {
          name: [
            { required: true, message: '请输入账号名称', trigger: 'blur' },
            { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
          ],
          pwd: [
            { required: true, message: '请输入账号密码', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入手机号码', trigger: 'blur' }
          ],
          role: [
            { required: true, message: '请选择角色', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一种权限', trigger: 'change' }
          ]
      }
    }
  },
  components: {
    breadcrumb
  },
  methods: {
      //修改
      editDetail () {
        this.isShowDeail = false;
        this.isShowForm = true;
        this.form.name = this.accountInfo.account;
        this.form.pwd = this.accountInfo.pswd;
        this.form.userName = this.accountInfo.userName;
        this.form.phone = this.accountInfo.tel;
        this.form.role = this.accountInfo.is_admin;
        this.form.type = this.authStrToArr(this.accountInfo.auth);
      },
      //拉取账号详情
      getAccountDetail () {
        var account_id = this.$route.query.id;
        api.getUserAccountDetail({
          id:account_id
        }).then(res=>{
          console.log(res);
          if(res.code == 200){
            var info = res.extraData.info;
            this.accountInfo.id = info.id;
            this.accountInfo.account = info.account;
            this.accountInfo.pswd = info.pswd;
            this.accountInfo.tel = info.tel;
            this.accountInfo.userName = info.user_name;
            this.accountInfo.is_admin = info.is_admin;
            this.accountInfo.auth = info.auth;
          }else{
            this.$message.error(res.message)
          }
        })
      },
      onSubmit() {
        console.log(this.form);
        if(!this.form.name.trim()){
          this.$message.error('账号不能为空')
          return false
        }
        if(!this.form.pwd.trim()){
          this.$message.error('密码不能为空')
          return false
        }
        if(!this.form.phone.trim()){
          this.$message.error('手机号码不能为空')
          return false
        }
        if(!/^1[3,4,5,6,7,8,9]\d{9}$/.test(this.form.phone)){
          this.$message.error('手机号码格式不正确')
          return false
        }
        if(!this.form.role){
          this.$message.error('请先选择角色')
          return false
        }
        if(this.form.type.length == 0){
          this.$message.error('至少选择一种权限')
          return false
        }
        var account_id = this.$route.query.id;
        // return;
        api.editUserAccount({
          id:account_id,
          account: this.form.name,
          pswd: this.form.pwd,
          user_name: this.form.userName,
          tel: this.form.phone.toString(),
          is_admin: this.form.role,
          auth: this.getAuthId(this.form.type)
        }).then(res => {
          console.log(res);
          if(res.code == 200){
            this.$message({
              message: res.message,
              type: 'success',
              duration: 2000
            });
            this.$router.push('/manage/accountList')
          }else{
            this.$message.error(res.message)
          }
        })
      },
      goBack () {
        this.$router.go(-1);
      },
      getAuthId (auths) {
        let auth_id = '';
        if(auths.length == 0){
          return '';
        }
        auths.forEach((item,index)=>{
            auth_id += item + ',';
        })
        auth_id = auth_id.substring(0,auth_id.length - 1);
        return auth_id;
      },
      authStrToArr (authstr) {
        return authstr.split(',').map((item,index)=>{
          return parseInt(item);
        })
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
