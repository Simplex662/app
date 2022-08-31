<template>
    <div class="type-nav">
        <div class="container">
            <transition name="sort">
                <div @mouseleave="leaveShow" @mouseenter="enterShow">
                    <h2 class="all">全部商品分类</h2>
                    <!--  三级联动模块  -->
                    <!-- 一级分类 -->
                    <div class="sort" v-show="show">
                        <!--l利用事件的委派+编程式导航-->
                        <div class="all-sort-list2" @click="goSearch">
                            <div class="item"
                                 :class="{active:Active == index}"
                                 v-for="(c1,index) in categoryList"
                                 :key="c1.categoryId"
                                 @mouseenter="changeActive(index)"
                            >
                                <h3>
                                    <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{ c1.categoryName }}</a>
                                </h3>
                                <!--  二三级分类  -->
                                <div class="item-list clearfix">
                                    <div class="subitem" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                                        <dl class="fore">
                                            <dt>
                                                <a :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{ c2.categoryName }}</a>
                                            </dt>
                                            <dd>
                                                <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                                                    <a :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{ c3.categoryName }}</a>
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>
        </div>
    </div>
</template>

<script>
    import {mapActions as ma,mapState as ms} from 'vuex'
    //引入lodsh
    //最好的引入方式：按需引入
    import throttle from 'lodash';

    export default {
        name: "TypeNav",
        data(){
            return{
                Active:-1,
                show:true,
            }
        },
        methods: {
            // ...ma['home',{categoryList:'categoryList'}],
            //三级导航节流操作，防止用户操作频繁出现解析问题
            changeActive(index){
                    //获取当前元素索引值，使当前元素获得 active 样式
                    this.$data.Active = index
            },
            goSearch(event){
                //节点的dataset属性，可以自定义获取节点的自定义属性与属性值
                let {categoryname,category1id,category2id,category3id} = event.target.dataset
                if(categoryname){
                    //三级分类 a 标签
                    //整理路由跳转的参数

                    let location = { name: 'search' }
                    let query = { categoryName:categoryname }

                    if (category1id){
                        query.category1Id = category1id;
                    }else if (category2id){
                        query.category2Id = category2id;
                    }else{
                        query.category3Id = category3id;
                    }
                    // console.log(location,query)
                    //整理参数
                    location.query = query;
                    //路由传参
                    this.$router.push(location)
                }
            },
            enterShow(){
                    this.show = true
            },
            leaveShow(){
                this.index = -1
                if (this.$route.path != '/home'){
                    this.show = false
                }
            }
        },
        mounted() {
            // 获得三级路由数据
            // console.log(this.$store)
            // ...ma('home',{categoryList:'categoryList'})
            this.$store.dispatch('home/categoryList','categoryList')
            //如果不是home组件 ，隐藏 三级联动
            if (this.$route.path != '/home'){
                this.show = false
            }
        },
        computed:{
            ...ms('home',{ categoryList:'categoryList' })
        }
    }
</script>

<style scoped lang="less">
    .type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .active{
                background-color: burlywood;
            }

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;
                overflow: hidden;
                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        &:hover {
                            .item-list {
                                display: block;
                            }
                        }
                    }
                }
            }

            //过渡动画样式
            //动画开始状态
            .sort-enter{
                height: 0px;
            }
            //动画结束状态
            .sort-enter-to{
                height: 461px;
            }

            .sort-enter-active{
                transition: all .5s linear;
            }
        }
    }
</style>