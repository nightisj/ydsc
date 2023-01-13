<template>
  <div class="banner">
    <van-swipe  :autoplay="3000" indicator-color="#2f7e82">
      <van-swipe-item v-for="item in bannerList" :key="item.goods_id">
        <img :src="item.image_src" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
// 引入封装的请求方法
const res=require("../tool/request.js")

export default {
  data(){
    return {
      // 轮播图数据
      bannerList:[]
    }
  },
  created(){
    // 发起请求轮播图数据
    res.request({
      url:"/home/swiperdata"
    }).then(data=>{
      this.bannerList=data
    })
  }
}
</script>

<style scoped lang="less">
.banner {
  img {
    width: 100%;
  }
}
</style>
