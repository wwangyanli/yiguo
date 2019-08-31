import {butActionasync,butAction,butjanAction} from "@actions/shop/actionCreator"
export const mapStateToProps=(state)=>({

    n:state.shoppingcar.n,
    price:state.shoppingcar.price,
    arr:state.shoppingcar.arr

})
export const mapDispatchToProps=(dispatch)=>({
    // buttjj(...val){
    //    console.log(999,val)
    //     dispatch(butAction(val))

    // },
    // buttjian(val){
    //   console.log(val)
      
    //     dispatch(butjanAction(val))
        
    // },
    hanleback(ppid){
        this.props.history.push({pathname:"/detail/"+ppid})
    }
   
})