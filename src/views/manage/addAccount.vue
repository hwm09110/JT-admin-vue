
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
.form-wrap{
  margin-top:20px;
  margin-left:20px;
  width: 600px;
}
</style>
<style>
  /*覆盖element ui 样式*/
  .form-wrap .el-checkbox-group .el-checkbox{
    margin-right: 15px;
    margin-left: 0;
  }
  .form-wrap .el-button{
    margin:0 15px;
  }
  .form-wrap .el-radio__input.is-checked .el-radio__inner{
    background-color: #1f7fb1;
    border-color: #1f7fb1;
  }
  .form-wrap .el-radio__input.is-checked+.el-radio__label{
    color: #1f7fb1;
  }
</style>

<template>
<div class="manage">
  <!-- 面包屑 -->
  <breadcrumb :breadcrumbList='breadcrumbList'></breadcrumb>

  <div class="manage-box">
    <div class="manage-box-title">添加账号</div>
    <div class="form-wrap">
      <el-form ref="form" :model="form" label-width="80px" :rules="rules" >
        <el-form-item label="账号" prop="name">
          <el-input v-model="form.name"></el-input>
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
            <el-radio label="超级管理员" value="1"></el-radio>
            <el-radio label="普通管理员" value="2"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="权限" prop="type">
          <el-checkbox-group v-model="form.type">
            <el-checkbox v-for="(item,index) in modules" :key="index" :label="item.name" name="type" ></el-checkbox>
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
    // this.getAllOrder()
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
        {name: '添加账号', path: '/addAccount'}
      ],
      modules:[
        {name:'商品管理',id:1},
        {name:'邀请码管理',id:2},
        {name:'订单管理',id:3},
        {name:'库存管理',id:4},
        // {name:'管理员设置',id:5},
        {name:'修改记录',id:6},
        {name:'用户',id:7}
      ],
      form: {
        name: '',
        pwd: '',
        phone: '',
        userName: '',
        role: '',
        type: []
      },
      rules: {
          name: [
            { required: true, message: '请输入账号', trigger: 'blur' },
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
  computed:{
  },
  methods: {
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

      // return;
      api.addUserAccount({
        account: this.form.name,
        pswd: this.form.pwd,
        tel: this.form.phone,
        user_name:this.form.userName,
        is_admin: this.getRoleId(this.form.role),
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
    getRoleId (roleName) {
      if(roleName == '超级管理员'){
        return 1;
      }else if(roleName == '普通管理员'){
        return 2;
      }
    },
    getAuthId (auths) {
      let auth_id = '';
      if(auths.length == 0){
        return '';
      }
      auths.forEach((item,index)=>{
        this.modules.forEach((mod,j)=>{
          if(item == mod.name){
            auth_id += mod.id + ',';
          }
        })
      })
      auth_id = auth_id.substring(0,auth_id.length - 1);
      return auth_id;
    }
  },
  filters: {
  }
}
</script>
