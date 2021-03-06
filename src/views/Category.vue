<template>
  <Layout>
    <div class="category">
      <van-button type="primary">分类</van-button>
    </div>
  </Layout>
</template>

<script>
import { Button } from 'vant';
import Layout from '../components/Layout';

export default {
  name: 'Category',
  components: {
    [Button.name]: Button,
    Layout
  }
}
</script>

<style>
.category {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>