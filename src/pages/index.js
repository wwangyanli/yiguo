//路由懒加载
import Loadable from 'react-loadable';
import Loading from "@common/loading"

 const Home=Loadable({
     loader:()=>import("./home"),
     loading:Loading
 })
 const Eat=Loadable({
    loader:()=>import("./eat"),
    loading:Loading
})
const Mine=Loadable({
    loader:()=>import("./mine"),
    loading:Loading
})
const Shopping=Loadable({
    loader:()=>import("./shopping"),
    loading:Loading
})
const Sort=Loadable({
    loader:()=>import("./sort"),
    loading:Loading
})
const Login=Loadable({
    loader:()=>import("./login"),
    loading:Loading
})
export {
    Home,
    Eat,
    Mine,
    Shopping,
    Sort,
    Login
}
