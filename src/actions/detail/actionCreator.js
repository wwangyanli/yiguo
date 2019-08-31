import { createAction } from "redux-actions"
import {detail} from "@api/shopping"



export const detailTypsActin=createAction("DETAIL",(val)=>val)
export const detailTypsActinAsync=(ppid)=>{
   
    return async(dispatch)=>{
        
        let data=await detail(ppid);
    //    data = Array.from(data);
       // console.log(888888888,data,ppid)
        dispatch(detailTypsActin(data))
    }
}