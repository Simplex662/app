import { reqGetSearchInfo } from '@/api/index'

const state = {
    searchList:{}
}
const actions = {
    async getSearchInfo(context, params = {}) {
        let request = await reqGetSearchInfo(params);

        if(request.code = 200){
            context.commit('GETSEARCH',request.data)
        }
    }
};
const mutations = {
    'GETSEARCH':(state,value)=>{
        state.searchList = value
    }
};

//计算属性
//项目当中getter 主要的作用是：简化仓库中的数据（简化数据而生）
//可以把我们将来在组件中需要的数据简化一下【方便将来组件获取数据】
const getters = {
    goodsList(){
        return state.searchList.goodsList || []
    },
    attrsList(){
        return state.searchList.attrsList || []
    },
    trademarkList(){
        return state.searchList.trademarkList || []
    }
};

export default {
    namespaced:true,
    state,
    actions,
    mutations,
    getters
}