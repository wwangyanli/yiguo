const proxy = require("http-proxy-middleware");
module.exports=(app)=>{
    app.use(proxy("/web",{
        target:"https://m.9ji.com",
        changeOrigin:true,
       //  pathRewrite:{
       //      "^api":""
       //  }
    }))
    app.use(proxy("/api",{
        target:"https://apim.restful.5lux.com.cn",
        changeOrigin:true,
       //  pathRewrite:{
            "^api":""
       //  }
    }))
    
}
/* https://apim.restful.5lux.com.cn/good/filter_city?is_bespeak=0 */