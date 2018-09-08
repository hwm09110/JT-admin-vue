<style lang="scss" scoped>
.asdie{
  width: 265px;
  height: 100%;
  float: left;
  .container{
    height: 100%;
  }
  .index-asdie{
    // height: 100vh;
    height: 100%;
    width: 265px!important;
    background-color: #fff;
    .icon,
    .title{
      color: #fff;
    }
    .index-menu-item{
      width: 100%;
    }
    .aside-user{
      position: relative;
      width: 265px;
      height: 120px;
      background-color: #fff;
      padding-left: 30px;
      padding-top: 10px;
      box-sizing: border-box;
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
          color: #999;
          cursor: pointer;
          .setting {
            margin-right: 20px;
          }
        }
        .activeSet{
          color: #1f7fb1;
          border-bottom: 1px solid #1f7fb1;
        }
      }
    }
    .aside-meun{
      font-size: 14px;
      cursor:pointer;
      .meun-item{
        height: 50px;
        line-height: 50px;
        background-color: #e9ecf2;
        color: #5f6468;
        padding-left: 40px;
      }
      .meun-item-child{
        height: 50px;
        line-height: 50px;
        padding-left: 60px;
        color: #999;
        background-color: #f9f9f9;
      }
      .activeChild{
        background-color: #1f7fb1!important;
        color: #fff;
      }
      .move{
        background-color: #1f7fb1!important;
        color: #fff;
      }
    }
  }
}
</style>

<template>
<div class="asdie">
  <el-container class="container">
    <el-aside class="index-asdie">
      <div class="aside-user">
        <img src="../images/avatar.png" alt="">
        <div class="user-setting">
          <div class="user-name">集泰最帅</div>
          <div class="user-handle">
            <span :class="{'setting':true, 'activeSet':activeSet[0]}" @mouseover="changeColor(0)" @mouseout="removeColor(0)">[设置]</span>
            <span :class="{'loginout':true, 'activeSet':activeSet[1]}" @click="loginout" @mouseover="changeColor(1)" @mouseout="removeColor(1)">[退出]</span>
          </div>
        </div>
      </div>
      <div class="aside-meun">
        <ul>
          <li v-for="(item, index) in asideNav" :key="index">
            <div class="meun-wuli meun-item" @click="showChildMeun(index, item)">{{item.name}}</div>
              <ul v-show='showChild[index]'>
                <li :class="{'meun-item-child':true, 'activeChild': activeChild1[0], 'move':move[0]}" @click="seletctThis(child.path)" v-for='(child, cindex) in item.children' :key='cindex'>{{child.name}}</li>
              </ul>
          </li>
        </ul>
      </div>
    </el-aside>
  </el-container>
</div>
</template>

<script>
export default {
  data () {
    return {
      move: [false, false],
      activeSet: [false, false],
      activeChild1: [false, false],
      activeChild2: [false, false],
      showChild: [false, false],
      asideNav: [
        {
          name: '物流管理',
          path: '/WlList',
          children: [
            {name: '添加物流信息', path: '/AddWlInfo'},
            {name: '我的添加记录', path: '/changeWlInfo'}
          ]
        },
        {
          name: '商品管理',
          path: '/goods',
          children: [
            {name: '添加商品', path: '/addGoods'},
            {name: '我的添加记录', path: '/changeWlInfo'}
          ]
        }
      ]
    }
  },
  methods: {
    // 鼠标点击选中
    seletctThis (path) {
      this.$router.push({path: path})
    },
    // 点击展开子菜单
    showChildMeun (index, item) {
      this.$set(this.showChild, index, !this.showChild[index])
      this.$store.commit('changeNav', item.name)
      this.$router.push({path: item.path})
    },
    asideMouserOver (index) {
      this.move = [false, false]
      this.$set(this.move, index, true)
    },
    asideMouserOut () {
      this.move = [false, false]
    },
    // 设置部分鼠标移入移出
    changeColor (index) {
      this.activeSet = [false, false]
      this.$set(this.activeSet, index, true)
    },
    removeColor () {
      this.activeSet = [false, false]
    },
    // 退出登录
    loginout () {
      console.log('tuichu')
      this.$confirm('是否退出集泰电商小程序管理系统？', '退出提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'none'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '退出登录成功'
        })
        this.$router.push({path: '/'})
      })
    }
  }
}
</script>
