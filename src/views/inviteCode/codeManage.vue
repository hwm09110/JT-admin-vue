<style lang="scss" scoped>
.codeManage{
  padding: 20px;
  padding-top: 55px;
  background-color: #f1f4f7;
  // height: 100%;
  box-sizing: border-box;
  position: relative;
  .code-box{
    border-radius: 5px;
    height: 100%;
    background-color: #fff;
    // 标题
    .code-box-title{
      height: 60px;
      line-height: 60px;
      padding-left: 15px;
      color: #5f6468;
      font-weight: 600;
      font-size: 18px;
      border-bottom: 1px solid #dcdcdc;
    }
    // 创建邀请码按钮
    .code-box-creat{
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
    // 顶部表单
    .code-box-form{
      border: 1px solid #dcdcdc;
      margin: 20px;
      width: 720px;
      padding: 16px 18px;
      box-sizing: border-box;
      .query{
        margin: 0;
      }
      .name{
        width: 300px;
      }
      .level,
      .attr{
        width: 255px;
        position: relative;
        .title{
          position: absolute;
          top: 0;
          left: 0;
          color: #5f6468;
        }
      }
      .attr{
        margin-left: 90px;
      }
    }
    // 表格
    .code-box-table{
      padding: 0 30px;
      .handle{
        cursor: pointer;
        color: #1f7fb1;
        margin-right: 18px;
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
    // 创建邀请码、修改邀请码
    .create-dialog,
    .edit-dialog{
      .name,
      .company{
        .ipt{
          width: 300px;
        }
      }
      .mark,
      .number{
        .ipt{
          margin-left: 9px;
          width: 170px;
        }
        .tip{
          color: #c1c1c1;
          font-size: 12px;
        }
      }
      .number{
        .ipt{
          margin-left: 32px;
        }
      }
      .handle{
        position: relative;
        .getNewCode{
          width: 120px;
          height: 35px;
          border: 1px solid #1f7fb1;
          color: #1f7fb1;
          text-align: center;
          line-height: 35px;
          float: left;
          border-radius: 5px;
          margin-right: 55px;
          cursor: pointer;
        }
        .newCode{
          float: left;
        }
        .tip{
          position: absolute;
          top: 30px;
          left: 0;
          color: #fb5454;
          font-size: 12px;
          display: none;
        }
        .show {
          display: block;
        }
      }
      .btn{
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
    // 发送邀请码
    .send-dialog{
      .ipt{
        width: 255px;
      }
      .phone{
        .ipt{
          margin-left: 2px;
        }
      }
      .inviteCode{
        .ipt{
          margin-left: 30px;
        }
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
    .del-dialog{
      .del-title{
        margin-bottom: 50px;
        padding-top: 40px;
      }
      .del-handle{
        .sureBtn,
        .delBtn{
          margin-left: 30px;
          cursor: pointer;
          width: 160px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          background-color: #1f7fb1;
          color: #fff;
          border-radius: 5px;
          float: left;
          font-size: 14px;
        }
        .delBtn{
          background-color: #ccc;
        }
      }
    }
  }
}
</style>

<template>
  <div class="codeManage">
    <!-- 面包屑 -->
    <breadcrumb :breadcrumbList='breadcrumbList'></breadcrumb>
    <div class="code-box">
      <div class="code-box-title">邀请码管理</div>
      <!-- 创建邀请码 -->
      <div class="code-box-creat" @click="showCreatCode">
        创建邀请码
      </div>
      <!-- 顶部表单 -->
      <div class="code-box-form">
        <el-form :inline="true" :model="codeform" class="demo-form-inline">
          <el-form-item label="" class="name">
            <el-input v-model="codeform.name" placeholder="请输入姓名或邀请码进行搜索"></el-input>
          </el-form-item>
          <el-form-item class="query">
            <el-button type="primary" @click="searchCode">搜索</el-button>
          </el-form-item>
          <el-form-item label="" class="level">
            <span class="title">等级</span>
            <el-select v-model="codeform.level" placeholder="请选择等级" @change="screenCode()" clearable >
              <el-option v-for="(item, index) in levelArr" :key="index" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="" class="attr">
            <span class="title">属性</span>
            <el-select v-model="codeform.property" placeholder="请选择属性" @change="screenCode()" clearable >
              <el-option v-for="(item, index) in attrArr" :key="index" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <!-- 底部表格 -->
      <div class="code-box-table" v-loading="loading">
        <el-table
          :data="codeList"
          stripe
          style="width: 100%"
          v-loading='loading'>
          <el-table-column
            prop="level"
            label="等级"
            >
          </el-table-column>
          <el-table-column
            label="折扣"
            >
            <template slot-scope="scope">
              {{scope.row.level | filtersLevel}}折
            </template>
          </el-table-column>
          <el-table-column
            prop="property"
            label="属性"
            >
          </el-table-column>
          <el-table-column
            prop="company"
            label="单位"
            >
          </el-table-column>
          <el-table-column
            prop="mark"
            label="代号"
            >
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            >
          </el-table-column>
          <el-table-column
            prop="number"
            label="编号"
            >
          </el-table-column>
          <el-table-column
            prop="code"
            label="邀请码"
            >
          </el-table-column>
          <el-table-column
            label="操作"
            width="300"
            >
            <template slot-scope="scope">
              <span class="handle" @click="showDelCode(scope.row)">删除</span>
              <!-- <span class="handle" @click="showEditCode(scope.row)">修改</span> -->
              <span class="handle" @click="showSendDialog(scope.row)">发送邀请码</span>
              <span class="handle" @click="showSendCouponDialog(scope.row)">发送优惠券</span>
            </template>
          </el-table-column>
        </el-table>
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

      <!-- 创建邀请码对话框 -->
      <div class="create-dialog">
        <el-dialog title="创建邀请码" :visible.sync="creatDialog" class="add-dialog">
          <el-form :model="createform">
            <el-form-item label="等级" prop="level" class="level">
              <el-select v-model="createform.level" placeholder="请选择">
                <el-option
                  v-for="item in levelArr"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="属性" prop="property" class="attr">
              <el-select v-model="createform.property" placeholder="请选择">
                <el-option
                  v-for="item in attrArr"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="姓名" prop="name" class="name">
              <el-input v-model="createform.name" class="ipt"></el-input>
            </el-form-item>
            <el-form-item label="单位" prop="company" class="company">
              <el-input v-model="createform.company" class="ipt"></el-input>
            </el-form-item>
            <el-form-item label="代号" prop="mark" class="mark">
              <span class="tip">(只能填写两位英文大写)</span>
              <el-input v-model="createform.mark" class="ipt"></el-input>
            </el-form-item>
            <el-form-item label="编号" prop="number" class="number">
              <span class="tip">(只能填写四位数字)</span>
              <el-input v-model="createform.number" class="ipt"></el-input>
            </el-form-item>
            <el-form-item class="handle clearfix">
              <div type="primary" class="getNewCode" @click="createNewCodeAdd">生成邀请码</div>
              <div class="newCode">
                <span>邀请码：</span>
                <span>{{newCode}}</span>
              </div>
              <div :class="{tip:true, show:markWran}">*代号输入有误，请重新输入</div>
              <div :class="{tip:true, show:numWran}">*编号输入有误，请重新输入</div>
            </el-form-item>
            <el-form-item class="btn">
              <div class="sureBtn" @click="createCode">确定创建</div>
              <div class="delBtn" @click="cancelHand('create')">取消</div>
            </el-form-item>
          </el-form>
        </el-dialog>
      </div>

      <!-- 修改邀请码对话框 -->
      <div class="edit-dialog">
        <el-dialog title="修改邀请码" :visible.sync="editDialog" class="add-dialog">
          <el-form :model="editform">
            <el-form-item label="等级" prop="level" class="level">
              <el-select v-model="editform.level" placeholder="请选择">
                <el-option
                  v-for="item in levelArr"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="属性" prop="attr" class="attr">
              <el-select v-model="editform.property" placeholder="请选择">
                <el-option
                  v-for="item in attrArr"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="姓名" prop="name" class="name">
              <el-input v-model="editform.name" class="ipt"></el-input>
            </el-form-item>
            <el-form-item label="单位" prop="company" class="company">
              <el-input v-model="editform.company" class="ipt"></el-input>
            </el-form-item>
            <el-form-item label="代号" prop="mark" class="mark">
              <span class="tip">(只能填写两位英文大写)</span>
              <el-input v-model="editform.mark" class="ipt"></el-input>
            </el-form-item>
            <el-form-item label="编号" prop="number" class="number">
              <span class="tip">(只能填写四位数字)</span>
              <el-input v-model="editform.number" class="ipt"></el-input>
            </el-form-item>
            <el-form-item class="handle clearfix">
              <div type="primary" class="getNewCode" @click="createNewCodeEdit">生成邀请码</div>
              <div class="newCode">
                <span>邀请码：</span>
                <span>{{newCode}}</span>
              </div>
              <div :class="{tip:true, show:markWran}">*代号输入有误，请重新输入</div>
              <div :class="{tip:true, show:numWran}">*编号输入有误，请重新输入</div>
            </el-form-item>
            <el-form-item class="btn">
              <div class="sureBtn" @click="editCode">确定修改</div>
              <div class="delBtn" @click="cancelHand('edit')">取消</div>
            </el-form-item>
          </el-form>
        </el-dialog>
      </div>

      <!-- 发送邀请码对话框 -->
      <div class="send-dialog">
        <el-dialog title="发送邀请码" :visible.sync="sendDialog" class="add-dialog">
          <el-form :model="sendform">
            <el-form-item label="用户手机号" prop="phone" class="phone">
              <el-input v-model="sendform.phone" class="ipt"></el-input>
            </el-form-item>
            <el-form-item label="邀请码" prop="inviteCode" class="inviteCode">
              <el-input v-model="sendform.code" class="ipt"></el-input>
            </el-form-item>
            <el-form-item class="handle">
              <div class="sureBtn" @click="sendCode">发送</div>
              <div class="delBtn" @click="cancelHand('send')">取消</div>
            </el-form-item>
          </el-form>
        </el-dialog>
      </div>

      <!-- 删除商品对话框 -->
      <div class="del-dialog">
        <el-dialog
        :visible.sync="delDialog"
        class="del-dialog">
          <div class="del-title">确定删除此邀请码？</div>
          <div class="del-handle">
            <div class="sureBtn" @click="delCode">删除</div>
            <div class="delBtn" @click="cancelHand('del')">取消</div>
          </div>
        </el-dialog>
      </div>

      <!-- 发送优惠券确认对话框 -->
      <div class="del-dialog">
        <el-dialog
        :visible.sync="sendCouponDialog"
        class="del-dialog">
          <div class="del-title">确定发送优惠券？</div>
          <div class="del-handle">
            <div class="sureBtn" @click="sendCoupon">确定</div>
            <div class="delBtn" @click="cancelHand('sendCoupon')">取消</div>
          </div>
        </el-dialog>
      </div>

    </div>
  </div>
</template>

<script>
import breadcrumb from '../../components/breadcrumb'
import api from '../../api/index'

export default {
  mounted () {
    // 首次进入获取邀请码
    this.getCode()
  },
  data () {
    return {
      // 加载动画开发时为false
      loading: false,
      // 面包屑数据
      breadcrumbList: [
        // {name: '首页', path: '/home'},
        {name: '邀请码', path: '/inviteCode'},
        {name: '邀请码管理', path: '/inviteCode/codeManage'}
      ],
      codeform: {
        name: '',
        inviteCode: '',
        level: '',
        property: ''
      },
      // 等级下拉框
      levelArr: [
        {label: 'A--9折折扣券，5张', value: 'A'},
        {label: 'B--9折折扣券，10张', value: 'B'},
        {label: 'C--9折折扣券，20张', value: 'C'},
        {label: 'D--8.5折折扣券，20张', value: 'D'}
      ],
      // 属性下拉框
      attrArr: [
        {label: 'A--集泰及分公司', value: 'A'},
        {label: 'B--集泰专营公司及经销商', value: 'B'},
        {label: 'C--联营公司', value: 'C'},
        {label: 'D--特约销售人员', value: 'D'},
        {label: 'E--其他', value: 'E'}
      ],
      // 底部表单数据
      codeList: [
        {
          'id':  45,
          'level': 'A',
          'property':  'A',
          'company': '测试',
          'mark':  'JT',
          'name':  '测试01 - A-A',
          'number':  '4960',
          'code':  'AAJT4960'
        }
      ],
      // 是否显示创建邀请码
      creatDialog: false,
      // 创建邀请码表单
      createform: {
        level: '',
        property: '',
        name: '',
        company: '',
        mark: '',
        number: ''
      },
      // 是否显示修改邀请码
      editDialog: false,
      // 修改邀请码表单
      editform: {
        level: '',
        property: '',
        name: '',
        company: '',
        mark: '',
        number: '',
        id: ''
      },
      // 显示删除邀请码
      delDialog: false,
      // 被删除的邀请码id
      delId: '',
      // 新邀请码
      RegTest1: /^[A-Z]{2,2}$/,
      RegTest2: /^\d{4,4}$/,
      newCode: '',
      // 显示发送邀请码对话框
      sendDialog: false,
      // 发送邀请码表单
      sendform: {
        phone: '',
        code: ''
      },
      //发送优惠券所需参数
      sendCouponForm: {
        level:'',
        code_id:''
      },
      // 显示发送优惠券对话框
      sendCouponDialog:false,
      // 总页数
      totalPage: 1,
      // 当前页数
      currentPage: 1,
      searchPage: 1,
      // 编号错误
      numWran: false,
      // 代号错误
      markWran: false
    }
  },
  components: {
    breadcrumb
  },
  methods: {
    // 显示创建邀请码对话框
    showCreatCode () {
      // 数据还原
      this.newCode = ''
      this.numWran = false
      this.markWran = false
      // 表单相关
      this.creatDialog = true
      this.createform = {
        level: '',
        property: '',
        name: '',
        company: '',
        mark: '',
        number: ''
      }
    },
    // 显示修改邀请码对话框
    showEditCode (item) {
      // 数据还原
      this.newCode = ''
      this.numWran = false
      this.markWran = false
      // 表单相关
      this.editDialog = true
      this.editform.level = item.level
      this.editform.property = item.property
      this.editform.name = item.name
      this.editform.company = item.company
      this.editform.mark = item.mark
      this.editform.number = item.number
      this.editform.id = item.id
    },
    // 显示发送邀请码对话框
    showSendDialog (item) {
      this.sendDialog = true
      this.sendform.code = item.code
    },
    // 显示删除邀请码对话框
    showDelCode (item) {
      this.delDialog = true
      this.delId = item.id
    },
    //显示发送优惠券弹窗
    showSendCouponDialog (item) {
      console.log(item);
      this.sendCouponDialog = true
      this.sendCouponForm.level = item.level
      this.sendCouponForm.code_id = item.id
    },
    // 控制页码到首页或尾页
    jumpToPage (page) {
      this.currentPage = page
      this.getCode(this.codeform.level, this.codeform.property, this.codeform.name, this.currentPage)
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
        this.getCode(this.codeform.level, this.codeform.property, this.codeform.name, this.currentPage)
      }
    },
    // 生成新的邀请码--新增
    createNewCodeAdd () {
      // 验证代号
      if (!this.RegTest1.test(this.createform.mark)) {
        this.markWran = true
      } else {
        this.markWran = false
      }
      // 验证编号
      if (!this.RegTest2.test(this.createform.number)) {
        this.numWran = true
      } else {
        this.numWran = false
      }

      // 输入正确
      if (this.RegTest1.test(this.createform.mark) && this.RegTest2.test(this.createform.number) && this.createform.level && this.createform.property) {
        this.newCode = this.createform.level + this.createform.property + this.createform.mark + this.createform.number
      }
    },
    // 生成新的邀请码--修改
    createNewCodeEdit () {
      // 验证代号
      if (!this.RegTest1.test(this.editform.mark)) {
        this.markWran = true
      } else {
        this.markWran = false
      }
      // 验证编号
      if (!this.RegTest2.test(this.editform.number)) {
        this.numWran = true
      } else {
        this.numWran = false
      }

      // 输入正确
      if (this.RegTest1.test(this.editform.mark) && this.RegTest2.test(this.editform.number) && this.editform.level && this.editform.property) {
        this.newCode = this.editform.level + this.editform.property + this.editform.mark + this.editform.number
      }
    },
    // 确认创建邀请码
    createCode () {
      this.creatDialog = false
      api.creatYqm({
        code: this.newCode,
        level: this.createform.level,
        property: this.createform.property,
        name: this.createform.name,
        company: this.createform.company,
        mark: this.createform.mark,
        number: this.createform.number
      }).then(res => {
        console.log(res, '创建邀请码')
        // 提示信息
        this.$message(res.message)
        // 刷新数据
        this.getCode()
      })
    },
    // 确认修改邀请码
    editCode () {
      this.editDialog = false
      api.editYqm({
        code: this.newCode,
        level: this.editform.level,
        property: this.editform.property,
        name: this.editform.name,
        company: this.editform.company,
        mark: this.editform.mark,
        number: this.editform.number,
        id: this.editform.id
      }).then(res => {
        console.log(res, '修改邀请码')
        // 提示信息
        this.$message(res.message)
        // 刷新数据
        this.getCode()
      })
    },
    // 确认发送邀请码
    sendCode () {
      this.sendDialog = false
      api.sendYqm({
        code: this.sendform.code,
        phone: this.sendform.phone,
        flag: 1
      }).then(res => {
        console.log(res, '发送邀请码')
        this.$message(res.message)
      })
    },
    // 确认删除邀请码
    delCode () {
      this.delDialog = false
      api.delYqm({
        id: this.delId
      }).then(res => {
        console.log(res, '删除邀请码')
        // 提示信息
        this.$message(res.message)
        // 刷新数据
        this.getCode()
      })
    },
    // 取消对话框显示操作
    cancelHand (item) {
      if (item === 'create') {
        this.creatDialog = false
      } else if (item === 'edit') {
        this.editDialog = false
      } else if (item === 'del') {
        this.delDialog = false
      } else if (item === 'send') {
        this.sendDialog = false
      } else if (item === 'sendCoupon') {
        this.sendCouponDialog = false
      }
    },
    //确定发送优惠券
    sendCoupon () {
      api.sendCoupon({
        level:this.sendCouponForm.level,
        code_id:this.sendCouponForm.code_id
      }).then(res=>{
        console.log(res)
        this.sendCouponDialog = false
        if(res.code == 200){
          this.$message({
            message: res.message,
            type: 'success',
          });
        }else{
          this.$message.error(res.message)
        }
      })
    },
    // 输入姓名或邀请码查询
    searchCode () {
      // 每次搜索重新从第一页加载
      this.currentPage = 1
      this.getCode(this.codeform.level, this.codeform.property, this.codeform.name, this.currentPage)
    },
    // 筛选属性或等级
    screenCode () {
      // 每次筛选重新从第一页加载
      this.currentPage = 1
      this.getCode(this.codeform.level, this.codeform.property, this.codeform.name, this.currentPage)
    },
    // 获取、查询邀请码接口
    getCode (level, property, search, page = 1) {
      this.loading = true //开启loading 动画
      api.getYqm({
        level: level,
        property: property,
        search: search,
        page: page
      }).then(res => {
        console.log(res, '获取邀请码')
        this.loading = false
        if (res.code === '200') {
          this.codeList = res.extraData.info
          if (Math.ceil(res.extraData.count / res.extraData.len) !== 0) {
            this.totalPage = Math.ceil(res.extraData.count / res.extraData.len)
          } else {
            this.totalPage = 1
          }
        }
      })
    }
  },
  filters: {
    // 等级过滤
    filtersLevel (level) {
      if (level === 'A' || level === 'B' || level === 'C') {
        return 9
      } else if (level === 'D') {
        return 8.5
      }
    }
  }
}
</script>
