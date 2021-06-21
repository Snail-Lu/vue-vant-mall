<template>
	<div class="goods-detail-container">
		<van-nav-bar left-arrow @click-left="clickToBack" title="商品详情"></van-nav-bar>
		<van-swipe @change="onChange">
			<van-swipe-item>1</van-swipe-item>
			<van-swipe-item>2</van-swipe-item>
			<van-swipe-item>3</van-swipe-item>
			<van-swipe-item>4</van-swipe-item>
			<template #indicator>
				<div class="custom-indicator">{{ current + 1 }}/4</div>
			</template>
		</van-swipe>
	</div>
</template>

<script>
export default {
	data() {
		return {
			goodsList: [{ name: 'test' }]
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
</style>
