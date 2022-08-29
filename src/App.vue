<template>
  <div id="app">
    <Top></Top>
    <router-view></router-view>
<!--      在home或者search显示，登录注册中不显示-->
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Top from "./components/Hander/Top";
import Footer from "./components/Footer/Footer";
export default {
  name: 'App',
  components: {
    Top,
    Footer
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
