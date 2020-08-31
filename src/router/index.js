import Vue from 'vue'
import VueRouter from 'vue-router'
import ContentCpn from "../components/ContentCpn";
import Article from "../components/Article";
import IndexCpn from "../components/IndexCpn";
import SearchCpn from "../components/SearchCpn";
import ArticleTag from "../components/ArticleTag";


Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/index'
	},
	{
		path: '/index',
		name: 'Index',
		component: IndexCpn
	},
	{
		path: '/categorys/:id',
		name: 'List_Category',
		component: ContentCpn
	},
	{
		path: '/tags/:id',
		name: 'List_Tag',
		component: ArticleTag
	},
	{
		path: '/articles/:id',
		name: 'Detail',
		component: Article
	},
	{
		path: '/search/:keyword',
		name: 'search',
		component: SearchCpn
	}

]


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}


const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
