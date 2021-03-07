<template>
  <div class="layout">
    <slot></slot>
    <footer>
      <van-tabbar route>
        <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item to="/category" icon="apps-o">分类</van-tabbar-item>
        <van-tabbar-item to="/cart" icon="cart-o">购物车</van-tabbar-item>
        <van-tabbar-item to="/my" icon="contact">我的</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
  name: 'Layout',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout {
  height: 100%;
}
</style>
