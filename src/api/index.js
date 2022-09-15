//API进行统一管理

import axiosInstance from "@/api/request";
import mockRequest from "@/api/mockAjax"
//http://gmall-h5-api.atguigu.cn
//三级联动接口：api/product/getBaseCategoryList
//发送数据
export const reqCategoryList = ()=>axiosInstance({url:'/product/getBaseCategoryList',method:'get'})
export const reqGetBannerList = ()=> mockRequest({url:'/banner',method: 'get'})
export const reqGetfloorsList = ()=> mockRequest({url:'/floors',method: 'get'})
//params应该是个空对象
export const reqGetSearchInfo = (params)=> axiosInstance({url:'/list',method:'POST',data:params})

