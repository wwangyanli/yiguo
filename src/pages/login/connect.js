import{login}from "@api/shopping"
import {LoginAction} from "@actions/login"
export const mapstateToProps =(state)=>({
    username:state.login.username,
    password:state.login.password,
    keyNum:state.login.keyNum
})
export const mapDispatchToProps =(dispatch)=>({
   async hanelBtn(...rest){
        var username = rest[0]
        var password = rest[1]
        let data = await login(username,password)
        var arr = []
        arr.push(username)
        arr.push(password)
        arr.push(data)
     dispatch(LoginAction(arr))
    },
    
})