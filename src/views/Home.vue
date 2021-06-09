<template>
  <Layout>
    <div class="home">
      <van-search
        v-model="searchKey"
        shape="round"
        background="#4fc08d"
        placeholder="请输入搜索关键词"
      />
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
      <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
      >
        <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
        <van-card
          v-for="item in list" 
          :key="item"
          class="goods-item"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        >
          <template #tags>
            <van-tag plain type="danger">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>
          </template>
          <template #footer>
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
          </template>
        </van-card>
      </van-list>
    </div>
  </Layout>
</template>

<script>
import { Button, Search, Swipe, SwipeItem, Card, Tag, List } from 'vant';
import Layout from '../components/Layout';


export default {
  name: 'Home',
  components: {
    [Button.name]: Button,
    [Search.name]: Search,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Card.name]: Card,
    [Tag.name]: Tag,
    [List.name]: List,
    Layout
  },
  data: function(){
    return {
      searchKey: '',
      loading: false,
      finished: false,
      list: []
    }
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        // if (this.list.length >= 40) {
        //   this.finished = true;
        // }
      }, 1000);
    },
  }
}
</script>

<style lang="scss" scoped>
.home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  height: 300px;
  line-height: 300px;
  text-align: center;
  background-color: #39a9ed;
}

.goods-item {
  background-color: #fff;
}
</style>