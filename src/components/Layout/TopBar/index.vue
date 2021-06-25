<template>
  <div class="top-bar">
    <el-menu class="menu-list" :default-active="activeIndex" mode="horizontal"
    background-color="#132C3B"
     active-text-color="#409eff" text-color="#fff" @select="selectMenu">
        
        <template v-for='(item,index) in routes'>
            <el-submenu :index="item.path" :key="index" v-if="item.children.length > 1">
                <span slot="title">{{item.meta.name}}</span>
                <el-menu-item v-for="(onePiece,oneIndex) in item.children" :key="oneIndex" :index="onePiece.path">
                    <router-link :to="onePiece.path">{{onePiece.meta.name}}</router-link>   
                </el-menu-item>
            </el-submenu>

            <el-menu-item :key="index" :index="item.path" v-else>
                <router-link :to="item.path">{{item.meta.name}}</router-link>
            </el-menu-item>
        </template>
    </el-menu>
  </div>

</template>

<script>
export default {
    name:'TopBar',
    computed:{
        routes(){
            let routes = this.$router.options.routes.filter(item => !item.hidden);
            return routes;
        }
    },
    data(){
        return {
            activeIndex:'dataMenu',
        }
    },
    created(){
        console.log(this.routes)
    },
    methods:{
        selectMenu(index){
            this.activeIndex = index
            console.log(index)
        }
    }
}
</script>

<style lang='scss'>
    a{
        text-decoration: none;
        display: inline-block;
    }
    .el-menu-item {
        color:#fff;
        font-size:16px;
        a{
            color:#fff;
            display: block;
        }
    }
    .top-bar{
        width:100%;
        height:70px;
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
            .el-submenu .el-submenu__title{
                font-size:16px;
            }
           
        }
       
    }
</style>