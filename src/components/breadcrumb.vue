<style lang="scss" scoped>
.breadcrumb{
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #e9ecf2;
  box-sizing: border-box;
  padding-left: 40px;
  color: #5f6468;
  .breadcrumb-item{
    text-decoration: none;
    color: #5f6468;
  }
  .breadcrumb-frist{
    margin-right: 5px;
    &:hover{
      color: #1f7fb1;
    }
  }
  .today{
    float: right;
    margin-right: 30px;
  }
  .icon{
    width: 14px;
    height: 14px;
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    background: url('../images/home.png') no-repeat;
  }
}
</style>

<template>
<!-- 面包屑组件 -->
  <div class="breadcrumb">
    <a class="breadcrumb-item" v-for="(item, index) in breadcrumbList" :key="index">
      <span v-if="index != 0">&nbsp;>&nbsp;</span>
      <span class="breadcrumb-frist">{{item.name}}</span>
    </a>
    <div class="today">{{today}}</div>
    <div class="icon"></div>
  </div>
</template>

<script>
export default {
  created () {
    this.getToday()
  },
  props: {
    breadcrumbList: {
      type: Array,
      twoWay: true
    }
  },
  data () {
    return {
      // 获取当日时间
      today: ''
    }
  },
  methods: {
    // 获取当天日期
    getToday () {
      let date = new Date()
      let Y = date.getFullYear()
      let M = date.getMonth() + 1
      let D = date.getDate()
      M = M > 9 ? M : '0' + M
      D = D > 9 ? D : '0' + D
      let X = date.getDay()
      switch (X) {
        case 0:
          X = '  星期日'
          break
        case 1:
          X = '  星期一'
          break
        case 2:
          X = '  星期二'
          break
        case 3:
          X = '  星期三'
          break
        case 4:
          X = '  星期四'
          break
        case 5:
          X = '  星期五'
          break
        case 6:
          X = '  星期六'
          break
      }
      this.today = Y + '年' + M + '月' + D + '日' + X
      localStorage.setItem('today', this.today)
    }
  }
}
</script>
