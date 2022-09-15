<template>
    <div class="swiper-container" id="floor2Swiper" ref="cur">
        <div class="swiper-wrapper">
            <div class="swiper-slide"
                 v-for="value in list"
                 :key="value.id"
            >
                <img :src="value.imgUrl">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper'

    export default {
        name: "Carsouel",
        props:['list'],
        watch:{
            //使用watch + nextTick 实现轮播图
            //因为普通的watch无法保证 watch执行时，v-for已经执行完，加上nextTick 可以保证循环执行完之后在执行函数
            'list':{
                //立即监听
                immediate:true,
                handler(){
                    this.$nextTick(()=>{
                        new Swiper (this.$refs.cur, {
                            // direction: 'vertical', // 垂直切换选项
                            loop: true, // 循环模式选项

                            // 如果需要分页器
                            pagination: {
                                el: '.swiper-pagination',
                                clickable:true,
                            },

                            // 如果需要前进后退按钮
                            navigation: {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            },

                            // 如果需要滚动条
                            scrollbar: {
                                el: '.swiper-scrollbar',
                            },
                        })
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>