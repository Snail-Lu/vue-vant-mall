import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用vue-router
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@views/pages/Home.vue'),
		meta: { title: '首页', keepAlive: false }
	},
	{
		path: '/category',
		name: 'Category',
		component: () => import('@views/pages/Category.vue'),
		meta: { title: '分类', keepAlive: false }
	},
	{
		path: '/cart',
		name: 'Cart',
		component: () => import('@views/pages/Cart.vue'),
		meta: { title: '购物车', keepAlive: false }
	},
	{
		path: '/my',
		name: 'My',
		component: () => import('@views/pages/My.vue'),
		meta: { title: '我的', keepAlive: false }
	}
]

const router = new VueRouter({
	routes
})

export default router
