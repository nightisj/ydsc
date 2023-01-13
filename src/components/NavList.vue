<template>
  <div class="nav">
      <div class="nav-list" v-for="item in navList" :key="item.name">
          <img :src="item.image_src" alt="">
      </div>
  </div>
</template>

<script>
// 引入封装的请求方法
const res=require("../tool/request.js")
export default {
 data(){
    return {
      // 导航数据
      navList:[]
    }
  },
  created(){
    // 发起请求导航数据
    res.request({
      url:"/home/catitems"
    }).then(data=>{
      this.navList=data
    })
  }
}
</script>

<style lang="less" scoped>
.nav {
    display: flex;
    .nav-list {
        flex: 1;
        padding: 14px;
        img {
            width: 100%;
        }
    }
}
</style>