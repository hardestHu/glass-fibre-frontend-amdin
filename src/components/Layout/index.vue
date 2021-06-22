<template>
  <div class='layout'>
      <Banner/>
      <Top-Bar/>
      <router-view></router-view>
  </div>
</template>

<script>
import Banner from './Banner'
import TopBar from './TopBar'
export default {
    name:'Layout',
    components:{Banner,TopBar}
}
</script>

<style>
  .layout{
    padding-top:120px;
  }
</style>