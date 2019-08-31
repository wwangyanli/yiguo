import{detailTypsActinAsync} from "@actions/detail/actionCreator"
export const mapStateToProps=(state)=>({
    
    list:state.detail.detailList,
    arr:state.detail.detailList.params
    
    
})
export const mapDispatchToProps=(dispath)=>({
    
    haldlist(ppid){
        console.log(ppid,22)
        dispath(detailTypsActinAsync(ppid))
    }
    
})