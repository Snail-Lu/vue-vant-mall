<template>
	<Layout>
		<div class="my">
			<van-row class="header" type="flex" align="center">
				<van-col span="6">
					<van-image round width="60px" height="60px" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
				</van-col>
				<van-col span="8">snail</van-col>
			</van-row>
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
				<van-grid-item icon="photo-o" text="优惠券" />
				<van-grid-item icon="photo-o" text="红包" />
				<van-grid-item icon="photo-o" text="地址簿" />
				<van-grid-item icon="photo-o" text="收藏夹" />
				<van-grid-item icon="photo-o" text="个人资料" />
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
.my {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;

	.header {
		background-color: #fff;
		padding: 20px;
		font-size: 20px;
	}

	.my-order {
		margin-top: 20px;
	}

	.iconfont {
		font-size: 50px;
	}
}
</style>
