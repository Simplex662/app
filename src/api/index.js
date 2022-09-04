//API进行统一管理

import axiosInstance from "@/api/request";
import mockRequest from "@/api/mockAjax"
//http://gmall-h5-api.atguigu.cn
//三级联动接口：api/product/getBaseCategoryList
//发送数据
export const reqCategoryList = ()=>axiosInstance({url:'/product/getBaseCategoryList',method:'get'})
export const reqGetBannerList = ()=> mockRequest({url:'/banner',method: 'post'})
export const reqGetfloorsList = ()=> mockRequest({url:'/floors',method: 'post'})

