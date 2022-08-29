import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import router from './router' //引入路由器
import TypeNav from '@/pages/Home/TypeNav'

//测试引入全局组件
// import TypeNav from "@/pages/Home/TypeNav";
// import {reqCategoryList} from "@/api";
// console.log('main.js:'+reqCategoryList());
//引入仓库
import store from "@/store"

Vue.config.productionTip = false

//注册全局组件
Vue.component(TypeNav.name,TypeNav)
Vue.use(vueRouter)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
