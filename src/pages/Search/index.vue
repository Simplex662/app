<template>
    <div>
        <!-- 搜索模块 -->
        <TypeNav></TypeNav>
        这是搜索++{{keyword}}
    </div>
</template>

<script>
    export default {
        name: "index",
        props:['keyword']
    }
</script>

<style scoped>

</style>