<style lang="scss" scoped>
.header{
  .index-header{
    height: 125px!important;
    text-align: center;
    overflow: hidden;
    // background: url(../images/logo-index.png);
    font-size: 28px;
    color: #fff;
    position: relative;
    .top-left,
    .top-center,
    .top-right{
      position: absolute;
      bottom: 50px;
    }
    .top-left{
      left: 0;
    }
    .top-right{
      right: 0;
    }
    .top-center{
      left: 50%;
      bottom: 60px;
      transform: translateX(-50%);
    }
    .index-nav{
      padding-left: 280px;
      text-align-last: left;
      font-size: 18px;
      font-weight: 600;
      width: 100%;
      height: 50px;
      line-height: 50px;
      background-color: #333;
      position: absolute;
      bottom: 0;
      left: 0;
      span{
        padding: 13px 20px;
      }
      .navActive{
        background-color: #1f7fb1;
      }
    }
  }
}
</style>

<template>
<div class="header">
  <el-header class="index-header">
    <img src="../images/top-left.png" alt="" class="top-left">
    <img src="../images/top-center.png" alt="" class="top-center">
    <img src="../images/top-right.png" alt="" class="top-right">
    <div class="index-nav">
      <span>首页</span>
      <span class="navActive">{{this.$store.state.nav}}</span>
    </div>
  </el-header>
</div>
</template>

<script>
export default {
}
</script>
