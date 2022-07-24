<template>
  <div>
    <MyHeader/>
    <router-view><MyHome/></router-view>
    <MyFooter/>
  </div>
</template>

<script>
import MyHeader from './components/Header/MyHeader.vue'
import MyFooter from './components/Footer/MyFooter.vue'
import MyHome from './components/Home/MyHome.vue'

export default {
  name: 'App',
  components: {
    MyHeader,MyFooter,MyHome
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
