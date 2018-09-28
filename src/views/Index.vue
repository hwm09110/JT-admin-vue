<style lang="scss" scoped>
.index{
  height: 100%;
  .el-container {
    height: 100%;
    position: relative;
  }
  .index-header{
    height: 125px!important;
    // text-align: center;
    overflow: hidden;
    // background: url(../images/logo-index.png);
    font-size: 28px;
    color: #fff;
    position: relative;
    // 背景盒子
    .top-center-div{
      width: 385px;
      height: 51px;
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%,-50%);
      background: url('../images/top-center.png') no-repeat;
    }
    .top-left-div{
      width: 74px;
      height: 53px;
      position: absolute;
      bottom: 50px;
      left: 0;
      background: url('../images/top-left.png') no-repeat;
    }
    .top-right-div{
      width: 74px;
      height: 53px;
      position: absolute;
      bottom: 50px;
      right: 0;
      background: url('../images/top-right.png') no-repeat;
    }
    .index-nav{
      padding-left: 280px;
      text-align-last: left;
      font-size: 18px;
      width: 100%;
      height: 50px;
      line-height: 50px;
      background-color: #333;
      position: absolute;
      bottom: 0;
      left: 0;
      span{
        padding: 13px 20px;
        cursor: pointer;
      }
      .navActive{
        background-color: #1f7fb1;
        font-weight: 600;
      }
    }
  }
  .container{
    .index-asdie{
      // height: 100vh;
      height: 100%;
      width: 265px!important;
      background-color: #fff;
      border-right: 1px solid #f1f4f7;
      .icon,
      .title{
        color: #fff;
      }
      .index-menu-item{
        width: 100%;
      }
      .aside-user{
        // position: relative;
        position: absolute;
        top: 0;
        left: 0;
        width: 265px;
        height: 120px;
        background-color: #fff;
        padding-left: 30px;
        padding-top: 10px;
        box-sizing: border-box;
        border-bottom: 1px solid #dcdcdc;
        z-index:10;
        .user-setting {
          height: 100%;
          width: 120px;
          box-sizing: border-box;
          position: absolute;
          top: 0;
          right: 15px;
          padding-top: 40px;
          text-align: center;
          .user-name{
            color: #999;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 15px;
          }
          .user-handle{
            cursor: pointer;
            color: #999;
            span:hover{
              color: #1f7fb1;
              border-bottom: 1px solid #1f7fb1;
            }
            .setting {
              margin-right: 20px;
            }
          }
          .activeSet{
            color: #1f7fb1;
            border-bottom: 1px solid #1f7fb1;
          }
        }
        // 用户头像
        .avatar{
          width: 70px;
          height: 100px;
          position: absolute;
          top: 10px;
          left: 30px;
          background: url('../images/avatar.png') no-repeat;
        }
      }
      .aside-meun{
        padding-top: 120px;
        font-size: 14px;
        cursor:pointer;
        // 侧边栏图标
        .item:nth-child(1) .icon{
          background: url('../images/wl_icon.png') no-repeat;
        }
        .item:nth-child(2) .icon{
          background: url('../images/sp_icon.png') no-repeat;
        }
        .item:nth-child(3) .icon{
          background: url('../images/yqm_icon.png') no-repeat;
        }
        .item:nth-child(4) .icon{
          background: url('../images/dd_icon.png') no-repeat;
        }
        .item:nth-child(5) .icon{
          background: url('../images/kc_icon.png') no-repeat;
        }
        .item:nth-child(6) .icon{
          background: url('../images/kc_icon.png') no-repeat;
        }
        .meun-item{
          height: 50px;
          line-height: 50px;
          background-color: #fff;
          color: #5f6468;
          padding-left: 40px;
          position: relative;
          border-bottom: 1px solid #dcdcdc;
          .icon{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 17px;
            width: 14px;
            height: 14px;
          }
          .show-icon{
            position: absolute;
            top: 17px;
            right: 17px;
            width: 14px;
            height: 14px;
            background: url('../images/zhankai.png') no-repeat center center;
          }
          .close-icon{
            position: absolute;
            top: 17px;
            right: 17px;
            width: 14px;
            height: 14px;
            background: url('../images/shouqi.png') no-repeat center center;
          }
        }
        .item-active{
          background-color: #e9ecf2;
        }
        .meun-item-child{
          height: 50px;
          line-height: 50px;
          padding-left: 60px;
          color: #999;
          background-color: #f9f9f9;
          &:hover{
            background-color: #f1f1f1;
            // color: #fff;
          }
        }
        .activeChild{
          background-color: #1f7fb1!important;
          color: #fff;
        }
      }
    }
    .el-main{
      padding: 0;
      .main-nav{
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        width: 100%;
        background-color: #e9ecf2;
        box-sizing: border-box;
        padding-left: 40px;
        color: #5f6468;
        .main-nav-frist{
          margin-right: 5px;
        }
      }
    }
  }
  .el-main{
    background-color: #f1f4f7;
  }
}
</style>

