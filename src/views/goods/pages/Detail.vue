<template>
	<div class="goods-detail-container">
		<!-- 顶部导航 -->
		<van-nav-bar left-arrow @click-left="clickToBack" title="商品详情"></van-nav-bar>
		<!-- 商品图片轮播 -->
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item v-for="(image, index) in swiperImages" :key="index">
				<img v-lazy="image" class="swiper-img" />
			</van-swipe-item>
		</van-swipe>
		<!-- 商品名称价格等信息 -->
		<div class="goods-info">
			<div class="flex-box flex-h-between">
				<div class="goods-price">
					<span>¥</span>
					<span class="large-size">3099</span>
					<span>.00</span>
				</div>
				<div class="goods-fav flex-shrink-0 flex-box-column flex-v-center">
					<van-icon name="like-o" />
					<span>收藏</span>
				</div>
			</div>
			<div class="goods-name">
				极米（XGIMI）NEW Z6X 投影仪家用 投影机卧室（全自动梯形校正 真实高亮 哈曼卡顿原装音响 手机同屏）
			</div>
			<div class="flex-box">
				<div class="goods-desc">
					酷暑宅家，大屏选极米【好价到手3099！白条高至12期免息！晒单送138元芒果季卡】卧室影院升级！宝马也在用的哈曼原装音响【限量礼盒送豪华礼包】
					/三脚支架，速抢速抢GO
				</div>
				<van-icon name="arrow-down" />
			</div>
		</div>

		<!-- 已选商品规格信息 -->
		<div class="goods-spec">
			<div class="flex-box flex-v-center" @click="showSkuPanel = true">
				<div class="header">已选</div>
				<div>NEW Z6X【升级轻薄影院】，1个</div>
			</div>
			<div class="flex-box flex-v-center freight">
				<div class="header">运费</div>
				<div>免运费</div>
			</div>
		</div>
		<!-- 商品详情区域 -->
		<div class="goods-detail-info">
			<van-tabs v-model="activeTab">
				<van-tab title="商品介绍">
					<img
						class="goods-detail-img"
						src="http://img30.360buyimg.com/sku/jfs/t1/155605/27/14838/602908/60487f75Eaaa09157/34ffe58eb61768f3.png"
					/>
					<img
						class="goods-detail-img"
						src="http://img30.360buyimg.com/sku/jfs/t1/170000/24/11335/246917/60477448E9e0ab2ed/4182f4ee68a7955b.jpg"
					/>
					<img
						class="goods-detail-img"
						src="http://img30.360buyimg.com/sku/jfs/t1/125519/39/15397/836965/5f8ed02cE7d308754/0cab366b658b6185.jpg"
						alt=""
					/>
				</van-tab>
				<van-tab title="规格参数">
					<img
						class="goods-detail-img"
						src="http://img30.360buyimg.com/sku/jfs/t1/142026/40/17155/360575/5fcb23e6Ef7fd4a05/04ec4705ea53bec2.jpg"
					/>
				</van-tab>
				<van-tab title="售后保障">
					<img
						class="goods-detail-img"
						src="http://img30.360buyimg.com/sku/jfs/t1/150404/31/18216/454715/601cbebeE17c595ef/59a3ca18654bf4d2.jpg"
					/>
				</van-tab>
			</van-tabs>
		</div>
		<!-- sku选择弹窗 -->
		<van-sku
			v-model="showSkuPanel"
			:sku="sku"
			:goods="goods"
			:goods-id="123456"
			@buy-clicked="onBuyClicked"
			@add-cart="onAddCartClicked"
		/>
		<!-- 底部操作栏 -->
		<van-goods-action>
			<van-goods-action-icon icon="chat-o" text="客服" dot />
			<van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
			<van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
			<van-goods-action-button type="warning" text="加入购物车" @click="showSkuPanel = true" />
			<van-goods-action-button type="danger" text="立即购买" @click="showSkuPanel = true" />
		</van-goods-action>
	</div>
</template>

