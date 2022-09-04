import vueRouter from 'vue-router'

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

// vue.use(vueRouter)
//保存VueRouter原型上的 push | replace 方法
let originPush = vueRouter.prototype.push
let originReplace = vueRouter.prototype.replace
//重写 VueRouter上的push方法

vueRouter.prototype.push = function (location,resolve,reject) {
    if (resolve && reject){
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}

vueRouter.prototype.replace = function (location,resolve,reject) {
    if (resolve && reject){
        //call调用一次，都可以篡改函数上下文一次  与apply的区别：call参数用逗号隔开，apply参数是一个数组
        originReplace.call(location,resolve,reject)
    }else{
        originReplace.call(location,()=>{},()=>{})
    }
}

export default new vueRouter({
    routes: [
        {
            path:'/home',
            component:Home,
            meta:{showFooter:true}
        },
        {
            path: '/login',
            component: Login,
            meta:{showFooter:false}
        },
        {
            path: '/register',
            component: Register,
            meta:{showFooter:false}
        },
        {
            name:'search',
            path: '/search/:keyword?',//
            component: Search,
            meta:{showFooter:true},
            props:($route)=>{
                return{
                    keyword:$route.params.keyword
                }
            }
        },
        {
            path: '*',
            redirect: '/home'
        }
    ]
})