<template>
<div class="index">
  <el-container>
    <el-header class="index-header">
      <!-- <img src="../images/top-left.png" alt="" class="top-left">
      <img src="../images/top-center.png" alt="" class="top-center">
      <img src="../images/top-right.png" alt="" class="top-right"> -->
      <div class="top-center-div"></div>
      <div class="top-left-div"></div>
      <div class="top-right-div"></div>
      <div class="index-nav">
        <span>首页</span>
        <span :class="{navActive: activeNav == index}" v-for="(item, index) in accessTopNav" :key='index' @click="jumpToItem(item.path, index)">{{item.name}}</span>
        <!-- <span class="navActive">商品管理</span>
        <span class="navActive">邀请码管理</span> -->
      </div>
    </el-header>
    <el-container class="container">
      <el-aside class="index-asdie">
        <div class="aside-user">
          <div class="avatar"></div>
          <!-- <img src="../../img/jtds/avatar.png" alt=""> -->
          <div class="user-setting">
            <div class="user-name">{{userName}}</div>
            <div class="user-handle">
              <span :class="{'setting':true}" @click="gotoSet" v-if="isSupperAdmin">[设置]</span>
              <span :class="{'loginout':true}" @click="loginout">[退出]</span>
            </div>
          </div>
        </div>
        <div class="aside-meun">
          <div>
            <div v-for="(item, index) in accessAsideNav" :key="index" class="item">
              <div :class="{'meun-item':true, 'item-active':showChild[index]}" @click="showChildMeun(index, item)">{{item.name}}
                <div class="icon"></div>
                <div class="show-icon" v-show="!showChild[index]"></div>
                <div class="close-icon" v-show="showChild[index]"></div>
              </div>
              <!-- <transition enter-active-class='animated fadeInLeft'> -->
              <el-collapse-transition>
                <div v-show='showChild[index]'>
                  <div v-for='(child, cindex) in item.children' :key='cindex' :class="{'meun-item-child':true, 'activeChild': child.isActive}" @click="seletctThis(cindex, child, item, index)">{{child.name}}</div>
                </div>
              </el-collapse-transition>
              <!-- </transition> -->
            </div>
          </div>
        </div>
      </el-aside>
      <el-main>
        <!-- <transition enter-active-class='animated fadeIn'> -->
          <router-view></router-view>
        <!-- </transition> -->
      </el-main>
    </el-container>
  </el-container>
</div>
</template>

<script>
import api from '../api/index'
import Cookies from 'js-cookie'

