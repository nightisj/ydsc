<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="商品列表" />
    <!-- 搜索 -->
    <van-search shape="round" background="#2f7e82" placeholder="搜索" />
    <div class="tabbar">
      <div class="item">综合</div>
      <div class="item">价格</div>
    </div>
    <div class="list">
      <div class="item" v-for="item in list" :key="item.cat_id">
        <div class="item_left"><img :src="item.goods_small_logo" /></div>
        <div class="item_right">
          <div class="title">{{ item.goods_name }}</div>
          <div class="price">￥{{ item.goods_price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 引入封装的请求方法
const res = require("../tool/request.js");
export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    // 接受路由参数
    var cat_id = this.$route.query.cat_id;
    console.log(cat_id);
    res
      .request({
        url: "/goods/search",
        // 参数 params
        params: {
          cid: cat_id,
        },
      })
      .then((data) => {
        console.log(data.goods);
        this.list = data.goods;
      });
  },
};
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
.tabbar {
  display: flex;
  justify-content: space-around;
  .item:nth-child(1) {
    border-bottom: 1px solid #4c877e;
  }
  .item {
    text-align: center;
    width: 50%;
    height: 40px;
    line-height: 40px;
  }
}
.list {
  .item {
      padding-top: 15px;
    display: flex;
    justify-content: space-evenly;
    border-bottom:1px solid  #CECECE;
    img {
      width: 100px;
      height: 100px;
    }
    .title {
      width: 200px;
      -webkit-line-clamp: 2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 18px;
      ;
    }
    .price{
        padding-top: 20px;
        color:#628382
    }
  }
}
</style>
