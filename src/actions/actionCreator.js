import {detailAddress,sortAddress,searchVal,chooseVal,chooseJgVal,chooseNew,sure} from "./actionTypes"
import {createAction} from "redux-actions"

export const sortDetail = createAction(detailAddress,(val)=>({
        value:val
}))

export const sort = createAction(sortAddress,(val)=>({
        value:val
}))


export const search = createAction(searchVal,(val)=>({
        value:val
}))

export const choose = createAction(chooseVal,(val)=>({
        value:val
}))

export const chooseJg = createAction(chooseJgVal,(val)=>({
        value:val
}))

export const newUp = createAction(chooseNew)


export const chooseSure = createAction(sure,(val)=>({
        value:val
}))