import VueRouter from 'vue-router'
import Layout from '@/components/Layout'
const routes = [
    {
        path:'/',
        component:Layout,
        redirect:'/dataMenu',
        children:[
            {
                path:'dataMenu',
                name:'DataMenu',
                component: () => import('@/views/dataMenu'),
                meta:{
                    name:'数据目录'
                }
            },
            {
                path:'dataReq',
                name:'DataReq',
                component: () => import('@/views/dataReq'),
                meta:{
                    name:"数据需求"
                }
            },
            {
                path:'dataMonitor',
                name:"DataMonitor",
                component:() => import('@/views/dataMonitor'),
                meta:{
                    name:"调用监控"
                }
            },
            {
                path:'user',
                name:'User',
                component: () => import('@/views/user'),
                meta:{
                    name:'用户管理'
                }
            },
            {
                path:'application',
                name:'Application',
                component: () => import('@/views/application'),
                meta:{
                    name:"应用管理"
                }
            },
            {
                path:'department',
                name:"Department",
                component:() => import('@/views/department'),
                meta:{
                    name:"部门管理"
                }
            },
            {
                path:'statistic',
                name:"Statistic",
                component:() => import('@/views/statistic'),
                meta:{
                    name:"数据统计"
                }
            }

        ]   
    }
]


export default new VueRouter({
    routes,
    mode:'hash'
})