<template>
	<div class="create-order-container">
		<!-- 顶部导航 -->
		<van-nav-bar left-arrow @click-left="clickToBack" title="创建订单"></van-nav-bar>
		<van-contact-card type="edit" name="snail" tel="13112341234" @click="onEdit" />
		<van-list :finished="finished" @load="onLoad">
			<van-card
				v-for="(item, index) in list"
				:key="index"
				class="goods-item"
				:title="item.id + item.title"
				:price="item.goodsPrice"
				:origin-price="item.originPrice"
				num="2"
			>
				<template #thumb>
					<div class="flex-box flex-h-center flex-v-center">
						<van-image
							width="88"
							height="88"
							src="https://img10.360buyimg.com/mobilecms/s234x234_jfs/t1/178206/9/15027/175199/60fa8560Ea00bcfee/f4df2ce7ecd451cf.jpg!q70.dpg.webp"
						/>
					</div>
				</template>
				<template #desc>
					<van-tag round color="#f2f2f2" text-color="#333">{{ item.goodsAttr }}</van-tag>
				</template>
			</van-card>
		</van-list>
		<van-cell-group :border="false">
			<van-cell title="商品总价" value="5899" :border="false" />
			<van-cell title="运费" value="0" :border="false" />
			<van-cell title="优惠" value="-1000" :border="false" />
			<van-cell title="实付" value="4899" :border="false" />
		</van-cell-group>

		<!-- 底部操作栏 -->
		<van-submit-bar :price="489900" button-text="提交订单" @submit="onSubmit" />
	</div>
</template>

<script>
import { Toast } from 'vant'
export default {
	data() {
		return {
			list: [
				{
					id: 1,
					goodsPrice: 2499.1,
					originPrice: 2699,
					goodsNum: 1,
					title: 'Redmi K40游戏增强版 天玑1200处理器67W闪充 120Hz高刷直屏 12GB+256GB 暗影 游戏电竞智能5G手机 小米 红米',
					goodsAttr: '暗影，12GB+256GB',
					selected: false
				},
				{
					id: 2,
					goodsPrice: 2499.1,
					originPrice: 2699,
					goodsNum: 1,
					title: 'Redmi K40游戏增强版 天玑1200处理器67W闪充 120Hz高刷直屏 12GB+256GB 暗影 游戏电竞智能5G手机 小米 红米',
					goodsAttr: '暗影，12GB+256GB',
					selected: false
				}
			]
		}
	},
	methods: {
		// 返回上一页
		clickToBack() {
			this.$router.back()
		},
		// 编辑收货地址
		onEdit() {
			Toast('编辑')
		},
		// 提交订单
		onSubmit() {
			Toast('提交成功！')
			setTimeout(() => {
				this.$router.back()
			}, 1500)
		}
	}
}
</script>

<style lang="scss" scoped>
.create-order-container {
	padding-bottom: 120px;
	background-color: #f5f5f5;
}
/deep/ .van-nav-bar__title {
	max-width: 70%;
	width: 70%;
}

/deep/ .van-tabs__wrap {
	padding-bottom: 20px;
}

.van-nav-bar {
	position: sticky;
	top: 0;
	left: 0;
	z-index: 999;
}
</style>
