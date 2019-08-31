import {handleActions} from "redux-actions"
import{FootersType} from "@actions/footers/actionTypes"
const  defaultsate={
    toShopSid:""
}
export default handleActions({
    [FootersType]:(state,action)=>{
        let toshops=Object.assign({},state)
        toshops.toShopSid=action.payload.value
        
        return toshops;
}  

},defaultsate)