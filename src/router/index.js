import { Home, Eat, Mine, Shopping, Sort ,Login} from "@pages"
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
    }
]
export const routeConfig=tabBarRoute.concat(noTabBarRoute)