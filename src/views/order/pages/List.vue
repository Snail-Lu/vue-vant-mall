<template>
	<div class="order-list-container">
		<van-nav-bar left-arrow @click-left="clickToBack" title="订单列表"> </van-nav-bar>
		<div class="goods-tabs-box flex-box flex-v-center">
			<div :class="['tab-item', 'flex-item-1', currentTabIndex === 0 ? 'tab-item-active' : '']" @click="changeTab(0)">
				全部
			</div>
			<div :class="['tab-item', 'flex-item-1', currentTabIndex === 1 ? 'tab-item-active' : '']" @click="changeTab(1)">
				待付款
			</div>
			<div :class="['tab-item', 'flex-item-1', currentTabIndex === 2 ? 'tab-item-active' : '']" @click="changeTab(2)">
				待发货
			</div>
			<div :class="['tab-item', 'flex-item-1', currentTabIndex === 3 ? 'tab-item-active' : '']" @click="changeTab(3)">
				待收货
			</div>
		</div>
		<div
			class="order-list"
			v-infinite-scroll="loadMore"
			infinite-scroll-distance="10"
			infinite-scroll-disabled="loadBusy"
		>
			<div class="order-item" v-for="(goodsItem, goodsIndex) in 4" :key="goodsIndex">
				<div class="order-header flex-box flex-h-between">
					<div>订单号：20210802225637</div>
					<div class="order-status">待发货</div>
				</div>
				<van-card
					v-for="item in 2"
					:key="item"
					class="goods-item"
					price="2699.00"
					desc="8G+128G，黑色"
					num="1"
					title="Redmi K40游戏增强版 天玑1200处理器67W闪充 120Hz高刷直屏 12GB+256GB 暗影 游戏电竞智能5G手机 小米 红米"
					thumb="https://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/178206/9/15027/175199/60fa8560Ea00bcfee/f4df2ce7ecd451cf.jpg!q70.dpg.webp"
				>
				</van-card>
				<div class="order-footer">合计：¥5398.00</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			goodsList: [{ name: 'test' }],
			currentTabIndex: 0
		}
	},
	methods: {
		// 返回上一页
		clickToBack() {
			this.$router.back()
		},
		// 切换tab
		changeTab(index) {
			this.currentTabIndex = index
		},
		// 触底了
		loadMore() {
			console.log('触底了')
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

.goods-tabs-box {
	.tab-item {
		text-align: center;
		padding: 20px 0;
		font-size: 28px;
		background-color: #fff;
	}
	.tab-item-active {
		position: relative;
		&::before {
			position: absolute;
			bottom: 0;
			left: 15%;
			content: '';
			display: block;
			width: 70%;
			height: 4px;
			background-color: rgb(245, 70, 70);
		}
	}
}

.order-list {
	padding-top: 20px;
	.order-item {
		padding: 20px 30px;
		background-color: #fff;
		margin-bottom: 30px;

		.order-header {
			color: #333;
			font-size: 28px;
		}

		.order-status {
			color: #f00;
		}

		.order-footer {
			text-align: right;
			font-size: 30px;
			margin-top: 10px;
		}
	}
}
</style>
