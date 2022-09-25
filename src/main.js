import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import router from './router' //引入路由器
//测试引入全局组件
import TypeNav from '@/components/TypeNav'
import Carsouel from '@/components/Carsouel'
import Pagination from '@/components/Pagination'
// import TypeNav from "@/pages/Home/TypeNav";
// import {reqCategoryList} from "@/api";
// console.log('main.js:'+reqCategoryList());
//引入仓库
import store from "@/store"
//引入mockServe
import MockServe from '@/mock/mockServe'
// 引入 swiper 样式
import "swiper/css/swiper.min.css"
//注册全局共享组件
Vue.component(Carsouel.name,Carsouel)
Vue.component(Pagination.name,Pagination)

Vue.config.productionTip = false

//注册全局组件
Vue.component(TypeNav.name,TypeNav)
Vue.use(vueRouter)

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    //注册全局事件总线
    Vue.prototype.$bus = this
  }
}).$mount('#app')
