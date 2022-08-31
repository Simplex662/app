import {reqCategoryList} from '@/api/index'
//这里一定要写 state 不可以加 s !!! 否则的话刷新网页 三级分类 为空白 需要刷新服务器才出数据
const state = {
    categoryList: []
}
const actions = {
    async categoryList(context) {
        let result = await reqCategoryList();
        if (result.code == 200){
            context.commit('CATEGORYLIST',result.data)
        }
    }
};
const mutations = {
    'CATEGORYLIST':(state,value)=>{
        state.categoryList = value
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