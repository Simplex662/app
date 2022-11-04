<template>
  <div class="spec-preview">
    <img :src="skuImage.imgUrl"/>
    <!-- 事件绑定 -->
    <div class="event" @mousemove="showBigImg"></div>
    <div class="big">
      <img :src="skuImage.imgUrl" ref="bigImg"/>
    </div>
    <!-- 遮盖层 -->
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
  export default {
    name: "Zoom",
    data(){
      return {
        currentIndex: 0
      }
    },
    props:['skuImageList'],
    computed:{
      skuImage(){
        return this.skuImageList[this.currentIndex] || {}
      }
    },
    methods:{
      showBigImg(event){
        let mask = this.$refs.mask
        let bigImg = this.$refs.bigImg

        let left = event.offsetX - mask.offsetWidth/2
        let top  = event.offsetY - mask.offsetHeight/2
        if (left<0) left = 0;
        if (left > mask.offsetWidth) left=mask.offsetWidth;
        if (top < 0) top=0;
        if (top > mask.offsetHeight) top = mask.offsetHeight;
        mask.style.left = left+'px';
        mask.style.top = top+'px';
        bigImg.style.left = -2 * left + 'px';
        bigImg.style.top = -2 * top + 'px'
      }
    },
    mounted() {
      this.$bus.$on('getImgIndex',(index)=>{
        this.currentIndex = index
      })
    }
  }
</script>

<style lang="less">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>