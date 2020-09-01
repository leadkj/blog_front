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
        redirect: '/index',
        meta: {
            title: '首页'
        }
    },
    {
        path: '/index',
        name: 'Index',
        component: IndexCpn,
        meta: {
            title: '首页',
        }
    },
    {
        path: '/categorys/:id',
        name: 'List_Category',
        component: ContentCpn,
        meta:{
            title: '文章列表'
        }
    },
    {
        path: '/tags/:id',
        name: 'List_Tag',
        component: ArticleTag,
        meta: {
            title: '文章列表'
        }
    },
    {
        path: '/articles/:id',
        name: 'Detail',
        component: Article,
        meta: {
            title: '文章详情'
        }
    },
    {
        path: '/search/:keyword',
        name: 'search',
        component: SearchCpn,
        meta: {
            title: '搜索结果'
        }
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
router.beforeEach((to, from, next) => {

    document.title = to.meta.title
    // console.log(to);
    next()
})
export default router
