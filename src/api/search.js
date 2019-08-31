import http from "@utils/http"

 export const search_web = ()=>http.get("/web/api/search/hotAndHistorySearch/v1?history=&searchType=1")
// export const search_api = ()=>http.get("/api/commodityapi/Commodity/GetSearchList")
