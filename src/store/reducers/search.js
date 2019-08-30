import {handleActions} from "redux-actions"
import {searchVal} from "../../actions/actionTypes"
const defaultsate={
    inputVal:""
}
export default handleActions({
    [searchVal]:(state,action)=>{
        let searchVal = Object.assign({},state)
        searchVal.inputVal = action.payload.value
        return searchVal;
    }
},defaultsate)