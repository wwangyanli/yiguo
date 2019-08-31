import {createAction} from "redux-actions"
import {LoingType,usernameType,passwordType}from "./actionTypes"
export const LoginAction = createAction(LoingType,(val)=>({
    value:val
}))
export const userAction = createAction(usernameType,(val)=>({
    value:val
}))
export const passAction = createAction(passwordType,(val)=>({
    value:val
}))