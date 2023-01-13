<template>
  <div class="bg">
    <van-nav-bar title="个人中心" />
    <div class="header_bg">
      <div class="login_btn">立即登录</div>
      <div class="main_content">
        <div class="personal">
          <div class="item">
            <div class="num">0</div>
            <div>收藏的店铺</div>
          </div>
          <div class="item">
            <div class="num">0</div>
            <div>收藏的店铺</div>
          </div>
          <div class="item">
            <div class="num">0</div>
            <div>收藏的店铺</div>
          </div>
          <div class="item">
            <div class="num">0</div>
            <div>收藏的店铺</div>
          </div>
        </div>
        <div class="order_box">
          <div class="title">我的订单</div>
          <div class="nav">
            <van-grid>
              <van-grid-item icon="orders-o" text="订单" />
              <van-grid-item icon="balance-pay" text="代付款" />
              <van-grid-item icon="logistics" text="待收货" />
              <van-grid-item icon="failure" text="退款" />
            </van-grid>
          </div>
        </div>
        <div class="service">
          <div class="item">收货地址管理</div>
          <div class="item">联系客服</div>
          <div class="item">意见反馈</div>
          <div class="item">关于我们</div>
          <div class="item">设置</div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
.header_bg {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2f7e82;
  width: 100vw;
  height: 300px;
  .login_btn {
    width: 110px;
    height: 110px;
    background-color: #cccccc;
    text-align: center;
    line-height: 110px;
    border-radius: 50%;
    font-size: 18px;
    color: #fff;
  }
  .main_content {
    width: 90vw;
    position: absolute;
    top: 250px;
    .personal {
      padding-left: 10px;
      padding-right: 10px;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      .item {
        padding-top: 15px;
        text-align: center;
        .num {
          color: #2f7e82;
        }
      }
    }
  }
}
.bg {
  background-color: #f0eeef;
  width: 100vw;
  height: 100vh;
}
.order_box {
  background-color: #fff;

  margin-top: 20px;
  .title {
    font-size: 18px;
  }
  .nav {
    margin-top: 8px;
  }
}
.service {
  margin-top: 20px;
  .item{
    width:100%;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    border-bottom:1px solid #f0eeef ;
  }
}
</style>