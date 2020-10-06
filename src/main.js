import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AtComponents from 'at-ui'
import 'at-ui-style'
import './assets/css/base.css'
import './assets/css/index.css'
import './assets/css/fonts.css'
import RaScrolltop from 'ra-scrolltop'
import ScrollReveal from 'scrollreveal'
import EasyBar from "easy-bar";
import VueLazyload from 'vue-lazyload'
import "github-markdown-css"

Vue.use(EasyBar);
Vue.config.productionTip = false
Vue.use(AtComponents)
Vue.use(RaScrolltop)
Vue.prototype.$scrollReveal = ScrollReveal
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'https://ddcdn.jd.com/ddimg/jfs/t1/111046/9/16142/166512/5f4a8546Ec86be39a/9aab3ba8b0eff507.gif',
  attempt: 1
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
