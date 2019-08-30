import {choose,chooseJg,newUp,chooseSure} from "../../actions/actionCreator"

export const mapStateToProps = (state)=>({
    zhArr:state.choose.zhArr,
    zhKey:state.choose.zhKey,
    jgArr:state.choose.jgArr,
    jgKey:state.choose.jgKey,
    newColor:state.choose.newColor,
    flag:state.choose.flag,
})

export const mapDispatchToProps = (dispatch)=>({
    handleChooseZh(...val){
        console.log(val)
        var value = val
        dispatch(choose(value))
    },
    handleChooseJg(...val){
        console.log(val)
        var value = val
        dispatch(chooseJg(value))
    },
    handleNew(){
        dispatch(newUp())
    },
    handleSure(val){
        if(val == "新品"){
            var url = '/web/api/products/search/v1?';
            var coll = 2
            var type = 1
            var obj = {}
            obj.url = url;
            obj.coll = coll;
            obj.type = type
            dispatch(chooseSure(obj))
        }else if(val == "一手优品"){
            var url = '/web/api/products/search/v1?';
            var coll = 2
            var type = 2
            var obj = {}
            obj.url = url;
            obj.coll = coll;
            obj.type = type
            dispatch(chooseSure(obj))
        }else if(val == "二手良品"){
            var url = '/web/api/products/search/v1?';
            var coll = 2
            var type = 3
            var obj = {}
            obj.url = url;
            obj.coll = coll;
            obj.type = type
            dispatch(chooseSure(obj))
        }else{
            var url = '/web/api/products/search/v1?';
            var coll = 2
            var type = 4
            var obj = {}
            obj.url = url;
            obj.coll = coll;
            obj.type = type
            dispatch(chooseSure(obj))
        }
    }
})