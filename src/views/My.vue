<template>
  <Layout>
    <div class="my">
      <van-button type="primary">我的</van-button>
    </div>
  </Layout>
</template>

<script>
import { Button } from 'vant';
import Layout from '../components/Layout';

export default {
  name: 'My',
  components: {
    [Button.name]: Button,
    Layout
  }
}
</script>

<style>
.my {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>