<template>
  <div class="category">
    <!-- 分类  -->
    <!-- 分类左边 -->
    <div class="main">
<div class="category_left">
  <!-- item 代表左边选项卡的每一个内容 通过下标来判断是否选中--> 
  <div :class="activeIndex==index ? 'active item': 'item' " v-for="(item,index) in category_list" :key="item.cat_id" @click="isClick(index)">{{item.cat_name}}</div>

</div>
<div class="category_right">
  <!-- 右边部分需要遍历三次才能找到子分类的内容 -->
  <div v-for="(item,index) in category_list" :key="item.cat_id" v-show="activeIndex==index">
    <!-- 标题部分 -->
    <div v-for="item in item.children" :key="item.cat_id" class="clearfix" >
      <h3>{{item.cat_name}}</h3>
        <div  v-for="item in item.children" :key="item.cat_id" class="item" @click="goGoods(item.cat_id)">
          <img :src="item.cat_icon" alt="">
          <div>{{item.cat_name}}</div>
     </div>
    </div>
  </div>
</div>
    </div>
  </div>
</template>



<script>
// 引入封装的请求方法
const res=require("../tool/request.js")
export default {
  data(){
    return {
      // 分类列表
      category_list:[],
      // 定义初始下标来进行判断 通过点击更换此下标
      activeIndex:0
    }
  },
  created(){
    res.request({
      url:"/categories"
    }).then(data=>{
      // 赋值
      this.category_list = data
      console.log(this.category_list)
    })
  },
  methods:{
    // 定义选中左侧栏的方法
    isClick(index){
      console.log("你目前正在点击的选项下标为index=>",index)
      this.activeIndex = index
    },
    // 跳转商品列表的方法
    goGoods(cat_id){
      console.log(cat_id)
      this.$router.push({
        path:"/goods",
        // 路由query传参
        query:{
          cat_id:cat_id
        }
      })
    }
  }
}
</script>

<style scoped  lang="less">
  .main {
    display: flex;
    .category_left {
      // vw 视图宽度 view width: ;
      height: 100vh;
      overflow: scroll;
      width: 25vw;
      .item {
        background-color: #F7F8FA;
        padding-top: 20px;
        padding-left: 10px;
      }
    }
    .clearfix::after {
      content: "";
      display: block;
      clear: both;
    }
    .category_right {
      width: 80vw;
      height: 100vh;
      overflow: scroll;
      h3{
        text-align: center;
      }
      .item {
        float: left;
        text-align: center;
        margin-left: 20px;
        margin-top: 20px;
        img{
          width: 80px;
          height: 100px;
          
        }
      }
    }
  }
  .category_left .active{
    color: #5C8B82 !important;
 
        border-left: 1px solid #5C8B82 ;
  
  }
  // 隐藏左边部分的下拉条
  .category_left::-webkit-scrollbar {
    width: 0;
  }
    // 隐藏右边部分的下拉条
    .category_right::-webkit-scrollbar {
    width: 0;
  }
</style>  