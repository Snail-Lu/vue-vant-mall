<template>
	<Layout>
		<div class="category">
			<van-tree-select :items="categoryList" :active-id.sync="activeId" :main-active-index.sync="activeIndex" />
		</div>
	</Layout>
</template>

<script>
import { Button, TreeSelect } from 'vant'
import Layout from '../components/Layout'

export default {
	name: 'Category',
	components: {
		[Button.name]: Button,
		[TreeSelect.name]: TreeSelect,
		Layout
	},
	data: function () {
		return {
			categoryList: [
				{
					// 导航名称
					text: '浙江',
					// 该导航下所有的可选项
					children: [
						{
							// 名称
							text: '温州',
							// id，作为匹配选中状态的标识符
							id: 1
						},
						{
							text: '杭州',
							id: 2
						}
					]
				},
				{
					// 导航名称
					text: '江苏',
					// 该导航下所有的可选项
					children: [
						{
							// 名称
							text: '苏州',
							// id，作为匹配选中状态的标识符
							id: 3
						},
						{
							text: '南京',
							id: 4
						}
					]
				},
				{
					// 导航名称
					text: '广东',
					// 该导航下所有的可选项
					children: [
						{
							// 名称
							text: '深圳',
							// id，作为匹配选中状态的标识符
							id: 5
						},
						{
							text: '广州',
							id: 6
						}
					]
				},
				{
					// 导航名称
					text: '福建',
					// 该导航下所有的可选项
					children: [
						{
							// 名称
							text: '福州',
							// id，作为匹配选中状态的标识符
							id: 7
						},
						{
							text: '厦门',
							id: 8
						}
					]
				}
			],
			activeId: 1,
			activeIndex: 0
		}
	}
}
</script>

<style>
.category {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	height: 100%;
	color: #2c3e50;
	background-color: #fff;
}
</style>
