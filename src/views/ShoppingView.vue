<template>
  <div>
    <div class="cart">
      <div class="item" v-for="(item, index) in cartList" :key="index">
        <div class="item_left"><img :src="item.img" /></div>
        <div class="item_right">
          <div class="title">{{ item.title }}</div>
          <div class="price">￥{{ item.price }}</div>
        </div>
        <!-- 计算内容部分 -->
        <div class="count_box">
          <div class="sub">-</div>
          <div class="num">1</div>
          <div class="add">+</div>
        </div>
      </div>
    </div>
    <!-- 价格是以分为单位 如果要转元需要乘以100 -->
    <van-submit-bar :price="800000" button-text="提交订单" @submit="onSubmit" class="submit" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 定义购物车列表
      cartList: [
        {
          title: "手机",
          img:
            "https://ms.bdimg.com/pacific/0/pic/-948153235_479577602.jpg?x=0&y=0&h=150&w=242&vh=150.00&vw=242.00&oh=150.00&ow=242.00",
          price: 5200,
        },
        {
          title: "电脑",
          img:
            "https://ms.bdimg.com/pacific/0/pic/-252380235_-749366364.jpg?x=0&y=0&h=150&w=242&vh=150.00&vw=242.00&oh=150.00&ow=242.00",
          price: 8200,
        },
        {
          title: "手机",
          img:
            "https://ms.bdimg.com/pacific/0/pic/1856099528_-1243822640.jpg?x=0&y=0&h=150&w=242&vh=150.00&vw=242.00&oh=150.00&ow=242.00",
          price: 200,
        },
      ],
    };
  },
};
</script>
<style>
</style>
<style lang="less" scoped>
.cart {
  .item {
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    margin-top: 20px;
    img {
      width: 100px;
      height: 100px;
    }
    .item_right {
      padding-left: 5px;
      padding-top: 10px;
    }
  }
}
.price {
  padding-top: 50px;
}
.count_box {
  display: flex;
  margin-left: auto;
  padding-top: 80px;
  .sub,
  .add {
    text-align: center;
    line-height: 15px;
    width: 15px;
    height: 15px;
    border: 1px solid #cccccc;
  }
  .num {
    padding-left: 10px;
    padding-right: 10px;
  }
}
.submit{
  margin-bottom: 60px;
}
</style>