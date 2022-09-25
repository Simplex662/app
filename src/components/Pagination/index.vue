<template>
    <div class="fr page">
        <div class="sui-pagination clearfix">
            <ul>
                <!-- 上一页 -->
                <li class="prev " :class="{disabled:pageNo==1}" :disabled="pageNo==1" @click="pageJump(pageNo-1)">
                    <a>«上一页</a>
                </li>
                <li v-if="beginNumAndEndNum.beginNum > 1" @click="$emit('getPageNo',1)">
                    <a>1</a>
                </li>
                <li class="dotted" v-if="beginNumAndEndNum.beginNum > 2"><span>...</span></li>'

                <!--中间部分-->
                <li  v-for="(page,index) in beginNumAndEndNum.endNum"
                     :key="index" v-if="page>=beginNumAndEndNum.beginNum"
                     @click="$emit('getPageNo',page)"
                     :class="{active:pageNo==page}"
                >
                    <a>{{page}}</a>
                </li>

                <!--下一页-->
                <li class="dotted" v-if="beginNumAndEndNum.endNum < totalPage-1"><span>...</span></li>
                <li v-if="beginNumAndEndNum.endNum < totalPage" @click="$emit('getPageNo',totalPage)">
                    <a>{{totalPage}}</a>
                </li>
                <li class="next"  :class="{disabled:pageNo==totalPage}"  @click="pageJump(pageNo+1)">
                    <a>下一页»</a>
                </li>
                <li class="dotted" style="">共{{total}}条</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        /*
            pageNo:当前第几页
            pageSize:代表一页展示多少数据
            total:总共多少数据
            continues:连续页码个数
        */
        props:['pageNo','pageSize','total','continues'],
        computed:{
            //一共几页
            totalPage(){
                return  Math.ceil(this.total/this.pageSize)
            },
            beginNumAndEndNum(){
                //记录起始位置和终止位置
                let beginNum,endNum;
                const {continues,totalPage,pageNo} = this;

                //判断数据数是否能够填满连续的页码个数
                //如果小于，为不正常现象,使起始页显示第一页，终止页为总页数
                if (continues>totalPage){
                    beginNum = 1;
                    endNum = totalPage;
                }else{
                    const index = Math.ceil(continues/2);
                    //总页数大于可显示页数
                    if (pageNo <= index){
                        beginNum = 1;
                        endNum = continues;
                        console.log("1",beginNum, endNum)
                    }else if ((totalPage-pageNo) <index){
                        //判断显示页数是否大于总页数
                        beginNum = totalPage-continues;
                        endNum = totalPage
                        console.log("2",beginNum, endNum)
                    }else {
                        beginNum = pageNo - parseInt(continues/2)
                        endNum = beginNum + continues - 1
                        console.log("3",beginNum, endNum)
                    }
                }
                return {beginNum, endNum}

            }
        },
        methods:{
            pageJump(clickPage){
                if (clickPage > 0 && clickPage <= this.totalPage){
                    this.$emit('getPageNo',clickPage);
                }else {
                    console.log("再戳就要坏掉啦~");
                }
            }
        }
    }
</script>

<style>

</style>