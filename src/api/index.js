//API进行统一管理

import axiosInstance from "@/api/request";
import mockRequest from "@/api/mockAjax";
//http://gmall-h5-api.atguigu.cn
//三级联动接口：api/product/getBaseCategoryList
//发送数据
export const reqCategoryList = ()=>axiosInstance({url:'/product/getBaseCategoryList',method:'get'});
export const reqGetBannerList = ()=> mockRequest({url:'/banner',method: 'get'});
export const reqGetfloorsList = ()=> mockRequest({url:'/floors',method: 'get'});
//params应该是个空对象
export const reqGetSearchInfo = (params)=> axiosInstance({url:'/list',method:'POST',data:params});
// detail 数据请求
export const reqGoodsInfo = (skuid) => axiosInstance({url:`/item/${skuid}`,method:'get'});
//添加到购物车(对已有物品进行数量改动)
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>axiosInstance({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'});
//购物车请求
export const reqCartList = () => axiosInstance({url:'/cart/cartList',method:'get'});
//删除购物车请求
export const reqDeleteCartItemBySkuId = (skuId)=> axiosInstance({url:`/cart/deleteCart/${skuId}`,method:'delete'});
//修改购物车选中状态
export const reqCartItemClickStatus = (skuID,isChecked)=> axiosInstance({url:`/cart/checkCart/${skuID}/${isChecked}`,method:'get'});
