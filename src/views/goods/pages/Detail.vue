<template>
	<div class="goods-detail-container">
		<van-nav-bar left-arrow @click-left="clickToBack" title="商品详情"></van-nav-bar>
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item v-for="(image, index) in swiperImages" :key="index">
				<img v-lazy="image" class="swiper-img" />
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
export default {
	data() {
		return {
			swiperImages: [
				'https://img01.yzcdn.cn/vant/apple-1.jpg',
				'https://img01.yzcdn.cn/vant/apple-2.jpg',
				'https://img01.yzcdn.cn/vant/apple-3.jpg',
				'https://img01.yzcdn.cn/vant/apple-4.jpg'
			]
		}
	},
	methods: {
		// 返回上一页
		clickToBack() {
			this.$router.back()
		}
	}
}
</script>

<style lang="scss" scoped>
/deep/ .van-nav-bar__title {
	max-width: 70%;
	width: 70%;
}
.van-search {
	width: 100%;
	height: 60px;
}

.my-swipe {
	.van-swipe-item {
		color: #fff;
		font-size: 20px;
		height: 400px;
		width: 300%;

		.swiper-img {
			width: 100%;
			height: 400px;
		}
	}
}
</style>
