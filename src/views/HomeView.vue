<template>
  <div class="home">
   
   <!-- 导航栏 -->
  <van-nav-bar  title="惠捷首页" />
  <!-- 搜索 -->
  <van-search shape="round" background="#2f7e82" placeholder="搜索" />
  <!-- 轮播图 -->
  <BannerList />
  <!-- 导航 -->
  <NavList />
  <!-- 楼层 -->
  <FloorList />

  </div>
</template>

<script>

import BannerList from '@/components/BannerList.vue'
import NavList from '@/components/NavList.vue'
import FloorList from '@/components/FloorList.vue'

export default {
  name: 'HomeView',
  components: {
    BannerList,
    NavList,
    FloorList
  },
  
}
</script>

<style lang="less" scoped>
/deep/ .van-nav-bar__content {
  background: #2f7e82;
  color: #fff;
}
/deep/ .van-nav-bar__title.van-ellipsis {
  font-size: 14px;
  color: #fff;
}
/deep/ .van-hairline--bottom::after {
  border: none;
}
/deep/ .van-icon-search:before {
  content: "";
}
/deep/ .van-field__control {
  text-align: center;
}
</style>
