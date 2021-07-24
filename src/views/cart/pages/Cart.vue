<template>
	<Layout>
		<div class="cart-container">
			<van-list v-model="loading" :finished="finished" @load="onLoad">
				<van-card
					v-for="(item, index) in list"
					:key="index"
					class="goods-item"
					:title="item.id + item.title"
					:price="item.goodsPrice"
					:origin-price="item.originPrice"
				>
					<template #thumb>
						<div class="flex-box flex-h-center flex-v-center">
							<van-icon
								v-if="item.selected"
								name="checked"
								size="20"
								color="#ee0a24"
								@click="clickToSelectedGoods(index, false)"
							/>
							<van-icon
								v-else-if="!item.selected"
								name="circle"
								size="20"
								color="#c8c9cc"
								@click="clickToSelectedGoods(index)"
							/>
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
					<template #num>
						<van-stepper v-model="item.goodsNum" />
					</template>
				</van-card>
			</van-list>
			<van-submit-bar class="my-submit-bar" :price="3050" button-text="去结算" @submit="onSubmit">
				<van-checkbox v-model="selectedAll" checked-color="#ee0a24">全选</van-checkbox>
			</van-submit-bar>
		</div>
	</Layout>
</template>

<script>
import Layout from '@components/Layout/index.vue'

export default {
	name: 'Cart',
	components: {
		Layout
	},
	data: function () {
		return {
			loading: false,
			finished: false,
			list: []
		}
	},
	computed: {
		selectedAll: {
			// getter
			get: function () {
				return this.list.every((item) => item.selected)
			},
			// setter
			set: function (newValue) {
				this.list.forEach((item) => {
					item.selected = newValue
				})
			}
		}
	},
	methods: {
		onLoad() {
			setTimeout(() => {
				for (let i = 0; i < 10; i++) {
					this.list.push({
						id: i,
						goodsPrice: 2499.1,
						originPrice: 2699,
						goodsNum: 1,
						title:
							'Redmi K40游戏增强版 天玑1200处理器67W闪充 120Hz高刷直屏 12GB+256GB 暗影 游戏电竞智能5G手机 小米 红米',
						goodsAttr: '暗影，12GB+256GB',
						selected: false
					})
				}

				// 加载状态结束
				this.loading = false

				// 数据全部加载完成
				if (this.list.length >= 10) {
					this.finished = true
				}
			}, 1000)
		},

		// 商品选择/取消选择
		clickToSelectedGoods(index, bool = true) {
			this.list[index].selected = bool
		},

		// 结算
		onSubmit() {
			// this.$toast('去结算')
			this.$router.push({ path: 'createOrder' })
		}
	}
}
</script>

<style lang="scss" scoped>
.cart-container {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-bottom: 100px;
	height: calc(100% - 210px);
	overflow-y: auto;

	.my-submit-bar {
		bottom: 100px;
	}
}

/deep/ .van-card__thumb {
	width: 216px;
}
</style>
