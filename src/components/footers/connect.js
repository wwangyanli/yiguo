import{FootersAction} from "@actions/footers/actionCreator"
export const mapStateToProps=(state)=>({
    ppid:state.detail.ppid
})
export const mapDispatchToProps=(dispatch)=>({
    hadlaadd(val){
       dispatch(FootersAction(val))
    }
})