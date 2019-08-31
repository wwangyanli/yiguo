import { handleActions } from "redux-actions"
import { LoingType } from "@actions/login/actionTypes"
const defaultsate = {
    username: "",
    password: "",
    keyNum:""
}
export default handleActions({
    [LoingType]: (state, action) => {
        let loginKey = Object.assign({},state)
        loginKey.keyNum = action.payload.value[2].data.info
        console.log(action.payload.value,action.payload.value[2].data.info)
        if(loginKey.keyNum == "登录成功"){
            loginKey.username = action.payload.value[0]
            loginKey.password = action.payload.value[1]
            loginKey.keyNum = action.payload.value[2].data.info
        }else{
            loginKey.keyNum = action.payload.value[2].data.info
        }
        return loginKey
    },
}, defaultsate)