import { createAction } from "redux-actions"
import { butType,butjan,toGGlf_Shop} from "./actionTypes"
//n++
export const butAction = createAction(butType,(val)=>({
    value:val
}))
//n--
export const butjanAction = createAction(butjan,(val)=>({
    value:val
}))
// //全选
// export const ToggAction = ToggAction(toGGlf_Shop)
// import {shopTyps} from "@api/shopping"
// export const shopTypsActin=createAction("BUTTYPE",(val)=>val)
// export const shopTypsActinAsync=createAction=()=>{
//     return async(dispatch)=>{
//         let date=await shopTyps();
//         dispatch(shopTypsActinAsync(date))
//     }
// }