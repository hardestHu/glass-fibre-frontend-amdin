import VueRouter from 'vue-router'
import Layout from '@/components/Layout'
const routes = [
    {
        path:'/dataMenu',
        component:Layout,
        redirect:'/dataMenu/index',
        meta:{
            name:'数据目录',
        },
        children:[
            {
                path:'index',
                name:'DataMenu',
                component: () => import('@/views/dataMenu'),
                meta:{
                    name:'数据目录'
                }
            },

        ]   
    },
    {
        path:'/dataReq',
        component:Layout,
        redirect:'/dataReq/index',
        meta:{
            name:'数据需求'
        },
        children:[
            {
                path:'index',
                name:'DataReq',
                component: () => import('@/views/dataReq'),
                meta:{
                    name:"数据需求"
                }
            }
        ]
    },
    {
        path:"/dataMonitor",
        component:Layout,
        redirect:'/dataMonitor/index',
        meta:{
            name:"调用监控"
        },
        children:[{
            path:'index',
            name:"DataMonitor",
            component:() => import('@/views/dataMonitor'),
            meta:{
                name:"调用监控"
            }
        }],
    },
    {
        path:"/user",
        component:Layout,
        redirect:'/user/index',
        meta:{
            name:'用户管理'
        },
        children:[{
            path:'index',
            name:'User',
            component: () => import('@/views/user'),
            meta:{
                name:'用户管理'
            }
        }]
    },
    {
        path:'/application',
        component:Layout,
        redirect:'/application/index',  
        meta:{
            name:"应用管理"
        },  
        children:[
            {
                path:'index',
                name:'Application',
                component: () => import('@/views/application'),
                meta:{
                    name:"应用管理"
                }
            },
        ]
    },
    {
        path:'/department',
        component:Layout,
        redirect:'/department/index',
        meta:{
            name:"部门管理"
        },
        children:[
            {
                path:'index',
                name:"Department",
                component:() => import('@/views/department'),
                meta:{
                    name:"部门管理"
                }
            },
        ]
    },
    {
        path:'/statistic',
        component:Layout,
        redirect:'/statistic/index',
        meta:{
            name:"数据统计"
        },
        children:[
            {
                path:'index',
                name:"Statistic",
                component:() => import('@/views/statistic'),
                meta:{
                    name:"数据统计"
                }
            },
            {
                path:'part1',
                name:'Part1',
                component:() => import('@/views/part1'),
                meta:{
                    name:'表1'
                }
            }
        ]
    },
    {
        path:"/404",
        component:() => import('@/views/404'),
        hidden:true,
    },
    {
        path:'*',
        redirect:"/404",
        hidden:true,
    }

]


export default new VueRouter({
    routes,
    mode:'hash'
})