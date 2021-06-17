<template>
	<Layout>
		<div class="home">
			<van-search
				v-model="searchKey"
				shape="round"
				background="#f5f5f5"
				placeholder="请输入搜索关键词"
				disabled
				@click="clickToSearch"
			/>
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
				<van-swipe-item v-for="(image, index) in swiperImages" :key="index">
					<img v-lazy="image" class="swiper-img" />
				</van-swipe-item>
			</van-swipe>
			<van-list v-model="loading" :finished="finished" @load="onLoad">
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
				</van-card>
			</van-list>
		</div>
	</Layout>
</template>

<script>
import Layout from '@components/Layout/index.vue'

export default {
	name: 'Home',
	components: {
		Layout
	},
	data: function () {
		return {
			searchKey: '',
			swiperImages: [
				'https://img01.yzcdn.cn/vant/apple-1.jpg',
				'https://img01.yzcdn.cn/vant/apple-2.jpg',
				'https://img01.yzcdn.cn/vant/apple-3.jpg',
				'https://img01.yzcdn.cn/vant/apple-4.jpg'
			],
			loading: false,
			finished: false,
			list: []
		}
	},
	methods: {
		// list初始化
		onLoad() {
			// 异步更新数据
			// setTimeout 仅做示例，真实场景中一般为 ajax 请求
			setTimeout(() => {
				for (let i = 0; i < 10; i++) {
					this.list.push(this.list.length + 1)
				}

				// 加载状态结束
				this.loading = false

				// 数据全部加载完成
				// if (this.list.length >= 40) {
				//   this.finished = true;
				// }
			}, 1000)
		},

		clickToSearch() {
			this.$router.push({ path: 'search' })
		}
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

.van-search {
	position: sticky;
	top: 0;
	left: 0;
	z-index: 999;
}

.my-swipe {
	.van-swipe-item {
		color: #fff;
		font-size: 20px;
		height: 300px;
		width: 100%;

		.swiper-img {
			width: 100%;
			height: 300px;
		}
	}
}

.goods-item {
	background-color: #fff;
}
</style>
