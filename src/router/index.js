import { Home, Eat, Mine, Shopping, Sort ,Login,SearchDetail,Search,Tuijian,Time,PinTuan,Addree,Quanbu,Fjmd,Detail,Ri,Yi,Er,Register} from "@pages"

import { CityList } from "@pages"; 
// export const tabBarRoute = [
// import { Home, Eat, Mine, Shopping, Sort ,Login,SearchDetail,Register,Detail} from "@pages"
 export const tabBarRoute = [
    {
        path: "/home",
        component: Home,
        children:[
            {
                path:"/home/tuijian/:ppid",
                component:Tuijian,
            },
            {
                path:"/home/time",
                component:Time,
                children:[
                    {
                        path:"/time/ri",
                        component:Ri,
                    },
                    {
                        path:"/time/yi",
                        component:Yi,
                    },
                    {
                        path:"/time/er",
                        component:Er,
                    },
                    
                ],
            },
            {
                path:"/home/pintuan",
                component:PinTuan,
            },
            {
                path:"/home/toutiao",
                component:Fjmd,
            }
        ],
        meta: {
            flag: true
        },
        name: "首页",
        icon: "iconfont icon-home_normal"
    },
    
    {
        path: "/sort",
        component:Sort,
        meta: {
            flag: true
        },
        name: "分类",
        icon: "iconfont icon-fenlei-0"
    },
    {
        path: "/eat",
        component: Eat,
        meta: {
            flag: true
        },
        name: "消息",
        icon: "iconfont icon-xiaoxi"
    },

    {
        path: "/shopping",
        component:Shopping,
        meta: {
            flag: true
        },
        name: "购物车",
        icon: "iconfont icon-shangcheng"
        
    },
    {
        path: "/mine",
        component:Mine,
        meta: {
            flag: true,
            auth:true
        },
        name: "我的",
        icon: "iconfont icon-wode2"
    },
    

]
export const noTabBarRoute=[
    {
        path:"/login",
        component:Login,
        meta:{
            flag:false
        },
        name:"登录"
    },
    {
        path:"/searchDetail",
        component:SearchDetail,
        meta:{
            flag:false
        },
        name:"分类详情"
    },
    {
        path:"/search",
        component:Search,
        meta:{
            flag:false
        },
        name:"搜索"
    },
    {
        path:"/addree",
        component:Addree,
        children:[
            {
                path:"/addree/quanbu",
                component:Quanbu,
            },
            {
                path:"/addree/Fjmd",
                component:Time,
            },
        ],
        meta:{
            flag:false
        },
        
        name:"地址"
    },
    {
        path:"/cityList",
        component:CityList,
        meta:{
            flag:false
        },
        name:"城市列表"
    },
    {
        path:"/detail",
        component:Detail,
        meta:{
            flag:false
        },
        name:"购物车详情"
    },
    {
        path:"/register",
        component:Register,
        meta:{
            flag:false
        },
        name:"注册"
    }
]
export const routeConfig=tabBarRoute.concat(noTabBarRoute)