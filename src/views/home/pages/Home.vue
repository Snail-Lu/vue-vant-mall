<template>
	<Layout>
		<div class="home">
			<van-search v-model="searchKey" shape="round" placeholder="请输入搜索关键词" disabled @click="clickToSearch" />
			<van-skeleton :row="5" :loading="loading" :animate="true">
				<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
					<van-swipe-item v-for="(image, index) in swiperImages" :key="index">
						<img :src="image" class="swiper-img" />
					</van-swipe-item>
				</van-swipe>
			</van-skeleton>

			<van-list v-model="listLoading" :finished="finished" @load="onLoad">
				<van-card
					v-for="item in list"
					:key="item"
					class="goods-item"
					price="2699.00"
					origin-price="2999.00"
					desc="2021年新款5G手机"
					title="Redmi K40游戏增强版 天玑1200处理器67W闪充 120Hz高刷直屏 12GB+256GB 暗影 游戏电竞智能5G手机 小米 红米"
					thumb="https://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/178206/9/15027/175199/60fa8560Ea00bcfee/f4df2ce7ecd451cf.jpg!q70.dpg.webp"
					@click="linkTo('goodsDetail')"
				>
					<template #tags>
						<van-tag color="#ff0000" style="margin-right: 6px">满2000减100</van-tag>
						<van-tag color="#ff0000">赠品</van-tag>
					</template>
				</van-card>
			</van-list>
			<van-skeleton
				v-for="item in 5"
				:key="item"
				title
				avatar
				avatar-shape="square"
				avatar-size="90"
				:loading="listLoading"
				:row="3"
			></van-skeleton>
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
				'http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/184934/23/8463/80174/60c19578E771f3647/f1047680716f1ec8.jpg!cr_1053x420_4_0!q70.jpg.dpg',
				'http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/181556/19/8326/183596/60c02e03E572b4980/10c102b27595a2e5.png!cr_1053x420_4_0!q70.jpg.dpg',
				'http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/184934/23/8463/80174/60c19578E771f3647/f1047680716f1ec8.jpg!cr_1053x420_4_0!q70.jpg.dpg',
				'http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/107860/25/19496/84719/60ac6ec1Eb635e231/1ed3305f87c6e022.jpg!cr_1053x420_4_0!q70.jpg.dpg'
			],
			loading: true,
			listLoading: false,
			finished: false,
			list: []
		}
	},
	created() {
		setTimeout(() => {
			this.loading = false
		}, 1000)
	},
	methods: {
		// list初始化
		onLoad() {
			// 异步更新数据
			// setTimeout 仅做示例，真实场景中一般为 ajax 请求
			this.listLoading = true
			setTimeout(() => {
				for (let i = 0; i < 10; i++) {
					this.list.push(this.list.length + 1)
				}

				// 加载状态结束
				this.listLoading = false

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
	background-color: #fff;
}

.van-search {
	position: sticky;
	top: 0;
	left: 0;
	z-index: 999;
}

.my-swipe {
	margin: 0 25px;
	border-radius: 10px;
	overflow: hidden;
	// padding-top: 25px;

	.van-swipe-item {
		// width: 700px;
		.swiper-img {
			width: 100%;
			display: block;
		}
	}
}

.goods-item {
	background-color: #fff;
}
</style>
