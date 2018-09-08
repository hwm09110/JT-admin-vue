<style lang="scss" scoped>
.manage{
  // padding: 20px;
  background-color: #f1f4f7;
  height: 100%;
  overflow: hidden;
}
</style>

<template>
  <div class="manage">
    <Header></Header>
    <Aside></Aside>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '../../components/Header'
import Aside from '../../components/Aside'

export default {
  data () {
    return {
      pagenum: 1,
      pagesize: 4,
      totalPage: 100
    }
  },
  components: {
    Aside,
    Header
  },
  methods: {
    // 物流信息操作
    doWlInfoChange () {
      this.$router.push({path: '/changeWlInfo'})
    }
  }
}
</script>
