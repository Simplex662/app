import { reqCartList,reqDeleteCartItemBySkuId,reqCartItemClickStatus } from '@/api/index';

const state = {
    cartList:[],
};
const actions = {
    async getCartList(context, value) {
        const request = await reqCartList();
        if (request.code == 200 ){
            context.commit("GETCARTLIST",request.data);
        }
    },
    async deleteCartItem(context, skuId) {
        const result = await reqDeleteCartItemBySkuId(skuId);
        if (result.code == 200 ){
            return "ok";
        }else {
            return Promise.reject("error");
        }
    },
    async updataCartCheckStatus(context, {skuId, isChecked}) {
        // console.log(skuId, isChecked)
        const result = await reqCartItemClickStatus(skuId, isChecked);
        if (result.code == 200) {
            return "ok"
        } else {
            return Promise.reject("error");
        }
    },

    deleteAllCheckCart(){

    }
};
const mutations = {
    'GETCARTLIST':(stute,cartList)=>{
        state.cartList = cartList
    }
};
const getters = {
    cartList(){
        return state.cartList[0] || {}
    }
};

export default {
    namespaced:true,
    state,
    actions,
    mutations,
    getters
}