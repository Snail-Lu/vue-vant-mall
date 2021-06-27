<template>
	<div class="">
		<!-- 顶部导航 -->
		<van-nav-bar left-arrow @click-left="clickToBack" title="测试页"></van-nav-bar>
	</div>
</template>

<script>
export default {
	name: 'Test',
	data() {
		return {}
	},
	methods: {
		clickToBack() {
			this.$router.back()
		}
	}
}
</script>

<style lang="scss" scoped></style>
