
import {createAction} from "redux-actions"
import {FootersType}from "./actionTypes"
export const FootersAction = createAction(FootersType,(val)=>({
    value:val
}))