<template>
  <div class="floor">
      <div class="floor-list" v-for="(item,index) in floorList" :key="index">
          <img :src="item.floor_title.image_src" alt="">
          <div class="imgs">
              <img :src="item2.image_src" alt="" v-for="(item2,index2) in item.product_list" :key="index2">
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
      // 楼层数据
      floorList:[]
    }
  },
  created(){
    // 发起请求楼层数据
    res.request({
      url:"/home/floordata"
    }).then(data=>{
      this.floorList=data
    })
}
}
</script>

<style lang="less" scoped>
.floor {
    overflow: hidden;
    padding-bottom: 50px;
    .floor-list {
        margin-top: 10px;
        img {
            width: 100%;
        }
        .imgs {
            &::after {
                content: "";
                display: block;
                clear: both;
            }
            img {
                width: 33.33%;
                height: 102px;
                float: left;
                box-sizing: border-box;
                padding-left: 4px;
                &:nth-child(1){
                    height: 208px;
                    padding-left: 0;
                }
                 &:nth-child(2){
                   margin-bottom: 4px;
                }
                 &:nth-child(3){
                    margin-bottom: 4px;
                }
            }
        }
    }
}
</style>