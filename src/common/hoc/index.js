import GlobalContext from "../../globaContext"
import React,{Component} from "react"
import "../../pages/shopping/index.css"

export default (WrapperCompoent)=>(title1,title2)=>{
    return class extends Component{
        render(){
            return(
                <div className="heander">
                    <WrapperCompoent title1={title1}   title2={title2}/>

                </div>
            )
        }
    }
}