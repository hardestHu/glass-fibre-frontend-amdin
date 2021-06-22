<template>
  <div class="top-bar">
    <el-menu class="menu-list" :default-active="activeIndex" mode="horizontal"
    background-color="#132C3B"
     active-text-color="#409eff" text-color="#fff">
        <el-menu-item v-for='(item,index) in routes' :key="index" :index="item.path">
            <router-link :to="item.path">{{item.meta.name}}</router-link>
        </el-menu-item>
        <!-- <el-menu-item index="2">数据需求</el-menu-item>
        <el-menu-item index="3">调用监控</el-menu-item> -->
    </el-menu>
  </div>

</template>

<script>
export default {
    name:'TopBar',
    computed:{
        routes(){
            return this.$router.options.routes[0].children
        }
    },
    data(){
        return {
            activeIndex:'dataMenu',
        }
    },
    created(){
        console.log(this.routes)
    }
}
</script>

<style lang='scss'>
    .top-bar{
        width:100%;
        height:60px;
        position:fixed;
        top:60px;
        left:0;
        z-index: 100;
        // margin-top:60px;
        // background:linear-gradient(to right,  #0B1728, #132C3B);
        .menu-list{
            .el-menu-item {
                color:#fff;
                font-size:16px;
            }
        }
        a{
            text-decoration: none;
        }
    }
</style>