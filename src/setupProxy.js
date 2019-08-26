const proxy  = require("http-proxy-middleware")

 module.exports = (app)=>{
     app.use(proxy("/web",{
         target:"https://m.9ji.com",
         changeOrigin:true,
     }))
     
 }