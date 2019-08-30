  /* https://m.9ji.com/web/api/floors/v1?label=0&page=1&random=0 */ 

  import http from '@utils/http'
  /* /web/api/floors/v1?label=0&page=1&random=0 */
  export const tuijian = (label=0,page=1,random=0)=>http.get("/web/api/floors/v1",{label,page,random})
  // export const touti = (label=891839620925239297,page=1,random=0)=>http.get("/web/api/floors/v1",{label,page,random})
  export const addr = (optimize=1)=>http.get("/web/api/area/allAreaTree/v1",{optimize})
  export const home = (coll='2-7-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0_0')=>http.get("/web/api/products/search/v1",{coll})
// export const dian = (act=allStore,cityId=0,showCount=0)=>http.get("/web/api/cityService/store/v1",{act,cityId,showCount})
/* https://m.9ji.com/web/api/cityService/store/v1?act=allStore&cityId=0&showCount=0 */




