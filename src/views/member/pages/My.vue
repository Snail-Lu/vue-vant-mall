<template>
	<Layout>
		<div class="my-container">
			<div class="header flex-box flex-v-center">
				<van-image round width="60px" height="60px" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
				<div class="nick-name">不如山中做妖怪</div>
				<div class="member-label">普通会员</div>
			</div>
			<van-cell title="我的订单" is-link to="orderList" class="my-order" />
			<van-grid :column-num="5">
				<van-grid-item text="待付款">
					<template #icon>
						<i class="iconfont icon-pending"></i>
					</template>
				</van-grid-item>
				<van-grid-item text="待发货">
					<template #icon>
						<i class="iconfont icon-bag"></i>
					</template>
				</van-grid-item>
				<van-grid-item text="待收货">
					<template #icon>
						<i class="iconfont icon-track"></i>
					</template>
				</van-grid-item>
				<van-grid-item text="已完成">
					<template #icon>
						<i class="iconfont icon-completed"></i>
					</template>
				</van-grid-item>
				<van-grid-item text="退货/退款">
					<template #icon> <i class="iconfont icon-money"></i> </template
				></van-grid-item>
			</van-grid>

			<van-cell title="我的服务" is-link to="test" class="my-order" />
			<van-grid :column-num="5">
				<van-grid-item text="优惠券">
					<template #icon>
						<i class="iconfont icon-coupon"></i>
					</template>
				</van-grid-item>
				<van-grid-item text="积分">
					<template #icon>
						<i class="iconfont icon-jifen"></i>
					</template>
				</van-grid-item>
				<van-grid-item text="地址簿">
					<template #icon>
						<i class="iconfont icon-location"></i>
					</template>
				</van-grid-item>
				<van-grid-item text="收藏夹">
					<template #icon>
						<i class="iconfont icon-star"></i>
					</template>
				</van-grid-item>
				<van-grid-item text="个人资料">
					<template #icon>
						<i class="iconfont icon-gerenziliao"></i>
					</template>
				</van-grid-item>
			</van-grid>
		</div>
	</Layout>
</template>

<script>
import Layout from '@components/Layout/index.vue'

export default {
	name: 'My',
	components: {
		Layout
	}
}
</script>

<style lang="scss" scoped>
.my-container {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;

	.header {
		background-image: linear-gradient(to bottom, #74b2f0, #45a0fc);
		color: #fff;
		height: 260px;
		font-size: 20px;
		padding: 0 40px;

		.nick-name {
			font-size: 36px;
			margin-left: 20px;
			max-width: 260px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.member-label {
			height: 30px;
			font-size: 20px;
			background-color: rgb(248, 190, 103);
			line-height: 30px;
			border-radius: 30px;
			text-align: center;
			padding: 0 10px;
			margin-left: 10px;
		}
	}

	.my-order {
		margin-top: 20px;
	}

	.iconfont {
		font-size: 50px;
	}
}
</style>
