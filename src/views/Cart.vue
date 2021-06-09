<template>
	<Layout>
		<div class="cart">
			<van-list v-model="loading" :finished="finished" @load="onLoad">
				<!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
				<van-card
					v-for="item in list"
					:key="item"
					class="goods-item"
					price="2.00"
					title="商品标题"
					thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
				>
					<template #tags>
						<van-tag plain type="danger">标签</van-tag>
						<van-tag plain type="danger">标签</van-tag>
					</template>
				</van-card>
			</van-list>
			<van-submit-bar class="my-submit-bar" :price="3050" button-text="去结算" @submit="onSubmit">
				<van-checkbox v-model="checked">全选</van-checkbox>
			</van-submit-bar>
		</div>
	</Layout>
</template>

<script>
import { Button, SubmitBar, Checkbox, Card, Tag, List } from 'vant'
import Layout from '../components/Layout'

export default {
	name: 'Cart',
	components: {
		[Button.name]: Button,
		[SubmitBar.name]: SubmitBar,
		[Checkbox.name]: Checkbox,
		[Card.name]: Card,
		[Tag.name]: Tag,
		[List.name]: List,
		Layout
	},
	data: function () {
		return {
			loading: false,
			finished: false,
			list: []
		}
	},
	methods: {
		onLoad() {
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
		}
	}
}
</script>

<style lang="scss" scoped>
.cart {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-bottom: 50px;

	.my-submit-bar {
		bottom: 50px;
	}
}
</style>
