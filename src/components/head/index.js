import React, { Component } from 'react'
import {withRouter} from"react-router-dom"
import {HeadWarpper} from "./styled"

 class Head extends Component {
constructor(){
    super()
    this.state={}
    this.hanelonClick=this.hanelonClick.bind(this)
}
    render() {
        return (
            <HeadWarpper>
           
             <i className=" iconfont icon-fanhui" onClick={this.hanelonClick.bind(this)} ></i>
              <h2>购物车</h2>
               <p>编辑</p>
            
            </HeadWarpper>
        )
    }

    hanelonClick(){
        
        console.log(this.props)
    this.props.history.goBack()
}
}

export default withRouter(Head)
