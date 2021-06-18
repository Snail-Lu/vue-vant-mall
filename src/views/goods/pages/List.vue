<template>
	<div class="goods-list-container">
		<van-nav-bar left-arrow @click-left="clickToBack">
			<template #title>
				<van-search
					v-model="searchKey"
					shape="round"
					background="#f5f5f5"
					placeholder="请输入搜索关键词"
					@search="onSearch"
				/>
			</template>
			<template #right>
				<div @click="onSearch()">搜索</div>
			</template>
		</van-nav-bar>
		<div class="goods-tabs-box flex-box flex-v-center">
			<div class="tab-item flex-item-1">综合</div>
			<div class="tab-item flex-item-1">销量</div>
			<div class="tab-item flex-item-1">有货优先</div>
			<div class="tab-item flex-item-1">筛选</div>
		</div>
		<div
			class="goods-list"
			v-infinite-scroll="loadMore"
			infinite-scroll-distance="10"
			infinite-scroll-disabled="loadBusy"
		>
			<div class="goods-item flex-box" v-for="(goodsItem, goodsIndex) in goodsList" :key="goodsIndex">
				<img class="goods-item-img" src="#" alt="" />
				<div class="goods-item-info">
					<div class="goods-name">
						先科（SAST）LCD1000B 投影仪家用办公超高清小型可连手机wifi一体家庭影院兼容1080P 标准版
					</div>
					<div class="goods-label">商品标签</div>
					<div class="goods-price">
						<span>¥</span>
						<span>999.00</span>
					</div>
				</div>
			</div>
		</div>
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

.goods-tabs-box {
	.tab-item {
		text-align: center;
		padding: 14px 0;
		font-size: 28px;
		background-color: #fff;
	}
}

.goods-list {
	padding-top: 20px;
	.goods-item {
		padding: 20px 30px;
		background-color: #fff;
		&-img {
			width: 140px;
			height: 140px;
			background-color: #f5f5f5;
		}
		&-info {
			margin-left: 10px;
		}

		.goods-name {
			@include multiline-overflow(2);
			font-size: 28px;
		}

		.goods-label {
			font-size: 26px;
			color: $grayFont;
			margin-top: 10px;
		}

		.goods-price {
			color: red;
			margin-top: 10px;
		}
	}
}
</style>
