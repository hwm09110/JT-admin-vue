<style lang="scss" scoped>
.goodsDetail{
  padding: 20px;
  padding-top: 55px;
  background-color: #f1f4f7;
  // height: 100%;
  box-sizing: border-box;
  position: relative;
  .goodsDetail-box{
    height: 100%;
    border-radius: 5px;
    background-color: #fff;
    box-sizing: border-box;
    // 标题
    .goodsDetail-box-title{
      height: 60px;
      line-height: 60px;
      padding-left: 15px;
      color: #5f6468;
      font-weight: 600;
      font-size: 18px;
      border-bottom: 1px solid #dcdcdc;
      margin-bottom: 20px;
    }
    .goodsDetail-box-item-list{
      padding: 0 20px;
      .goodsDetail-box-item{
        // 首页信息
        margin-bottom: 50px;
        .item-homeInfo{
          padding-left: 30px;
          height: 50px;
          width: 100%;
          box-sizing: border-box;
          line-height: 50px;
          background-color: #19a78f;
          color: #fff;
          .title{
            margin-right: 35px;
          }
          .name,.price,.position{
            margin-right: 50px;
          }
        }
        // 商品详细信息
        .item-goodDesc{
          color: #5f6468;
          width: 80%;
          box-sizing: border-box;
          border-right: 1px solid #dcdcdc;
          border-left: 1px solid #dcdcdc;
          float: left;
          // 商品图片
          .item-img{
            // width: 500px;
            height: 190px;
            // 左边
            .img-left{
              width: 50%;
              box-sizing: border-box;
              float: left;
              height: 190px;
              border-right: 1px solid #dcdcdc;
              position: relative;
              .img-title{
                float: left;
                line-height: 190px;
                margin-left: 30px;
                margin-right: 50px;
                width: 70px;
              }
              .img-content{
                float: left;
                width: 260px;
                margin: 7px;
              }
              .length{
                position: absolute;
                bottom: 10px;
                right: 10px;
                color: #aaa;
              }
              img{
                width: 70px;
                height: 70px;
                padding: 8px;
              }
            }
            // 右边
            .img-right{
              width: 50%;
              float: left;
              .img-title{
                margin-left: 30px;
                margin-right: 50px;
                float: left;
                height: 190px;
                line-height: 190px;
              }
              .img-content{
                float: left;
                padding-top: 20px;
                padding-left: 20px;
              }
              img{
                width: 116px;
                height: 156px;
              }
            }
          }
          // 商品属性(名称、价格)
          .item-attr{
            box-sizing: border-box;
            height: 100px;
            font-size: 16px;
            border-top: 1px solid #dcdcdc;
            .name{
              // width: 100%;
              width: 50%;
              height: 100px;
              float: left;
              box-sizing: border-box;
              &-title{
                line-height: 100px;
                float: left;
                margin-right: 30px;
                margin-left: 30px;
                width: 70px;
              }
              &-content{
                width: 67%;
                height: 100%;
                box-sizing: border-box;
                padding-top: 20px;
                float: left;
                line-height: 20px;
              }
            }
            .price{
              box-sizing: border-box;
              width: 50%;
              height: 100px;
              float: left;
              line-height: 100px;
              &-title{
                float: left;
                margin-right: 50px;
                margin-left: 30px;
              }
              &-content{
                float: left;
                span{
                  margin-right: 20px;
                }
              }
            }
          }
          // 商品详细介绍
          .item-introduce{
            box-sizing: border-box;
            height: 100px;
            border-top: 1px solid #dcdcdc;
            border-bottom: 1px solid #dcdcdc;
            .introduce-title{
              float: left;
              margin-left: 30px;
              margin-right: 30px;
              width: 70px;
              padding-top: 30px;
              text-align: left;
            }
            .introduce-content{
              float: left;
              height: 100px;
              line-height: 100px;
            }
          }
        }
        // 商品操作
        .item-handle{
          width: 20%;
          box-sizing: border-box;
          height: 390px;
          float: left;
          text-align: center;
          border-right: 1px solid #dcdcdc;
          border-bottom: 1px solid #dcdcdc;
          .handle-title{
            height: 50px;
            line-height: 50px;
            margin-bottom: 50px;
            color: #5f6468;
          }
          .handle-content{
            .btn{
              cursor: pointer;
              color: #1f7fb1;
              height: 40px;
            }
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
  .add,
  .edit{
    .add-dialog{
      // 商品图片
      .item-imgs{
        position: relative;
        margin-bottom: 120px;
        .good-imgs{
          position: absolute;
          top: 0px;
          left: 230px;
          .imgsPrev{
            float: left;
          }
          .imgsList{
            float: left;
            width: 310px;
            padding-top: 18px;
            padding-left: 32px;
            box-sizing: border-box;
            position: absolute;
            top: -54px;
            left: 20px;
            // border: 1px solid #dcdcdc;
            .imgsList-item{
              width: 70px;
              height: 70px;
              position: relative;
              padding: 12px 10px;
              float: left;
              .img-item{
                position: absolute;
                top: 0px;
                left: 0px;
                width: 70px;
                height: 70px;
                padding: 5px 10px;
                display: block;
              }
              .topDel{
                width: 18px;
                height: 18px;
                font-size: 18px;
                background-color: #fb4242;
                color: #fff;
                line-height: 18px;
                text-align: center;
                position: absolute;
                top: 5px;
                right: 10px;
                cursor: pointer;
              }
            }
            .img-default{
              position: relative;
              z-index: -1;
              display: inline-block;
              width: 70px;
              height: 70px;
              margin: 5px 10px;
              background: url(../../images/upload_df1.png) no-repeat;
            }
          }
        }
        .tip{
          font-size: 12px;
          color: #aaa;
          position: absolute;
          top: 30px;
          left: 0;
          width: 55px;
          line-height: 18px;
        }
        .uploadImg{
          width: 120px;
          height: 35px;
          position: absolute;
          top: 0;
          left: 80px;
          z-index: 10;
          opacity: 0;
          cursor: pointer;
        }
        .uploadInput{
          position: absolute;
          top: 0px;
          left: 80px;
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
      // 商品介绍图片
      .item-introduceImg{
        margin-bottom: 139px;
        position: relative;
        .good-img{
          // width: 200px;
          // height: 150px;
          position: absolute;
          top: 0px;
          left: 228px;
          // padding-left: 20px;
          // border: 1px solid #dcdcdc;
          .imgPrev{
            float: left;
            line-height: 44px;
          }
          .imgView{
            height: 160px;
            width: 116px;
            float: left;
            position: absolute;
            top: 0px;
            left: 63px;
            background: url(../../images/upload_df2.png) no-repeat;
            .topDel{
              width: 18px;
              height: 18px;
              font-size: 18px;
              background-color: #fb4242;
              color: #fff;
              line-height: 18px;
              text-align: center;
              position: absolute;
              top: 0px;
              right: 0px;
              cursor: pointer;
            }
            .hidden{
              display: none;
            }
            img{
              height: 160px;
              width: 116px;
              display: block;
            }
          }
        }
        .uploadImg{
          width: 120px;
          height: 35px;
          position: absolute;
          top: 0;
          left: 80px;
          z-index: 10;
          opacity: 0;
          cursor: pointer;
        }
        .uploadInput{
          position: absolute;
          top: 0px;
          left: 80px;
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
      // 商品名称、详情介绍
      .item-introduce,
      .item-name{
        margin-bottom: 0px;
        .ipt{
          padding-top: 18px;
          padding-left: 18px;
          box-sizing: border-box;
          font-family: '微软雅黑';
          width: 440px;
          height: 88px;
          resize: none;
          border: 0;
          border: 1px solid #dcdcdc;
        }
      }
      // 商品价格
      .item-color,
      .item-unit,
      .item-size{
        margin-bottom: 10px;
        .ipt{
          width: 440px;
          height: 35px;
          padding-left: 17px;
          box-sizing: border-box;
          border: 0;
          border: 1px solid #dcdcdc;
        }
        .ipt:focus {
          outline-color:rgb(77, 144, 254);
          outline-offset:-2px;
          outline-style:auto;
          outline-width:5px;
        }
      }
      .item-color{
        height: 80px;
        position: relative;
        // 添加多色
        .inputColor{
          width: 420px;
          position: absolute;
          top: 0px;
          left: 90px;
        }
        .addColor{
          position: absolute;
          top: 45px;
          left: 0px;
          text-align: center;
          border: 1px solid #1f7fb1;
          border-radius: 5px;
          color: #1f7fb1;
          font-size: 14px;
          width: 80px;
          height: 30px;
          line-height: 30px;
          cursor: pointer;
        }
        .ipt{
          width: 50px;
          margin-right: 10px;
          padding-left: 10px;
        }
      }
      .item-handle{
        .sureBtn,
        .cancelBtn{
          float: left;
          text-align: center;
          width: 160px;
          height: 35px;
          line-height: 35px;
          background-color: #1f7fb1;
          color: #fff;
          border-radius: 5px;
          font-size: 14px;
          cursor: pointer;
        }
        .cancelBtn{
          background-color: #ccc;
          margin-left: 30px;
        }
      }
    }
  }
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
<div class="goodsDetail">
  <breadcrumb :breadcrumbList='breadcrumbList'></breadcrumb>
  <div class="goodsDetail-box">
    <!-- 每项商品详情 -->
    <div class="goodsDetail-box-title">商品管理</div>
    <div class="goodsDetail-box-item-list">
      <div class="goodsDetail-box-item clearfix" v-for="(item, index) in goodsHomeInfo" :key="index">
        <!-- 首页信息 -->
        <div class="item-homeInfo">
          <span class="title">商品首页信息:</span>
          <span class="name">{{item.goods_name}}</span>
          <span class="price">价格：￥{{item.goods_price}}</span>
          <span class="position">位置：{{item.goods_order}}</span>
        </div>
        <!-- 商品详细信息 -->
        <div class="item-goodDesc clearfix">
          <!-- 商品图片 -->
          <div class="item-img">
            <div class="img-left">
              <div class="img-title">商品图片</div>
              <div class="img-content">
                <img :src="$store.state.imgBaseUrl+imgUrl" alt="" v-for="(imgUrl, imgIndex) in goodsDescList[index].images" :key="imgIndex" class="goodImgs">
              </div>
              <div class="length">{{goodsDescList[index].imgLen || 0}}/6</div>
            </div>
            <div class="img-right">
              <div class="img-title">商品详细介绍图片</div>
              <div class="img-content">
                <img v-if="goodsDescList[index].intro_image" :src="$store.state.imgBaseUrl+goodsDescList[index].intro_image" alt="">
              </div>
            </div>
          </div>
          <!-- 商品属性(名称、价格) -->
          <div class="item-attr">
            <div class="name">
              <div class="name-title">详细介绍</div>
              <div class="name-content">
                {{goodsDescList[index].goods_intro}}
              </div>
            </div>
            <div class="price">
              <div class="price-title">商品规格</div>
              <div class="price-content">
                <span>颜色：{{goodsDescList[index].color}}</span>
                <span>单位：{{goodsDescList[index].unit}}</span>
                <span>型号：{{goodsDescList[index].type}}</span>
              </div>
            </div>
          </div>
          <!-- 商品详细介绍 -->
          <div class="item-introduce">
            <div class="introduce-title">商品用途</div>
            <div class="introduce-content">
              {{goodsDescList[index].goods_use}}
            </div>
          </div>
        </div>
        <!-- 商品操作 -->
        <div class="item-handle">
          <div class="handle-title">
            操作
          </div>
          <div class="handle-content">
            <div class="btn" v-if="goodsDescList[index].goods_intro" @click="showEditDescDialog(goodsDescList[index])">编辑</div>
            <div class="btn" v-if="!goodsDescList[index].goods_intro" @click="showAddDescDialog(item.id)">添加</div>
            <div class="btn" @click="showDelGoodDesc(goodsDescList[index].detail_id)">删除商品详情</div>
            <div class="btn" @click="showDelGood(item.id)">删除商品</div>
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

  <!-- 添加商品详情对话框 -->
  <div class="add">
    <el-dialog title="商品详情信息" :visible.sync="addDialog" class="add-dialog">
      <el-form :model="addform">
        <el-form-item label="商品图片 :" prop="imgs" class="item-imgs">
          <span class="tip">最多上传6张</span>
          <!-- 未设置上传数量限制 -->
          <input type="file" class="uploadImg" multiple @change="getImgFileAddMore">
          <div class="uploadInput">上传图片</div>
          <div class="good-imgs clearfix">
            <div class="imgsPrev">预览:</div>
            <div class="imgsList">
              <div v-for="(item, index) in 6" :key="index" class="img-default"></div>
            </div>
            <div class="imgsList">
              <div class="imgsList-item" v-for="(item, index) in addform.images" :key="index">
                <img :src="item" alt="" class="img-item">
                <div class="topDel" @click="delThisImgAdd(index)" v-show="item">-</div>
              </div>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="商品介绍图片 :" prop="introduceImg" class="item-introduceImg">
          <input type="file" class="uploadImg" @change="getImgFileAddSingle">
          <div class="uploadInput">上传图片</div>
          <div class="good-img">
            <div class="imgPrev">预览：</div>
            <div class="imgView">
              <img :src="addform.intro_image" alt="">
              <div :class="{topDel: true, hidden: topDelHiddenAdd}" @click="delImgAdd"  v-show="addform.intro_image">-</div>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="详细介绍 :" prop="name" class="item-name">
          <textarea v-model="addform.goods_intro" class="ipt" />
        </el-form-item>
        <el-form-item label="商品用途 :" prop="introduce" class="item-introduce">
          <textarea v-model="addform.goods_use" class="ipt" />
        </el-form-item>
        <el-form-item label="商品颜色 :" prop="color" class="item-color">
          <div class="inputColor">
            <input v-model="addform.colors[index]" class="ipt" v-for="(item, index) in addform.colors" :key="index"/>
          </div>
          <div class="addColor" @click="addNewColor">新增颜色</div>
        </el-form-item>
        <el-form-item label="商品单位 :" prop="unit" class="item-unit">
          <input v-model="addform.unit" class="ipt" />
        </el-form-item>
        <el-form-item label="商品型号 :" prop="size" class="item-size">
          <input v-model="addform.type" class="ipt" />
        </el-form-item>
        <el-form-item class="item-handle">
          <div class="sureBtn" @click="addNewDesc()">添加</div>
          <div class="cancelBtn" @click="cancelHand('add')">取消</div>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>

  <!-- 编辑商品详情对话框 -->
  <div class="edit">
    <el-dialog title="商品详情信息" :visible.sync="editDialog" class="add-dialog">
      <el-form :model="editform">
        <el-form-item label="商品图片 :" prop="imgs" class="item-imgs">
          <span class="tip">最多上传6张</span>
          <!-- 未设置上传数量限制 -->
          <input type="file" class="uploadImg" multiple @change="getImgFileEditMore">
          <div class="uploadInput">上传图片</div>
          <div class="good-imgs clearfix">
            <div class="imgsPrev">预览:</div>
            <div class="imgsList">
              <div v-for="(item, index) in 6" :key="index" class="img-default"></div>
            </div>
            <div class="imgsList">
              <div class="imgsList-item" v-for="(item, index) in editform.images" :key="index">
                <img :src="item" alt="" class="img-item">
                <div class="topDel" @click="delThisImgEdit(index)" v-show="item">-</div>
              </div>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="商品介绍图片 :" prop="introduceImg" class="item-introduceImg">
          <input type="file" class="uploadImg" @change="getImgFileEditSingle">
          <div class="uploadInput">上传图片</div>
          <div class="good-img">
            <div class="imgPrev">预览：</div>
            <div class="imgView">
              <img :src="editform.intro_image" alt="">
              <div :class="{topDel: true, hidden: topDelHiddenEdit}" @click="delImgEdit"  v-show="editform.intro_image">-</div>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="详细介绍 :" prop="name" class="item-name">
          <textarea v-model="editform.goods_intro" class="ipt" />
        </el-form-item>
        <el-form-item label="商品用途 :" prop="introduce" class="item-introduce">
          <textarea v-model="editform.goods_use" class="ipt" />
        </el-form-item>
        <el-form-item label="商品颜色 :" prop="color" class="item-color">
          <div class="inputColor">
            <input v-model="editform.colors[index]" class="ipt" v-for="(item, index) in editform.colors" :key="index"/>
          </div>
          <div class="addColor" @click="addNewColorEdit">新增颜色</div>
          <!-- <input v-model="editform.color" class="ipt" /> -->
        </el-form-item>
        <el-form-item label="商品单位 :" prop="unit" class="item-unit">
          <input v-model="editform.unit" class="ipt" />
        </el-form-item>
        <el-form-item label="商品型号 :" prop="size" class="item-size">
          <input v-model="editform.type" class="ipt" />
        </el-form-item>
        <el-form-item class="item-handle">
          <div class="sureBtn" @click="doEditGoodDesc">编辑</div>
          <div class="cancelBtn" @click="cancelHand('edit')">取消</div>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>

  <!-- 删除商品详情对话框 -->
  <div class="del-goodDesc">
    <el-dialog
    :visible.sync="showDelGoodsDesc"
    class="del-dialog">
      <div class="del-title">确定删除此商品详情？</div>
      <div class="del-handle">
        <div class="sureBtn" @click="doDelGoodDesc">删除</div>
        <div class="delBtn" @click="cancelHand('goodDesc')">取消</div>
      </div>
    </el-dialog>
  </div>

  <!-- 删除商品对话框 -->
  <div class="del-good">
    <el-dialog
    :visible.sync="showDelGoods"
    class="del-dialog">
      <div class="del-title">确定删除此商品？</div>
      <div class="del-handle">
        <div class="sureBtn" @click="doDelGood">删除</div>
        <div class="delBtn" @click="cancelHand('good')">取消</div>
      </div>
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
    this.getAllGoodsDesc(this.currentPage)
  },
  data () {
    return {
      baseUrl: 'https://oa.jointas.com',
      // 面包屑
      breadcrumbList: [
        // {name: '首页', path: '/home'},
        {name: '商品管理', path: '/goods'},
        {name: '商品详情', path: '/goods/goodsDetail'}
      ],
      // 商品详细数据
      goodsDescList: [
        {
          intro_image: '',
          goods_intro: '',
          goods_use: '',
          id: '1',
          goodImgUrls: [],
          goodDescImg: '',
          nameDesc: '',
          introduce: '',
          color:'',
          images: [
            // 'http://pic.58pic.com/58pic/10/97/02/30a58PICH7N.jpg',
            // 'http://pic.58pic.com/58pic/10/97/02/30a58PICH7N.jpg',
            // 'http://pic.58pic.com/58pic/10/97/02/30a58PICH7N.jpg',
            // 'http://pic.58pic.com/58pic/10/97/02/30a58PICH7N.jpg'
          ]
        }
      ],
      // 商品首页信息
      goodsHomeInfo: [
        {
          goods_name: '安泰-636防霉密封胶',
          goods_price: '720',
          goods_order: '1',
          id: '2'
        }
        // {
        //   name: '安泰-636防霉密封胶',
        //   price: '730',
        //   position: '2'
        // },
        // {
        //   name: '安泰-636防霉密封胶',
        //   price: '740',
        //   position: '3'
        // }
      ],
      // 显示添加商品详情对话框
      addDialog: false,
      // 添加商品详情对话框表单数据
      addform: {
        id: '',
        goods_use: '',
        // nameDesc: '',
        // price: '',
        // introduce: '',
        color: '',
        colors: [''],
        colorsList: [],
        unit: '',
        type: '',
        // fileList: [],
        // file: [],
        intro_image: '',
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        image6: '',
        images: []
      },
      // 显示编辑商品详情对话框
      editDialog: false,
      // 编辑商品详情对话框表单数据
      editform: {
        id: '',
        goods_intro: '',
        goods_use: '',
        intro_image: '',
        color: '',
        colorsList: [],
        colors: [],
        unit: '',
        type: '',
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        image6: '',
        images: [
          // 'http://pic.58pic.com/58pic/10/97/02/30a58PICH7N.jpg'
        ]
      },
      // 显示删除商品详情对话框
      showDelGoodsDesc: false,
      // 删除商品详情id
      delDescId: '',
      // 显示删除商品对话框
      showDelGoods: false,
      // 删除商品id
      delId: '',
      // 新增对话框右上角
      topDelHiddenAdd: true,
      // 编辑对话框右上角
      topDelHiddenEdit: false,
      // 总页数
      totalPage: 1,
      // 总条数
      count: 0,
      // 当前页
      currentPage: 1
    }
  },
  components: {
    breadcrumb
  },
  methods: {
    // 新增颜色--添加
    addNewColor () {
      this.addform.colors.push('')
      if (this.addform.colors.length > 14) {
        this.addform.colors.length = 14
        this.$message('最多只能添加14种颜色！')
      }
    },
    // 新增颜色--编辑
    addNewColorEdit () {
      this.editform.colors.push('')
      if (this.editform.colors.length > 14) {
        this.editform.colors.length = 14
        this.$message('最多只能添加14种颜色！')
      }
    },
    // 显示添加商品详情对话框
    showAddDescDialog (id) {
      this.addDialog = true
      this.addform.id = id
    },
    // 显示编辑商品详情对话框
    showEditDescDialog (item) {
      this.editform = {
        id: '',
        goods_intro: '',
        goods_use: '',
        intro_image: '',
        color: '',
        colors: [],
        unit: '',
        type: '',
        images: []
      }
      this.editDialog = true
      this.topDelHiddenEdit = false
      this.editform.id = item.detail_id
      this.editform.goods_intro = item.goods_intro
      this.editform.goods_use = item.goods_use
      this.editform.intro_image = item.intro_image
      this.editform.unit = item.unit
      this.editform.color = item.color
      this.editform.type = item.type
      this.editform.colors = item.color?item.color.split(','):['黑']
      // this.editform.colorsList = item.colors || []
      if (item.images) {
        for (let i = 0; i < item.images.length; i++) {
          if (item.images[i]) {
            // 如果有就加上路径--没有：新添的图片为base64
            this.editform.images[i] = this.$store.state.imgBaseUrl + item.images[i]
          }
        }
      } else {
        this.editform.images = []
      }
    },
    // 显示删除商品详情对话框
    showDelGoodDesc (id) {
      console.log(id, 'delid')
      this.showDelGoodsDesc = true
      this.delDescId = id
    },
    // 执行删除商品详情操作
    doDelGoodDesc () {
      this.showDelGoodsDesc = false
      api.delGoodDesc({
        id: this.delDescId
      }).then(res => {
        console.log(res, '删除商品详情')
        this.$message(res.message)
        this.getAllGoodsDesc(this.currentPage)
        this.getAllGoods(this.currentPage)
      })
    },
    // 显示删除商品对话框
    showDelGood (id) {
      this.showDelGoods = true
      this.delId = id
    },
    // 执行删除商品操作
    doDelGood () {
      this.showDelGoods = false
      api.delGood({
        id: this.delId
      }).then(res => {
        console.log(res, '删除商品')
        this.$message(res.message)
        this.getAllGoodsDesc(this.currentPage)
        this.getAllGoods(this.currentPage)
      })
    },
    // 取消对话框显示操作
    cancelHand (item) {
      if (item === 'good') {
        this.showDelGoods = false
      } else if (item === 'goodDesc') {
        this.showDelGoodsDesc = false
      } else if (item === 'add') {
        this.addDialog = false
        this.addform = {
          id: '',
          goods_use: '',
          color: '',
          unit: '',
          type: '',
          intro_image: '',
          images: [],
          colors: ['']
        }
      } else if (item === 'edit') {
        this.editDialog = false
        this.editform = {
          id: '',
          goods_intro: '',
          goods_use: '',
          intro_image: '',
          color: '',
          colors: [],
          unit: '',
          type: '',
          images: []
        }
      }
    },
    // 删除添加对话框中6张图片的某张
    delThisImgAdd (index) {
      this.addform.images.splice(index, 1)
      // this.addform['image' + index] = ''
    },
    // 删除编辑对话框中6张图片的某张
    delThisImgEdit (index) {
      this.editform.images.splice(index, 1)
    },
    // 删除添加对话框中商品介绍图片
    delImgAdd () {
      this.addform.intro_image = ''
      this.topDelHiddenAdd = true
    },
    // 删除编辑对话框中商品介绍图片
    delImgEdit () {
      this.editform.intro_image = ''
      this.topDelHiddenEdit = true
    },
    // 控制页码到首页或尾页
    jumpToPage (page) {
      this.currentPage = page
      this.getAllGoodsDesc(this.currentPage)
      this.getAllGoods(this.currentPage)
    },
    // 控制页码到上一页或下一页
    nextOrPrevPage (page) {
      this.currentPage += page
      if (this.currentPage >= 1 && this.currentPage <= this.totalPage) {
        // 发请求
        this.getAllGoodsDesc(this.currentPage)
        this.getAllGoods(this.currentPage)
      }
      if (this.currentPage <= 1) {
        this.currentPage = 1
      }
      if (this.currentPage > this.totalPage && this.totalPage !== 0) {
        this.currentPage = this.totalPage
      }
    },
    // 确认添加新商品详情
    addNewDesc () {
      // 处理图片数据格式
      let addImages = {}
      this.addform.images.forEach((item, index) => {
        let key = 'image' + (index + 1)
        addImages[key] = item
      })
      addImages['intro_image'] = this.addform.intro_image
      // 处理颜色数据
      let colors = []
      this.addform.colors.forEach(item => {
        if (item) {
          colors.push(item)
        }
      })
      // console.log(addImages, 'addImages')
      // console.log(colors, 'colors')
      api.addGoodDesc({
        goods_id: this.addform.id,
        imageArr: addImages,
        goods_intro: this.addform.goods_intro,
        goods_use: this.addform.goods_use,
        unit: this.addform.unit,
        type: this.addform.type,
        colors: colors
      }).then(res => {
        console.log(res, '添加商品详情')
        this.$message(res.message)
        if (res.code === '200') {
          this.addDialog = false
          this.topDelHiddenAdd = false
          this.getAllGoodsDesc(this.currentPage)
          this.getAllGoods(this.currentPage)
          this.addform = {
            id: '',
            goods_use: '',
            introduce: '',
            intro_image: '',
            // image1: '',
            // image2: '',
            // image3: '',
            // image4: '',
            // image5: '',
            // image6: '',
            color: '',
            colors: [],
            unit: '',
            type: '',
            images: []
          }
        }
      })
    },
    // 编辑商品详情
    doEditGoodDesc () {
      // 处理图片数据
      let editImages = {}
      this.editform.images.forEach((item, index) => {
        let key = 'image' + (index + 1)
        editImages[key] = item
      })
      editImages['intro_image'] = this.editform.intro_image
      console.log(editImages, 'editImages')
      // 处理颜色数据
      let colors = []
      this.editform.colors.forEach(item => {
        if (item) {
          colors.push(item)
        }
      })
      api.editGoodDesc({
        id: this.editform.id,
        imageArr: editImages,
        goods_intro: this.editform.goods_intro,
        goods_use: this.editform.goods_use,
        unit: this.editform.unit,
        colors: colors,
        type: this.editform.type
      }).then(res => {
        console.log(res, '编辑商品详情')
        this.$message(res.message)
        if (res.code === '200') {
          this.editDialog = false
          this.getAllGoodsDesc(this.currentPage)
          this.getAllGoods(this.currentPage)
        }
      })
    },
    // 新加商品介绍图片-单张
    getImgFileAddSingle (e) {
      console.log(e)
      let that = this
      let img = e.target.files[0]
      let oFReader = new FileReader()
      oFReader.readAsDataURL(img)
      oFReader.onload = function (oFREvent) {
        // console.log(oFREvent.target.result)
        that.addform.intro_image = oFREvent.target.result
        that.topDelHiddenAdd = false
      }
      e.target.value = ''
    },
    // 新加商品图片-多张
    getImgFileAddMore (e) {
      let that = this
      let imgList = e.target.files
      for (let i = 0; i < imgList.length; i++) {
        var oFReader = new FileReader()
        oFReader.readAsDataURL(imgList[i])
        oFReader.onload = function (oFREvent) {
          // console.log(oFREvent.target.result)
          that.addform.images.push(oFREvent.target.result)
          that.topDelHiddenAdd = false
        }
      }
      e.target.value = ''
    },
    // 编辑商品介绍图片-单张
    getImgFileEditSingle (e) {
      console.log(e)
      let that = this
      let img = e.target.files[0]
      let oFReader = new FileReader()
      oFReader.readAsDataURL(img)
      oFReader.onload = function (oFREvent) {
        // console.log(oFREvent.target.result)
        that.editform.intro_image = oFREvent.target.result
        that.topDelHiddenEdit = false
      }
      e.target.value = ''
    },
    // 编辑商品介绍图片-多张
    getImgFileEditMore (e) {
      let that = this
      let imgList = e.target.files
      // (赋值给editform的时候，存在才赋值，不存在不赋值)
      for (let i = 0; i < imgList.length; i++) {
        var oFReader = new FileReader()
        oFReader.readAsDataURL(imgList[i])
        oFReader.onload = function (oFREvent) {
          that.editform.images.push(oFREvent.target.result)
          console.log(that.editform.images, 'editform.images')
          that.topDelHiddenEdit = false
        }
      }
      e.target.value = ''
    },
    // 获取首页商品
    getAllGoods (page) {
      api.getGoodList({
        page: page
      }).then(res => {
        console.log(res, '获取商品列表')
        if (res.code === '200') {
          this.goodsHomeInfo = res.extraData.info
          // 商品总个数
          this.count = res.extraData.count
          // 计算总页数
          if (Math.ceil(res.extraData.count / res.extraData.len) !== 0) {
            this.totalPage = Math.ceil(res.extraData.count / res.extraData.len)
          } else {
            this.totalPage = 1
          }
        }
      })
    },
    // 获取商品详情
    getAllGoodsDesc (page) {
      api.getGoodDescList({
        page: page
      }).then(res => {
        console.log(res, '获取all商品详情')
        if (res.code === '200') {
          this.goodsDescList = res.extraData.info
          this.goodsDescList.forEach((item, index) => {
            item.imgLen = 0
            item.images.forEach((child) => {
              if (child) {
                item.imgLen++
              }
            })
          })
        }
      })
    }
  }
}
</script>
