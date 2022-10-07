import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'

export default [
    {
        name:'detail',
        path:"/detail/:skuid",
        component:Detail,
        meta:{showFooter:true}
    },
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