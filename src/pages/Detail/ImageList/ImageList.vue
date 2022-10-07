<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div class="swiper-slide"
           :class="{active:imgIndex==index}"
           v-for="(skuImage,index) in skuImageList"
           :key="skuImage.id"
           @click="imgActive(index)"
      >
        <img :src="skuImage.imgUrl">
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>

  import Swiper from 'swiper'
  export default {
    name: "ImageList",
    data(){
      return {
        imgIndex: 0
      }
    },
    props:['skuImageList'],
    methods:{
        imgActive(index){
            this.imgIndex  = index;
            this.$bus.$emit('getImgIndex',this.imgIndex)
        }
    },
    watch:{
        skuImageList(newV, oldV){
            this.$nextTick(()=>{
                new Swiper (this.$refs.cur, {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    //显示几个图片:
                    slidesPerView: 3,
                    slidesPerGroup: 1
                })
            })
        }
    }
  }
</script>

<style lang="less" scoped>
  .swiper-container {
    height: 56px;
    width: 412px;
    box-sizing: border-box;
    padding: 0 12px;

    .swiper-slide {
      width: 56px;
      height: 56px;

      img {
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        padding: 2px;
        width: 50px;
        height: 50px;
        display: block;

        &.active {
          border: 2px solid #f60;
          padding: 1px;
        }

        &:hover {
          border: 2px solid #f60;
          padding: 1px;
        }
      }
    }

    .swiper-button-next {
      left: auto;
      right: 0;
    }

    .swiper-button-prev {
      left: 0;
      right: auto;
    }

    .swiper-button-next,
    .swiper-button-prev {
      box-sizing: border-box;
      width: 12px;
      height: 56px;
      background: rgb(235, 235, 235);
      border: 1px solid rgb(204, 204, 204);
      top: 0;
      margin-top: 0;
      &::after {
        font-size: 12px;
      }
    }
  }
</style>