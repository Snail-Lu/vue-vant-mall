<template>
  <Layout>
    <div class="cart">
      <van-button type="primary">购物车</van-button>
    </div>
  </Layout>
</template>

<script>
import { Button } from 'vant';
import Layout from '../components/Layout';

export default {
  name: 'Cart',
  components: {
    [Button.name]: Button,
    Layout
  }
}
</script>

<style>
.cart {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>