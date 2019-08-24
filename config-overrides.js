const {override, addWebpackAlias}=require("customize-cra")
const path = require("path");
module.exports = override(
   
    //别名配置
    addWebpackAlias({        
        ["@"]: path.resolve(__dirname, "./src"),             
        ["@actions"]: path.resolve(__dirname, "./src/actions"),
        ["@api"]: path.resolve(__dirname, "./src/api"),
        ["@components"]: path.resolve(__dirname, "./src/components"),
        ["@layout"]: path.resolve(__dirname, "./src/layout"),
        ["@lib"]: path.resolve(__dirname, "./src/lib"),
        ["@pages"]: path.resolve(__dirname, "./src/pages"),
        ["@router"]: path.resolve(__dirname, "./src/router"),
        ["@staic"]: path.resolve(__dirname, "./src/staic"),
        ["@store"]: path.resolve(__dirname, "./src/store"),
        ["@utils"]: path.resolve(__dirname, "./src/utils"),
        ["@common"]: path.resolve(__dirname, "./src/common"),
    })
); 