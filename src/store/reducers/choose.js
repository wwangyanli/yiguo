import {handleActions} from "redux-actions"
import {chooseVal,chooseJgVal,chooseNew,sure} from "../../actions/actionTypes"
const defaultsate={
    zhArr:[],
    zhKey:"综合",
    url:"",
    coll:"",
    jgArr:[],
    jgKey:"价格",
    chooseSure:'',
    type:'',
    flag:""
}
export default handleActions({
    [chooseVal]:(state,action)=>{
        let chooseVal = Object.assign({},state)
        chooseVal.zhArr = action.payload.value[2] 
        chooseVal.zhKey = action.payload.value[0]
        for(var i = 0;i<chooseVal.zhArr.length;i++){
            chooseVal.zhArr[i].className = ""
        }
        chooseVal.zhArr[action.payload.value[1]].className = "active"
        chooseVal.zhKey = action.payload.value[0]
        if(action.payload.value[0] == "综合排序"){
            chooseVal.url = "/web/api/products/search/v1?"
            chooseVal.coll = "2-7-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0_0"
            
        }else if(action.payload.value[0] == "按销量排序"){
            chooseVal.url = "/web/api/products/search/v1?"
            chooseVal.coll = "2-7-0-0-0-0-0-0-0-0-0-0-0-0-3-0-0_0"
        }
        return chooseVal
    },
    [chooseJgVal]:(state,action)=>{
        let chooseJgVal = Object.assign({},state)
        chooseJgVal.jgArr = action.payload.value[2] 
        chooseJgVal.jgKey = action.payload.value[0]
        for(var i = 0;i<chooseJgVal.jgArr.length;i++){
            chooseJgVal.jgArr[i].className = ""
        }
        chooseJgVal.jgArr[action.payload.value[1]].className = "active"
        chooseJgVal.jgKey = action.payload.value[0]
        if(action.payload.value[0] == "价格升序"){
            chooseJgVal.url = "/web/api/products/search/v1?"
            chooseJgVal.coll = "2-7-0-0-0-0-0-0-0-0-0-0-0-0-1-1-0_0"
            
        }else if(action.payload.value[0] == "价格降序"){
            chooseJgVal.url = "/web/api/products/search/v1?"
            chooseJgVal.coll = "2-7-0-0-0-0-0-0-0-0-0-0-0-0-1-0-0_0"
        }
        return chooseJgVal
    },
    [chooseNew]:(state)=>{
        let chooseNew = Object.assign({},state)
            chooseNew.url = "/web/api/products/search/v1?"
            chooseNew.coll = "2-7-0-0-0-0-0-0-0-0-0-0-0-0-2-0-0_0"
        return chooseNew
    },
    [sure]:(state,action)=>{
        let chooseSure = Object.assign({},state)
        console.log(action.payload)
        chooseSure.url = action.payload.value.url
        chooseSure.coll = action.payload.value.coll
        chooseSure.type = action.payload.value.type
        chooseSure.flag = false
        return chooseSure
    }
},defaultsate)

