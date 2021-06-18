import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用vue-router
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@views/home/pages/Home.vue'),
		meta: { title: '首页', keepAlive: false }
	},
	{
		path: '/category',
		name: 'Category',
		component: () => import('@views/category/pages/Category.vue'),
		meta: { title: '分类', keepAlive: false }
	},
	{
		path: '/cart',
		name: 'Cart',
		component: () => import('@views/cart/pages/Cart.vue'),
		meta: { title: '购物车', keepAlive: false }
	},
	{
		path: '/my',
		name: 'My',
		component: () => import('@views/member/pages/My.vue'),
		meta: { title: '我的', keepAlive: false }
	},
	{
		path: '/search',
		name: 'Search',
		component: () => import('@views/goods/pages/Search.vue'),
		meta: { title: '搜索', keepAlive: false }
	},
	{
		path: '/goodsList',
		name: 'GoodsList',
		component: () => import('@views/goods/pages/List.vue'),
		meta: { title: '商品列表', keepAlive: false }
	}
]

const router = new VueRouter({
	routes
})

export default router
