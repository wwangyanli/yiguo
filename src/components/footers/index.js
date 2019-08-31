import React, { Component } from 'react'
import {FooterWarpper} from "./styled"
import ng1 from "../../staic/1.jpg"
import ng2 from "../../staic/2.jpg"
import ng3 from "../../staic/3.jpg"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import { mapStateToProps,mapDispatchToProps} from "./connect"
 class footers extends Component {
    render() {
        return (
            <FooterWarpper>
         <div className="let">
           <div className="let1">
           <img src={ng1}/>
           <p>客服</p>
           </div>
           <div className="let1">
           <img src={ng2}/>
           <p>收藏</p>
           </div>
           <div className="let1">
           <img src={ng3}/>
           <p>购物车</p>
           </div>

         </div>
            <div className="totals">
            <button className="btn" onClick={this.hadlaadd.bind(this,this.props.ppid)}>加入购物车</button>
              {/* <p>共2件商品</p> */}
              <button>立即购买</button>
            </div>
  
          </FooterWarpper>
        )
    }
    hadlaadd(val){
      console.log(this)
      this.props.history.push({pathname:"/shopping",state:{val}})
    }
   
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(footers))