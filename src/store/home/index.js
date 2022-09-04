import {reqCategoryList,reqGetBannerList} from '@/api/index'
//这里一定要写 state 不可以加 s !!! 否则的话刷新网页 三级分类 为空白 需要刷新服务器才出数据
const state = {
    categoryList: [],
    bannerList: []
}
const actions = {
    async getCategoryList(context) {
        let result = await reqCategoryList();
        if (result.code == 200){
            context.commit('GETCATEGORYLIST',result.data)
        }
    },
    async getBannerList(context) {
        let result = await reqGetBannerList();
        if (result.code == 200) {
            context.commit('GETBANNERLIST', result.data)
            // console.log(result)
        }
    }
};
const mutations = {
    'GETCATEGORYLIST':(state,value)=>{
        state.categoryList = value
    },
    'GETBANNERLIST':(state,value)=>{
        state.bannerList = value
    }
};
const getters = {};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}