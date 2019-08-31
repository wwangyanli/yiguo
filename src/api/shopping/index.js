import http from "@utils/http"
export const shop=()=>http.get("/web/api/products/search/v1?coll=2-7-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0_0")


// //详细
  export const detail=(ppid=78384)=>http.get("/web/api/sc/products/getDetailStatic/v2?",{ppid})
  //ect 
  export const ect =()=>http.get("/web/api/user/msgCenter/v1?type=2&page=1")
  //注册接口
  export const register=(username='',password='')=>http.post("/users/register",{username,password})
  //登录接口
  export const login=(username='',password='')=>http.post("/users/login",{username,password})

  export const mine =()=>http.get("/web/api/member/index/v1?v=0.07756599040637457")