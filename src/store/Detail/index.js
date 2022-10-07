import {reqGoodsInfo} from '@/api/index'

const state = {
    goodsInfo:{}
};

const actions = {
    async getGoodsInfo(context, skuid) {
        let request = await reqGoodsInfo(skuid);
        if (request.code == 200 ){
            context.commit('GETGOODSINFO',request.data);
            console.log(request);
        }
    }
};

const mutations = {
    'GETGOODSINFO':(stats,value)=>{
        state.goodsInfo = value
    }
};

const getters = {
    categoryView(){
        // 防止空数据
        return state.goodsInfo.categoryView || {};
    },
    skuInfo(){
        return state.goodsInfo.skuInfo || {}
    },
    spuSaleAttrList(){
        return state.goodsInfo.spuSaleAttrList || {}
    }
};

export default {
    namespaced:true,
    state,
    actions,
    mutations,
    getters
}