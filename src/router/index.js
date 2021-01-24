import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "@/components/FrontEnd/Index";
import Category from "@/components/FrontEnd/Category";
import Timemachine from "@/components/FrontEnd/Timemachine";
import Article from "@/components/FrontEnd/Article";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import CoverArticle from "@/components/FrontEnd/CoverArticle";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/category/:category_name',
        name: 'Category',
        component: Category
    },
    {
        path: '/article/:id',
        name: 'Article',
        component: Article
    },
    {
        path: '/timemachine',
        name: 'Timemachine',
        component: Timemachine
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/cover_article',
        name: 'CoverArticle',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: CoverArticle
    }
]

const router = new VueRouter({
  mode: 'history',
  routes,
	scrollBehavior(to, from, savedPosition) {
        if(savedPosition) {
            return savedPosition;
        } else {
            if (to.hash) {
                return {
                    selector: '#user-content-'+ to.hash.substring(1)
                }
            } else {
                return {
                    x: 0,
                    y: 0
                }
            }
        }
	}
})

NProgress.configure({
    easing: 'ease',  // 动画方式
    speed: 500,  // 递增进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3 // 初始化时的最小百分比
})

//在路由跳转前用NProgress.start()标记下进度条开始
router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
});

//在路由跳转后用NProgress.done()标记下结束
router.afterEach(() => {
    NProgress.done()
})
export default router
