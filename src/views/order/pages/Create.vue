<template>
	<div class="goods-detail-container">
		<!-- 顶部导航 -->
		<van-nav-bar left-arrow @click-left="clickToBack" title="创建订单"></van-nav-bar>
		<van-contact-card type="edit" name="snail" tel="13112341234" @click="onEdit" />
		<van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img01.yzcdn.cn/vant/ipad.jpeg" />

		<!-- 底部操作栏 -->
		<van-submit-bar :price="400" button-text="提交订单" @submit="onSubmit" />
	</div>
</template>

<script>
import { Toast } from 'vant'
export default {
	data() {
		return {}
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
