<template>
	<Layout>
		<div class="category-container flex-box-column">
			<div class="content flex-box flex-item-1">
				<!-- 左侧一级类目 -->
				<div class="first-cate">
					<div
						v-for="(item, index) in categoryList"
						:key="item.id"
						:class="['cate-item', currentCateIndex === index ? 'current-cate' : '']"
						@click="changeCate($event, index)"
					>
						{{ item.label }}
					</div>
				</div>

				<!-- 右侧二级目录 -->
				<div class="second-cate flex-item-1">
					<div :scroll-y="true" class="second-cate-scroll">
						<div class="cate-banner">{{ categoryList[currentCateIndex].label }}</div>
						<div class="cate-item" v-for="secondCateItem in 3" :key="secondCateItem">
							<div class="title">二级类目{{ secondCateItem }}</div>
							<div class="third-cate">
								<div class="third-cate-item" v-for="thirdCateItem in 8" :key="thirdCateItem" @click="navigateTo">
									<div class="item-image"></div>
									<div class="item-name">三级类目{{ thirdCateItem }}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>

<script>
import Layout from '@components/Layout/index.vue'

export default {
	name: 'Category',
	components: {
		Layout
	},
	data() {
		return {
			// mock数据
			categoryList: [
				{
					id: '0',
					label: '热搜推荐'
				},
				{
					id: '1',
					label: '食品酒水'
				},
				{
					id: '2',
					label: '生鲜果蔬'
				},
				{
					id: '3',
					label: '美妆护肤'
				},
				{
					id: '4',
					label: '个护清洁'
				},
				{
					id: '5',
					label: '精品男装'
				},
				{
					id: '6',
					label: '精品女装'
				},
				{
					id: '7',
					label: '内衣配饰'
				},
				{
					id: '8',
					label: '鞋靴箱包'
				},
				{
					id: '9',
					label: '手机数码'
				},
				{
					id: '10',
					label: '家用电器'
				},
				{
					id: '11',
					label: '电脑办公'
				},
				{
					id: '12',
					label: '运动户外'
				},
				{
					id: '13',
					label: '母婴童装'
				},
				{
					id: '14',
					label: '玩具乐器'
				},
				{
					id: '15',
					label: '家具厨具'
				},
				{
					id: '16',
					label: '计生情趣'
				},
				{
					id: '17',
					label: '图书音像'
				},
				{
					id: '18',
					label: '钟表珠宝'
				},
				{
					id: '19',
					label: '奢侈品'
				},
				{
					id: '20',
					label: '京东国际'
				},
				{
					id: '21',
					label: '家具建材'
				},
				{
					id: '22',
					label: '礼品鲜花'
				},
				{
					id: '23',
					label: '生活充值'
				}
			],
			currentCateIndex: 0
		}
	},
	onLoad() {},
	methods: {
		navigateTo() {
			this.$router.push({ path: 'goodsList' })
		},
		//点击切换分类
		async changeCate(e, index) {
			this.currentCateIndex = index

			// 分类滚动至中间位置
			// let systemInfo = uni.getSystemInfoSync()
			// let { windowHeight, windowWidth } = systemInfo
			// const radio = 750 / windowWidth
			// const { offsetTop } = e.currentTarget
			// const cateHeight = 100 / radio
			// const scrollHeight = offsetTop + cateHeight / 2 - windowHeight / 2
			// if (scrollHeight > 0) {
			// 	this.scrollHeight = parseInt(scrollHeight)
			// }
		}
	}
}
</script>
<style lang="scss" scoped>
.category-container {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	height: calc(100% - 100px);
	color: #2c3e50;
	background-color: #fff;

	.content {
		border-top: 1px solid #eee;
		overflow-y: hidden;
	}
}

.first-cate {
	height: 100%;
	background-color: #f5f5f5;
	width: 180px;
	font-size: 26px;
	text-align: center;
	color: #666;
	overflow-y: auto;

	.cate-item {
		height: 100px;
		line-height: 100px;
	}

	.current-cate {
		background-color: #fff;
		font-size: 28px;
		font-weight: bold;
		color: #333;
		position: relative;
	}
	.current-cate::before {
		position: absolute;
		content: '';
		display: block;
		width: 8px;
		height: 34px;
		background-color: #f42424;
		top: 50%;
		left: 0;
		margin-top: -17px;
	}
}

.second-cate {
	height: 100%;
	overflow-y: auto;
	box-sizing: border-box;

	.second-cate-scroll {
		height: 100%;
		padding-top: 20px;
		box-sizing: border-box;
	}

	.cate-banner {
		background-color: #f42424;
		border-radius: 6px;
		height: 100px;
		color: #fff;
		text-align: center;
		line-height: 100px;
		margin: 0 20px;
	}

	.cate-item {
		box-shadow: -6px 6px 9px -14px #eee;
		margin: 30px 20px 30px 20px;
		border-radius: 8px;
		padding: 20px;

		.title {
			font-size: 26px;
			margin-bottom: 20px;
		}
	}

	.third-cate {
		display: grid;
		grid-template-columns: repeat(3, 130px);
		justify-content: space-between;

		.third-cate-item {
			font-size: 24px;
			margin-bottom: 20px;
			text-align: center;
		}
		.item-image {
			width: 130px;
			height: 130px;
			background-color: #f5f5f5;
		}
		.item-name {
			width: 130px;
		}
	}
}
</style>
