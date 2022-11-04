import { reqGoodsInfo,reqAddOrUpdateShopCart } from '@/api/index';
import {getUUID} from "@/utils/uuid_token";

const state = {
    goodsInfo:{},
    //游客的临时id
    uuid_token:getUUID()
};

const actions = {
    async getGoodsInfo(context, skuid) {
        let request = await reqGoodsInfo(skuid);
        if (request.code == 200 ){
            context.commit('GETGOODSINFO',request.data);
        }
    },
    async addOrUpdateShopCart(context, {skuId, skuNum}) {
        let request = await reqAddOrUpdateShopCart(skuId, skuNum);
        if (request.code==200){
            return "添加成功";
        }else{
            return Promise.reject(new Error("添加失败"))
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