export default {
  created () {
    //拉取权限列表
    this.getAccountAuth()
  },
  mounted () {
    for (let i = 0; i < this.accessAsideNav.length; i++) {
      this.showChild[i] = false
      // 用户刷新过后，子菜单展开、样式依然被激活、顶部激活
      for (let j = 0; j < this.accessAsideNav[i].children.length; j++) {
        // console.log(this.accessAsideNav[i].children[j].path)
        if (location.hash.slice(1, location.hash.length) === this.accessAsideNav[i].children[j].path) {
          this.accessAsideNav[i].children[j].isActive = true
          this.activeNav = i
          this.showChild[i] = true
        }
      }
    }
  },
  data () {
    return {
      userName: localStorage.getItem('accountName'),
      // 是否激活子菜单
      showChild: [],
      // 菜单列表数据
      asideNav: [
        // {
        //   name: '物流管理',
        //   path: '/WlList',
        //   children: [
        //     {name: '物流信息', path: '/WlList', isActive: false}
        //   ]
        // },
        {
          code:1,
          name: '商品管理',
          path: '/goods',
          children: [
            {name: '首页商品', path: '/goods/goodsList', isActive: false},
            {name: '商品详情', path: '/goods/goodsDetail', isActive: false}
          ]
        },
        {
          code:2,
          name: '邀请码',
          path: '/inviteCode',
          children: [
            {name: '邀请码管理', path: '/inviteCode/codeManage', isActive: false},
            {name: '发送邀请码', path: '/inviteCode/sendCode', isActive: false}
          ]
        },
        {
          code:3,
          name: '物流订单管理',
          path: '/order',
          children: [
            {name: '订单信息', path: '/order/orderInfo', isActive: false}
          ]
        },
        {
          code:4,
          name: '库存',
          path: '/inventory',
          children: [
            {name: '库存信息', path: '/inventory/invenManage', isActive: false}
          ]
        },
        {
          code:6,
          name: '修改记录',
          path: '/record',
          children: [
            {name: '库存修改记录', path: '/record/kcRecordList', isActive: false},
            {name: '首页商品修改记录', path: '/record/goodsRecordList', isActive: false}
          ]
        },
        {
          code:7,
          name: '用户',
          path: '/user',
          children: [
            {name: '用户列表', path: '/user/userList', isActive: false}
          ]
        }
      ],
      topNav: [
        // {name: '物流管理', path: '/WlList'},
        {name: '商品管理', path: '/goods',code:1},
        {name: '邀请码管理', path: '/inviteCode',code:2},
        {name: '物流订单管理', path: '/order',code:3},
        {name: '库存', path: '/inventory',code:4}
      ],
      activeNav: 0,
      //有权访问 topNav
      accessTopNav: [],
      //有权访问 asideNav
      accessAsideNav: [],
      //是否是超级管理员,超级管理显示设置入口
      isSupperAdmin:false
    }
  },
  methods: {
    // 鼠标点击选中
    seletctThis (index, child, item, navActive) {
      this.activeNav = navActive
      for (let i = 0; i < this.accessAsideNav.length; i++) {
        for (let j = 0; j < this.accessAsideNav[i].children.length; j++) {
          this.accessAsideNav[i].children[j].isActive = false
        }
      }
      child.isActive = true
      // this.$router.push({path: child.path, query: {id: 1}})
      this.$router.push({path: child.path})
      // this.$store.commit('changeNav', item.name)
    },
    // 点击展开子菜单
    showChildMeun (index, item) {
      // 控制只有一项菜单展开 --start
      // for (let i = 0; i < this.accessAsideNav.length; i++) {
      //   for (let j = 0; j < this.accessAsideNav[i].children.length; j++) {
      //     this.accessAsideNav[i].children[j].isActive = false
      //   }
      // }
      // for (let i = 0; i < this.showChild.length; i++) {
      //   this.showChild[i] = false
      // }
      // 控制只有一项菜单展开 --end
      
      this.$set(this.showChild, index, !this.showChild[index])

      // 修改nav导航
      // this.$store.commit('changeNav', item.name)
    },
    // 退出登录
    loginout () {
      this.$confirm('是否退出集泰电商小程序管理系统？', '退出提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'none'
      }).then(() => {
        api.checkLogout().then(res=>{
          console.log(res);
          if(res.data.code === '200'){
            this.$message({
              type: 'success',
              message: '退出登录成功'
            })
            localStorage.removeItem('accessRouteList')
            Cookies.remove('isLogin')
            Cookies.remove('user') //清除user password
            Cookies.remove('password')
            this.$router.push({path: '/login'})
          }else{
            this.$message.error(res.message)
          }
        })
      })
    },
    // 激活顶部nav样式
    topNavActive (index) {
      this.activeNav = index
    },
    // 点击顶部跳转到相应的路径
    jumpToItem (path, index) {
      this.$router.push({path: path})
      this.activeNav = index
    },
    //设置[超级管理员出现]
    gotoSet () {
      this.$router.push({path: '/manage'})
    },
    getAccountAuth () {
      this.$store.dispatch('getAccessRouter').then(res=>{
        let accessRouteList = this.$store.state.accessRouteList

        if(accessRouteList.length>0){
          accessRouteList.forEach((item,i)=>{
            this.topNav.forEach((navItem,j)=>{
              if(navItem.code == item){
                this.accessTopNav.push(navItem)
              }
            })
          })

          accessRouteList.forEach((item,i)=>{
            this.asideNav.forEach((navItem,j)=>{
              if(navItem.code == item){
                this.accessAsideNav.push(navItem)
              }
            })
          })
        }
        this.isSupperAdmin = this.$store.state.is_supper_admin
      })
    }
  }
}
</script>
