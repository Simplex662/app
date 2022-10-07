import Vue from "vue";
import Vuex from 'vuex'
//引入模块数据
import homeStore from './home'
import searchStore from './search';
import detailStore from './Detail'

Vue.use(Vuex)

export default new Vuex.Store({
    //仓库模块式开发数据存储
    modules:{
        home:homeStore,
        search:searchStore,
        detail:detailStore
    }
})