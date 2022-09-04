//引入mockjs模块
import Mock from 'mockjs'
//把JSON模块格式引入(webpack默认对外暴露 图片，json格式)
import banner from './banner.json'
import floors from './floors.json'

//mock数据:第一个参数请求地址，第二个参数 请求数据
Mock.mock("/mock/banner",{code:200,data:banner});
Mock.mock("/mock/floors",{code:200,data:floors});