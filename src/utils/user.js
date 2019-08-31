// const mongoose = require("./database").mongoose;

// //创建字段
// let User = mongoose.model("user",{
//     username:String,
//     password:String
// })
// //查
// const UserFind = (userMsg,cb)=>{//用回调 返回result
//         User.findOne(userMsg).then((result)=>{
//         cb(result);
//     })
// }

// //增
// const UserAdd = (userMsg,cb)=>{
//     let user = new User(userMsg);

//     user.save().then((result)=>{
//         cb(result);
//     })
// }

// module.exports = {
//     UserFind,
//     UserAdd
// }