<template>
	<div class="search-container">
		<van-nav-bar left-arrow @click-left="clickToBack">
			<template #title>
				<van-search v-model="searchKey" shape="round" background="#f5f5f5" placeholder="请输入搜索关键词" />
			</template>
			<template #right>
				<div @click="onSearch">搜索</div>
			</template>
		</van-nav-bar>
		<!-- 搜索历史 -->
		<div class="search-history" v-if="searchHistoryList.length > 0">
			<div class="search-history-header flex-box flex-h-between flex-v-center">
				<span>搜索历史</span>
				<van-icon name="delete-o" @click="clearSearchHistory"></van-icon>
			</div>
			<div class="search-history-content">
				<div class="search-history-item" v-for="(item, index) in searchHistoryList" :key="index">{{ item }}</div>
			</div>
		</div>
		<!-- 热门搜索 -->
		<div class="search-history">
			<div class="search-history-header flex-box flex-h-between flex-v-center">
				<span>热门搜索</span>
				<!-- <van-icon name="replay" /> -->
			</div>
			<div class="search-history-content">
				<div class="search-history-item" v-for="(item, index) in hotSearchList" :key="index">{{ item }}</div>
			</div>
		</div>
	</div>
</template>

<script>
import { local } from '@utils/storage.js'
export default {
	name: 'Search',
	data() {
		return {
			searchKey: '',
			searchHistoryList: [], // 搜索历史
			// 热门搜索
			hotSearchList: [
				'iPhone 12',
				'618盛典',
				'小米11',
				'跨店满减',
				'智能空调',
				'小家电',
				'夏日补水',
				'夏日T恤',
				'遮阳伞'
			]
		}
	},
	created() {
		let res = local.get('searchHistory')
		if (res) {
			this.searchHistoryList = res
		}
	},
	methods: {
		// 返回上一页
		clickToBack() {
			this.$router.back()
		},

		// 搜索
		onSearch() {
			const { searchKey } = this
			if (!this.searchHistoryList.includes(searchKey) && searchKey.trim()) {
				this.searchHistoryList.push(searchKey)
				local.set('searchHistory', this.searchHistoryList)
			}
		},

		// 清空搜索历史
		clearSearchHistory() {
			this.$dialog
				.confirm({
					title: '提示',
					message: '确认清空搜索历史?'
				})
				.then(() => {
					this.searchHistoryList = []
					local.remove('searchHistory')
				})
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

.search-container {
	.search-history {
		padding: 10px 32px;
		font-size: 30px;
		font-weight: bold;

		&-item {
			display: inline-block;
			padding: 10px 30px;
			background-color: #fff;
			border-radius: 100px;
			margin: 20px 20px 0 0;
			font-size: 24px;
			color: #555;
		}
	}
}
</style>
