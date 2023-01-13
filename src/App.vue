<template>
  <div id="app">
    <!-- 底部tabBar开始 -->
    <van-tabbar v-model="active" @change="changeActive">
      <van-tabbar-item v-for="item in tabBar" :key="item.id" :to="item.path">
        <span>{{item.name}}</span>
        <template #icon="props">
          <img :src="props.active ? item.active : item.inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
    <!-- 底部tabBar结束 -->
    <router-view/>
  </div>
</template>

<script>
export default {
   data() {
    return {
      // 选中下标
      active: 0,
      // 底部tabBar数据
      tabBar:[
        {
          id:0,
          name:"首页",
          active:require("./assets/image/home-active.png"),
          inactive:require("./assets/image/home.png"),
          path:"/"
        },
         {
          id:1,
          name:"分类",
          active:require("./assets/image/catetory-active.png"),
          inactive:require("./assets/image/catetory.png"),
          path:"/catetory"
        },
         {
          id:2,
          name:"购物车",
          active:require("./assets/image/shoppingCar-active.png"),
          inactive:require("./assets/image/shoppingCar.png"),
          path:"/shopping"
        },
         {
          id:3,
          name:"我的",
          active:require("./assets/image/my-active.png"),
          inactive:require("./assets/image/my.png"),
          path:"/my"
        }
      ]
    };
  },
  methods:{
    // 标签修改
    changeActive(index){
      // 设置本地存储
      localStorage.setItem("active",index)
    }
  },
  created(){
    // 获取本地存储
    var index=localStorage.getItem("active") || 0;
    // 设置active值
    this.active=Number(index)
  }
}
</script>

<style lang="less">

</style>
