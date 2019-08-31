const proxy  = require("http-proxy-middleware")

 module.exports = (app)=>{
     app.use(proxy("/web",{
         target:"https://m.9ji.com",
         changeOrigin:true,
     }))
     app.use(proxy("/users",{
        target:"http://127.0.0.1:9000",
        changeOrigin:true,
    }))
     
     
 }