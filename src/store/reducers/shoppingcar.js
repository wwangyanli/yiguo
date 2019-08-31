import {handleActions} from "redux-actions"
import{butType,butjan} from "@actions/shop/actionTypes"
const defaultsate={
    price:"",
    nums:"",
    arr:[]
    
    
}
export default handleActions({
    // [butType]:(state,action)=>{
    //     let good=JSON.parse(JSON.stringify(state))
    //     console.log(action.payload,888)
            
    //         good.price = Number(action.payload.value[0])
    //         var arr = action.payload.value[2]
    //        for(var i = 0 ;i < arr.length;i++){
    //                 if(i == action.payload.value[1]){
    //                    arr[i].num++
    //                 }
    //        }
    //        good.arr = arr
    //        console.log(arr,9999999)
    //         return good;
    // },
    // [butjan]:(state,action)=>{
    
    //     let n=Object.assign({},state)
    //         n.n--
    //         n.price=Number(action.payload.value)
    //         if(n.n<0){
    //             n.n=0
    //         }
    //         n.nums=n.n*n.price
            
        
    //         return n;
    // }
    // ,[toGGlf_Shop]:(state,action)=>{

    // }
    

},defaultsate)