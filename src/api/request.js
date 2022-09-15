//引入axios包
import axios from 'axios'
//引入进度条
import nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'

var axiosInstance = axios.create({
    //配置对象给
    //基础路径
    baseURL:'/api',
    //超时时间
    timeout:3000
});

//请求拦截器，请求之前做一些事
axiosInstance.interceptors.request.use(config=>{
    nprogress.start()
    return config
},err=>{})
axiosInstance.interceptors.response.use(res=>{
    //成功的回调函数，服务器相应数据回来以后
    nprogress.done()
    return res.data
},err=>{
    return Promise.reject(new Error('false'))
})

export default axiosInstance