<script>
import { Toast } from 'vant'
export default {
	data() {
		return {
			swiperImages: [
				'http://m.360buyimg.com/mobilecms/s750x750_jfs/t1/176108/29/15346/114755/60ccbcd8E02351e9a/601adbd1a0abdaee.jpg!q80.dpg.webp',
				'http://m.360buyimg.com/mobilecms/s843x843_jfs/t1/154447/20/17970/159337/601bbc11E0bcfa2fe/7ba068b0b8f33701.jpg!q70.dpg.webp',
				'http://m.360buyimg.com/mobilecms/s843x843_jfs/t1/169407/2/5607/178185/601bbc12E49c8ce40/795778d71443162b.jpg!q70.dpg.webp',
				'http://m.360buyimg.com/mobilecms/s843x843_jfs/t1/168569/18/10771/178163/6046067aEc5ebba1e/10437c6f7dee1a09.jpg!q70.dpg.webp'
			],
			activeTab: '',
			showSkuPanel: false,
			sku: {
				// 数据结构见下方文档
				tree: [
					{
						k: '颜色', // skuKeyName：规格类目名称
						k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
						v: [
							{
								id: '1', // skuValueId：规格值 id
								name: '红色', // skuValueName：规格值名称
								imgUrl: 'https://img01.yzcdn.cn/1.jpg' // 规格类目图片，只有第一个规格类目可以定义图片
								// previewImgUrl: 'https://img01.yzcdn.cn/1p.jpg' // 用于预览显示的规格类目图片
							},
							{
								id: '2',
								name: '蓝色',
								imgUrl: 'https://img01.yzcdn.cn/2.jpg'
								// previewImgUrl: 'https://img01.yzcdn.cn/2p.jpg'
							}
						],
						largeImageMode: false //  是否展示大图模式
					}
				],
				// 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
				list: [
					{
						id: 2259, // skuId
						s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
						s2: '2', // 规格类目 k_s 为 s2 的对应规格值 id
						price: 100, // 价格（单位分）
						stock_num: 110 // 当前 sku 组合对应的库存
					},
					{
						id: 2259, // skuId
						s1: '2', // 规格类目 k_s 为 s1 的对应规格值 id
						s2: '2', // 规格类目 k_s 为 s2 的对应规格值 id
						price: 120, // 价格（单位分）
						stock_num: 170 // 当前 sku 组合对应的库存
					}
				],
				price: '1.00', // 默认价格（单位元）
				stock_num: 227, // 商品总库存
				collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
				none_sku: false, // 是否无规格商品
				hide_stock: false // 是否隐藏剩余库存
			},
			goods: {
				picture: 'https://img01.yzcdn.cn/1.jpg'
			}
		}
	},
	methods: {
		// 返回上一页
		clickToBack() {
			this.$router.back()
		},
		// 立即购买
		onBuyClicked() {
			this.showSkuPanel = false
			this.$router.push({ path: 'createOrder' })
		},
		// 加入购物车
		onAddCartClicked() {
			this.showSkuPanel = false
			Toast('已加入购物车')
		}
	}
}
</script>

<style lang="scss" scoped>
.goods-detail-container {
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

.my-swipe {
	.van-swipe-item {
		color: #fff;
		height: 750px;
		width: 300%;

		.swiper-img {
			width: 100%;
			height: 750px;
		}
	}
}

.goods-info {
	margin-top: 10px;
	background-color: #fff;
	border-radius: 0 0 20px 20px;
	overflow: hidden;
	padding: 20px 36px;
}

.goods-price {
	color: #f2270c;

	.large-size {
		font-size: 56px;
	}
}

.goods-name {
	font-weight: bold;
	color: #262626;
	font-size: 32px;
}

.goods-fav {
	width: 100px;
	position: relative;
}

.goods-desc {
	font-size: 24px;
	color: #666;
}

.goods-spec {
	margin-top: 24px;
	padding: 20px 60px 20px 36px;
	border-radius: 24px;
	background-color: #fff;
	overflow: hidden;
	position: relative;
	font-size: 26px;

	.header {
		font-weight: 600;
		font-size: 28px;
		margin-right: 20px;
	}
	&::after {
		position: absolute;
		top: 20px;
		right: 20px;
		content: '';
		display: inline-block;
		width: 40px;
		height: 40px;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAQdJREFUWAljYBgFoyEwGgKjITAaAqMhMBoCoyEwGgIjOQQYqeF5PT09mR8/fnQxMjI6gMz7////AQ4OjrJLly49odR8ih0IctzPnz8vAh0lhOwYoGPfsbOz61PqSBZkQ/v7+z3//v07CyTGzMycVlhYuB1ZHhsbFHJAcRTHgdSBHAyVi8KmD1kMn71MyAqhjpMBisnAHIosj40Ni1ZS5ZDV47MXxYHImgYLG8WBoGgFOgyUsJ9A2QTdCcoQuBThk0PWg8/eQZ9JmJF9Qg775cuXn6SlpZf9+fNHEpgeRYD4C9CcLcBiJpjSHEyOe0b1jIbAaAiMhsBoCIyGwGgIjIbAaAgMrxAAALr6Z6hdILb6AAAAAElFTkSuQmCC);
		background-repeat: no-repeat;
		background-size: 40px;
	}

	.freight {
		margin-top: 10px;
	}
}

.goods-detail-info {
	margin-top: 24px;
	border-radius: 24px;
	overflow: hidden;

	.goods-detail-img {
		display: block;
		width: 100%;
	}
}
</style>
