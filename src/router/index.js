import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "@/components/FrontEnd/Index";
import Category from "@/components/FrontEnd/Category";
import Timemachine from "@/components/FrontEnd/Timemachine";
import Article from "@/components/FrontEnd/Article";

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

export default router
