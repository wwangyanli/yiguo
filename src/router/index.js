import { Home, Eat, Mine, Shopping, Sort ,Login,SearchDetail,Register,Detail} from "@pages"
 export const tabBarRoute = [
    {
        path: "/home",
        component: Home,
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
        path:"/register",
        component:Register,
        meta:{
            flag:false
        },
        name:"注册"
    },
    {
        path:"/detail/:ppid",
        component:Detail,
        meta:{
            flag:false
        },
        name:"购物车详情"
    }
]
export const routeConfig=tabBarRoute.concat(noTabBarRoute)