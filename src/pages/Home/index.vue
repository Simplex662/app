<template>
    <div>
        <TypeNav/>
        <ListContainer/>
        <TodayRecommend/>
        <Rank/>
        <Like/>
        <Floor/>
        <Brand/>
    </div>
</template>

<script>
    import ListContainer from '@/pages/Home/ListContainer'
    import TodayRecommend from '@/pages/Home/TodayRecommend'
    import Rank from '@/pages/Home/Rank'
    import Like from '@/pages/Home/Like'
    import Floor from '@/pages/Home/Floor'
    import Brand from '@/pages/Home/Brand'

    export default {
        name: "index",
        components:{
            ListContainer,
            TodayRecommend,
            Rank,
            Like,
            Floor,
            Brand
        }
    }
</script>

<style scoped>

</style>