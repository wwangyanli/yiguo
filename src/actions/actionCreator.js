import {detailAddress,sortAddress} from "./actionTypes"
import {createAction} from "redux-actions"

export const sortDetail = createAction(detailAddress,(val)=>({
        value:val
}))

export const sort = createAction(sortAddress,(val)=>({
        value:val
}))