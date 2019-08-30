import {search} from "../../actions/actionCreator"

export const mapStateToProps = (state)=>({
    inputVal:state.search.inputVal
})

export const mapDispatchToProps = (dispatch)=>({
    handleChange(e){
        var inputVal = e.target.value
        dispatch(search(inputVal))

    }
})