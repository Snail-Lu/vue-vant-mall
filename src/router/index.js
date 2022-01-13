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
	},
	{
		path: '/goodsDetail',
		name: 'GoodsDetail',
		component: () => import('@views/goods/pages/Detail.vue'),
		meta: { title: '商品详情', keepAlive: false }
	},
	{
		path: '/createOrder',
		name: 'CreateOrder',
		component: () => import('@views/order/pages/Create.vue'),
		meta: { title: '创建订单', keepAlive: false }
	},
	{
		path: '/orderList',
		name: 'OrderList',
		component: () => import('@views/order/pages/List.vue'),
		meta: { title: '订单列表', keepAlive: false }
	},
	{
		path: '/test',
		name: 'Test',
		component: () => import('@views/member/pages/Test.vue'),
		meta: { title: '测试页', keepAlive: false }
	}
]

const router = new VueRouter({
	mode: 'hash',
	bash: '/vue-vant-mall',
	routes
})

export default router
