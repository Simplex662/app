import {reqCategoryList} from '@/api/index'

const states = {
    categoryList: []
}
const actions = {
    async categoryList(context) {
        let result = await reqCategoryList();
        // console.log(result)
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
    states,
    actions,
    mutations,
    getters
}