import {handleActions} from "redux-actions"
const defaultState={
    detailList:[],
    ppid:""
}
export default handleActions({
    DETAIL:(state,action)=>{
        let listSate=JSON.parse(JSON.stringify(state))
        //console.log(989888,listSate)
    
        listSate.detailList=action.payload.data;
        listSate.ppid=action.payload.data.ppid
         console.log(555,listSate.ppid)
            //console.log(action.payload,552225)
        return listSate
    }
},defaultState)