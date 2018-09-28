<style lang="scss" scoped>
.goodsList{
  padding: 20px;
  padding-top: 55px;
  background-color: #f1f4f7;
  // height: 100%;
  box-sizing: border-box;
  position: relative;
  .goodsList-box{
    height: 100%;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 5px;
    // 标题
    .goodsList-box-title{
      height: 60px;
      line-height: 60px;
      padding-left: 15px;
      color: #5f6468;
      font-weight: 600;
      font-size: 18px;
      border-bottom: 1px solid #dcdcdc;
    }
    // 新添按钮
    .goodsList-add{
      width: 120px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background-color: #1f7fb1;
      color: #fff;
      border: 0;
      border-radius: 5px;
      margin-top: 20px;
      margin-left: 20px;
      cursor: pointer;
    }
    // 表格
    .goodsList-table{
      text-align: center;
      padding: 20px;
      box-sizing: border-box;
      height: 100%;
      .table{
        width: 100%;
        border: 1px solid #dcdcdc;
        border-bottom: 0;
        border-right: 0;
        .thead{
          .th{
            float: left;
            height: 50px;
            line-height: 50px;
            font-size: 16px;
            background-color: #19a78f;
            color: #fff;
            font-weight: 400;
            border-right: 1px solid #dcdcdc;
            border-bottom: 1px solid #dcdcdc;
            box-sizing: border-box;
          }
        }
        .tbody{
          width: 100%;
          .tr{
            width: 100%;
            box-sizing: border-box;
            .td{
              height: 140px;
              line-height: 140px;
              float: left;
              border-right: 1px solid #eee;
              border-bottom: 1px solid #eee;
              box-sizing: border-box;
              color: #5f6468;
              font-size: 14px;
              .moveUp,
              .moveDown,
              .del,
              .edit{
                height: 36px;
                line-height: 36px;
                cursor: pointer;
              }
              // 可点击
              .click{
                color: #1f7fb1;
              }
              // 图片
              .table-img{
                width: 100px;
                height: 100px;
              }
              // 名称长度
              .length{
                height: 14px;
                line-height: 14px;
                position: absolute;
                bottom: 20px;
                right: 25px;
                color: #c1c1c1;
              }
            }
          }
          .tr:hover{
            background-color: #f6f6f6;
          }
        }
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
  // 添加商品、编辑商品对话框
  .add-dialog,
  .edit-dialog{
    // 图片上传
    .item-img{
      position: relative;
      margin-bottom: 50px;
      .preview{
        position: absolute;
        top: -30px;
        left: 260px;
        width: 155px;
        height: 100px;
        line-height: 100px;
        .preview-tip{
          background-color: #f1f1f1;
          text-align: center;
          width: 100px;
          height: 100px;
          position: absolute;
          top: 0;
          right: 0;
        }
        img{
          position: absolute;
          top: 0;
          right: 0;
          width: 100px;
          height: 100px;
        }
      }
      .uploadImg{
        width: 120px;
        height: 35px;
        position: absolute;
        top: 0;
        left: 100px;
        z-index: 10;
        opacity: 0;
        cursor: pointer;
      }
      .uploadInput{
        position: absolute;
        top: 0px;
        left: 100px;
        width: 120px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        background-color: #1f7fb1;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
      }
    }
    // 商品名称
    .item-name{
      .ipt{
        width: 300px;
        height: 90px;
        border: 1px solid #dcdcdc;
        // outline:none;
        resize:none;
        padding-top: 15px;
        padding-left: 20px;
        box-sizing: border-box;
        color: #5f6468;
        font-size: 16px;
        font-family: '微软雅黑';
      }
      .max-input{
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #ccc;
        position: absolute;
        right: 40px;
        bottom: 5px;
      }
    }
    // 商品价格、位置
    .item-price,
    .item-position{
      position: relative;
      .ipt{
        width: 300px;
      }
    }
    .item-position{
      margin-bottom: 30px;
    }
    // 商品操作
    .item-handle{
      .sureBtn,
      .delBtn{
        text-align: center;
        display: inline-block;
        width: 160px;
        height: 35px;
        color: #fff;
        background-color: #1f7fb1;
        border-radius: 5px;
        cursor: pointer;
      }
      .delBtn{
        margin-left: 25px;
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
  .wran{
    color: #ff4e4e!important;
  }
  .kcInfo{
    margin-bottom: 15px;
  }
}
</style>

<template>
<div class="goodsList">
  <!-- 面包屑 -->
  <breadcrumb :breadcrumbList='breadcrumbList'></breadcrumb>

  <div class="goodsList-box">
    <div class="goodsList-box-title">商品管理</div>
    <button class="goodsList-add" @click="showAddDialog">+添加新商品</button>
    <!-- 主体商品表格 -->
    <div class="goodsList-table">
      <!-- <table>
        <thead>
          <tr>
            <th v-for='(item, index) in tableHead' :key="index">{{item}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='(item, index) in goodsList' :key="index">
            <td style="width:21%;padding:0">
              <div class="one test">
                <img :src="item.imgUrl" alt="" class="table-img">
              </div>
            </td>
            <td style="width:28%;position:relative;padding:0">
              <div class="two test">{{item.name}}</div>
              <div class="length">{{item.name.length}}/26</div>
            </td>
            <td style="width:17%;padding:0"><div class="three test">{{item.price}}</div></td>
            <td style="width:17%;padding:0">
              <div class="four test">
                <div class="position">首页位置：{{item.index}}</div>
                <div class="moveUp click" v-if="index != 0" @click="moveGoodUpOrDown(index, -1)">上移</div>
                <div class="moveDown click" v-if="index != (goodsList.length-1)" @click="moveGoodUpOrDown(index, 1)">下移</div>
              </div>
            </td>
            <td style="width:17%;padding:0">
              <div class="five test">
                <div class="edit click" @click="showEidtDialog(item)">修改</div>
                <div class="del click" @click="showDelDialog(index)">删除</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table> -->
      <div class="table" v-loading="loading">
        <div class="thead">
          <div class="tr clearfix">
            <div class="th" v-for='(item, index) in tableHead' :key="index" :style="item.style">{{item.name}}</div>
          </div>
        </div>
        <div class="tbody">
          <div class="tr clearfix" v-for='(item, index) in goodsList' :key="index">
            <div class="td" style="width:19%;padding-top:20px;">
              <img :src="$store.state.imgBaseUrl + item.goods_image" alt="" class="table-img">
            </div>
            <div class="td" style="width:26%;position:relative;">
              {{item.goods_name}}
              <div class="length">{{item.goods_name.length}}/26</div>
            </div>
            <div class="td" style="width:15%;">
              {{item.goods_price}}
            </div>
            <div class="td" style="width:15%;">
              <div class="position">首页位置：{{item.goods_order}}</div>
            </div>
            <div class="td" style="width:10%;">
              <div class="goods_code">{{item.goods_code}}</div>
            </div>
            <div class="td" style="width:15%;padding-top:15px;">
              <div class="edit click" @click="showEidtDialog(item)">修改</div>
              <div class="del click" @click="showDelDialog(item)">删除</div>
              <div class="del click" @click="seeCkInfo(item.goods_code)">库存信息</div>
            </div>
          </div>
        </div>
      </div>
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

  <!-- 添加新商品对话框 -->
  <div class="add">
    <el-dialog title="商品首页信息" :visible.sync="addDialog" class="add-dialog">
      <el-form :model="addform">
        <el-form-item label="商品首页图片：" prop="img" class="item-img">
          <input type='file' @change="getImgFileAdd" class="uploadImg"/>
          <div class="uploadInput">上传图片</div>
          <div class="preview">
            <div class="preview-word">预览:</div>
            <div class="preview-tip" v-if='!addform.goods_image'>请选择图片</div>
            <img  alt="" :src="addform.goods_image">
          </div>
        </el-form-item>
        <el-form-item label="商品首页名称：" prop="name" class="item-name">
          <!-- <input v-model="addform.name" class="ipt" maxlength='26' @input="checkText" /> -->
          <textarea v-model="addform.goods_name" class="ipt" />
          <div class="max-input" :class="{'wran': addGood_length >= 26}">{{addGood_length}}/26</div>
        </el-form-item>
        <el-form-item label="商品首页价格：" prop="price" class="item-price">
          <el-input v-model="addform.goods_price" class="ipt"></el-input>
        </el-form-item>
        <el-form-item label="商品存货编码：" prop="price" class="item-price">
          <el-input v-model="addform.goods_code" class="ipt"></el-input>
        </el-form-item>
        <el-form-item label="商品首页位置：" prop="position" class="item-position">
          <el-select v-model="addform.goods_order" placeholder="请选择" class="ipt">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="item-handle">
          <div @click="addNewGood" class="sureBtn">添加</div>
          <div @click="cancelHand('add')" class="delBtn">取消</div>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>

  <!-- 编辑商品对话框 -->
  <div class="edit">
    <el-dialog title="商品首页信息" :visible.sync="editDialog" class="add-dialog">
      <el-form :model="editform">
        <el-form-item label="商品首页图片：" prop="img" class="item-img">
          <input type='file' @change="getImgFileEdit" class="uploadImg"/>
          <div class="uploadInput">修改图片</div>
          <div class="preview">
            <div class="preview-word">预览:</div>
            <div class="preview-tip" v-if='!editform.goods_image'>请选择图片</div>
            <img :src="editform.goods_image" alt="">
          </div>
        </el-form-item>
        <el-form-item label="商品首页名称：" prop="name" class="item-name">
          <textarea v-model="editform.goods_name" class="ipt" />
          <div class="max-input" :class="{'wran': addGood_length >= 26}">{{addGood_length}}/26</div>
        </el-form-item>
        <el-form-item label="商品首页价格：" prop="price" class="item-price">
          <el-input v-model="editform.goods_price" class="ipt"></el-input>
        </el-form-item>
        <el-form-item label="商品首页位置：" prop="position" class="item-position">
          <el-select v-model="editform.goods_order" placeholder="请选择" class="ipt">
            <el-option
              v-for="item in editOption"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="item-handle">
          <div class="sureBtn" @click="editOldGood">修改</div>
          <div class="delBtn" @click="cancelHand('edit')">取消</div>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>

  <!-- 删除商品对话框 -->
  <div class="del">
    <el-dialog
    :visible.sync="delDialog"
    class="del-dialog">
      <div class="del-title">确定删除此商品？</div>
      <div class="del-handle">
        <div class="sureBtn" @click="delGoodHandle">删除</div>
        <div class="delBtn" @click="cancelHand('del')">取消</div>
      </div>
    </el-dialog>
  </div>

  <!-- 显示库存信息对话框 -->
  <div class="info">
    <el-dialog
      title="库存信息"
      :visible.sync="infoDialog"
      width="30%"
      center>
      <div class="kcInfo" v-if="!kcInfo.tip">商品库存：{{kcInfo.sec_num}}{{kcInfo.sec_unit}}</div>
      <div class="kcInfo" v-if="kcInfo.tip">{{kcInfo.tip}}</div>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button>取 消</el-button> -->
        <el-button type="primary" @click="hiddenInfoDialog">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</div>
</template>


<script>
import breadcrumb from '../../components/breadcrumb'
import api from '../../api/index'
export default {
  created () {
    this.getAllGoods(this.currentPage)
    // 匹配位置输入框
    // this.value = this.options[this.options.length - 1].label
  },
  data () {
    return {
      baseUrl: 'https://oa.jointas.com',
      // 是否显示loading动画
      loading:false,
      // 面包屑数据
      breadcrumbList: [
        {name: '商品管理', path: '/goods'},
        {name: '首页商品', path: '/goods/goodsList'}
      ],
      tableHead: [
        {name: '商品首页图片', style: 'width:19%;'},
        {name: '商品首页名称', style: 'width:26%;position:relative;'},
        {name: '价格', style: 'width:15%;'},
        {name: '首页位置', style: 'width:15%;'},
        {name: '存货编码', style: 'width:10%;'},
        {name: '操作', style: 'width:15%;'}
      ],
      // 商品数据
      // goodsList: [],
      goodsList: [
        {
          goods_image: '',
          goods_name: '安泰-635防霉密封胶胶',
          goods_price: '710',
          goods_order: 1,
          goods_code: '030323545'
        },
        {
          goods_image: '',
          goods_name: '安泰-636防霉密封胶胶胶',
          goods_price: '720',
          goods_order: 2,
          goods_code: '030323545'
        },
        {
          goods_image: '',
          goods_name: '安泰-622防霉密封胶',
          goods_price: '730',
          goods_order: 3,
          goods_code: '030323545'
        }
      ],
      fileList: [],
      imgUrl: '',
      // 显示添加新商品对话框
      addDialog: false,
      // 添加表单数据
      addform: {
        goods_code: '',
        goods_image: '',
        goods_name: '',
        goods_price: '',
        goods_order: '' // 第（商品总长度/2）行（单右双左）
      },
      // 显示编辑商品对话框
      editDialog: false,
      // 修改表单数据
      editform: {
        id: '',
        goods_code: '',
        goods_image: '',
        goods_name: '',
        goods_price: '',
        goods_order: '' // 第（商品总长度/2）行（单右双左）
      },
      // 显示删除商品对话框
      delDialog: false,
      delform:{
        id:'',
        goods_code:''
      },
      // 添加商品选择位置框值
      options: [{value: 1, label: 1}],
      editOption: [],
      currentPage: 1,
      totalPage: 1,
      count: 4,
      // 显示库存信息对话框
      infoDialog: false,
      // 对应商品的库存信息
      kcInfo: {
        sec_num: 100,
        sec_unit: '箱',
        tip: ''
      }
    }
  },
  components: {
    breadcrumb
  },
  methods: {
    // 显示添加商品对话框
    showAddDialog () {
      this.addDialog = true
      this.addform.goods_order = this.options[this.options.length - 1].label
      this.imgUrl = ''
    },
    // 添加商品位置选择框数据匹配
    addPickData () {
      if (this.goodsList.length !== 0) {
        this.options = [{value: 1, label: 1}]
        for (let i = 0; i < this.count; i++) {
          this.options.push({})
          this.options[this.options.length - 1].value = i + 2
          this.options[this.options.length - 1].label = i + 2
        }
      }
    },
    // 编辑商品位置选择框数据匹配
    editPickData () {
      this.editOption = []
      for (let i = 0; i < this.count; i++) {
        this.editOption.push({})
        this.editOption[this.editOption.length - 1].value = i + 1
        this.editOption[this.editOption.length - 1].label = i + 1
      }
    },
    // 确认添加商品操作
    addNewGood () {
      this.addDialog = false
      api.addGood({
        goods_name: this.addform.goods_name,
        goods_price: this.addform.goods_price,
        goods_order: this.addform.goods_order,
        goods_image: this.addform.goods_image,
        goods_code: this.addform.goods_code
      }).then(res => {
        console.log(res, '新增商品')
        this.$message(res.message)
        // 清空数组
        this.addform = {
          goods_image: '',
          goods_name: '',
          goods_price: '',
          goods_order: '',
          goods_code: ''
        }
        this.getAllGoods(this.currentPage)
      })
    },
    // 确认修改商品操作
    editOldGood () {
      this.editDialog = false
      api.editGood({
        goods_code:this.editform.goods_code,
        goods_name: this.editform.goods_name,
        goods_price: this.editform.goods_price,
        goods_order: this.editform.goods_order,
        goods_image: this.editform.goods_image,
        id: this.editform.id
      }).then(res => {
        console.log(res, '修改商品')
        this.$message(res.message)
        this.getAllGoods(this.currentPage)
      })
    },
    // 显示修改商品对话框
    showEidtDialog (row) {
      this.editDialog = true
      this.editform.goods_name = row.goods_name
      this.editform.goods_image = row.goods_image
      this.editform.goods_price = row.goods_price
      this.editform.goods_order = row.goods_order
      this.editform.goods_code = row.goods_code
      this.editform.id = row.id
    },
    // 取消对话框操作
    cancelHand (item) {
      if (item === 'edit') {
        this.editDialog = false
      } else if (item === 'add') {
        this.addDialog = false
        this.addform = {
          goods_image: '',
          goods_name: '',
          goods_price: '',
          goods_order: '',
          goods_code: ''
        }
      } else if (item === 'del') {
        this.delDialog = false
      }
    },
    // 显示删除商品对话框
    showDelDialog (item) {
      this.delDialog = true
      console.log('删除item',item)
      this.delform.id = item.id
      this.delform.goods_code = item.goods_code
    },
    // 执行删除商品操作
    delGoodHandle () {
      this.delDialog = false
      api.delGood({
        id: this.delform.id,
        goods_code: this.delform.goods_code
      }).then(res => {
        console.log(res, '删除商品')
        this.$message(res.message)
        this.getAllGoods(this.currentPage)
      })
    },
    // 添加图片获取图片文件流
    getImgFileAdd (e) {
      let that = this
      let img = e.target.files[0]
      let oFReader = new FileReader()
      oFReader.readAsDataURL(img)
      oFReader.onload = function (oFREvent) {
        that.addform.goods_image = oFREvent.target.result
      }
      e.target.value = ''
    },
    // 修改图片获取图片文件流
    getImgFileEdit (e) {
      let that = this
      let img = e.target.files[0]
      let oFReader = new FileReader()
      oFReader.readAsDataURL(img)
      oFReader.onload = function (oFREvent) {
        that.editform.goods_image = oFREvent.target.result
        console.log(that.editform.goods_image)
      }
      e.target.value = ''
    },
    // 判断商品上移或下移
    moveGoodUpOrDown (index, way) {
      let temp1 = this.goodsList[index]
      let temp2 = this.goodsList[index + way]
      this.$set(this.goodsList, index + way, temp1)
      this.$set(this.goodsList, index, temp2)
    },
    // 控制页码到首页或尾页
    jumpToPage (page) {
      this.currentPage = page
      this.getAllGoods(this.currentPage)
    },
    // 控制页码到上一页或下一页
    nextOrPrevPage (page) {
      this.currentPage += page
      if (this.currentPage >= 1 && this.currentPage <= this.totalPage) {
        // 发请求
        this.getAllGoods(this.currentPage)
      }
      if (this.currentPage <= 1) {
        this.currentPage = 1
      }
      if (this.currentPage > this.totalPage && this.totalPage !== 0) {
        this.currentPage = this.totalPage
      }
    },
    // 显示查看库存信息
    seeCkInfo (code) {
      this.infoDialog = true
      api.getGoodsStorage({
        goods_code: code
      }).then(res => {
        console.log(res, '查看库存')
        if (res.code === '200') {
          if (res.extraData.info) {
            this.kcInfo.tip = ''
            this.kcInfo = res.extraData.info
          } else {
            this.kcInfo.sec_num = 0
            this.kcInfo.tip = '此库存编码不在库存列表中，请更新库存表或检查编码是否正确!'
          }
        }
      })
    },
    hiddenInfoDialog () {
      this.infoDialog = false
    },
    // 获取商品列表
    getAllGoods (page) {
      this.loading = true
      api.getGoodList({
        page: page
      }).then(res => {
        console.log(res, '获取商品列表')
        this.loading = false
        if (res.code === '200') {
          this.goodsList = res.extraData.info
          // 商品总个数
          this.count = res.extraData.count
          // 计算总页数
          if (Math.ceil(res.extraData.count / res.extraData.len) !== 0) {
            this.totalPage = Math.ceil(res.extraData.count / res.extraData.len)
          } else {
            this.totalPage = 1
          }
          this.addPickData()
          this.editPickData()
        }
      })
      .catch(error=>{
        this.loading = false
      })
    }
  },
  computed: {
    // 计算商品名称的长度
    addGood_length () {
      return this.addform.goods_name.length
    },
    editGood_length () {
      return this.editform.goods_name.length
    }
  }
}
</script>
