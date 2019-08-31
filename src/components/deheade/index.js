import React, { Component } from 'react'
import{DeHeadWarpper} from "./styled"
import {withRouter,} from "react-router-dom"
class Deheade extends Component {
    render() {
        return (
            <DeHeadWarpper>
                 <i className=" iconfont icon-fanhui" onClick={this.hanelonClick.bind(this)} ></i>
             
              <h2>商品</h2>
              <h2>评价</h2>
              <h2>详细</h2>
            
            </DeHeadWarpper>
        )
    }
    
    hanelonClick(){
        alert(1)
        console.log(11,this.props)
    this.props.history.goBack()
}
}
export default withRouter(Deheade) 