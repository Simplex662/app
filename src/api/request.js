//引入axios包
import axios from 'axios'
//引入进度条
import nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'
//引入uuid,先注册 store 仓库
import store from '@/store'

var axiosInstance = axios.create({
    //配置对象给
    //基础路径
    baseURL:'/api',
    //超时时间
    timeout:3000
});

//请求拦截器，请求之前做一些事：进入条
axiosInstance.interceptors.request.use(config=>{
    if (store.state.detail.uuid_token){
        //此处请求头信息加入字段（userTempId） : 此处是与后端商量好的
        config.headers.userTempId = store.state.detail.uuid_token;
    }
    nprogress.start();
    return config
},err=>{});
axiosInstance.interceptors.response.use(res=>{
    //成功的回调函数，服务器相应数据回来以后
    nprogress.done();
    return res.data
},err=>{
    return Promise.reject(new Error('false'))
})

export default axiosInstance