//路由懒加载
import Loadable from 'react-loadable';
import Loading from "@common/loading"

const Addree=Loadable({
    loader:()=>import("./addree"),
    loading:Loading
})
const Detail=Loadable({
    loader:()=>import("./detail"),
    loading:Loading
})
const CityList=Loadable({
    loader:()=>import("./cityList"),
    loading:Loading
})
 const Home=Loadable({
     loader:()=>import("./home"),
     loading:Loading
 })

 const Tuijian=Loadable({
    loader:()=>import("./tuijian"),
    loading:Loading
    
})
const Time=Loadable({
    loader:()=>import("./time"),
    loading:Loading
    
})
const Ri=Loadable({
    loader:()=>import("./ri"),
    loading:Loading
})
const Yi=Loadable({
    loader:()=>import("./yi"),
    loading:Loading
})
const Er=Loadable({
    loader:()=>import("./er"),
    loading:Loading
})
const PinTuan=Loadable({
    loader:()=>import("./pintuan"),
    loading:Loading
    
})
const TouTiao=Loadable({
    loader:()=>import("./toutiao"),
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

const SearchDetail=Loadable({
    loader:()=>import("./search_detail"),
    loading:Loading
})
const Search = Loadable({
    loader:()=>import("./search"),
    loading:Loading
})
const Quanbu=Loadable({
    loader:()=>import("./quanbu"),
    loading:Loading
})
const Fjmd=Loadable({
    loader:()=>import("./fjmd"),
    loading:Loading
})


export {
    Home,
    Eat,
    Mine,
    Shopping,
    Sort,
    Login,
    SearchDetail,
    Search,
    Tuijian,
    Time,
    PinTuan,
    TouTiao,
    Addree,
    Fjmd,
    Quanbu,
    CityList,
    Detail,
    Ri,
    Yi,
    Er
}
