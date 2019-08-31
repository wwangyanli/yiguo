import React, { Component, Fragment } from 'react'
import { PageBody } from "@common/commonStyled"
import Deheade from "@components/deheade"
// import "./index.css"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import Footers  from"@components/footers"
import { mapStateToProps, mapDispatchToProps } from "./connect"
import { parse } from 'querystring';
import {Carousel} from 'antd-mobile'
// import { Carousel } from 'antd';
import {Lbt} from "./styled"
class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      imgHeight:172


    }
  }
  render() {
    let { list } = this.props;
    console.log(list,list.pictures)



    return (

      <Lbt>
        <Deheade />
     
        <div className="box" >
          <div className="imgshop">
          <Carousel autoplay
          
          autoplayInterval={800}
          >
         {
           list.pictures?list.pictures.map((item,index)=>(
          
             <img src={item} key={index}   style={{ width: '100%', verticalAlign: 'top'   ,width:"100%",height:"3.76rem",margin:"0 auto",borderRadius: '5px'}}/>
           )):[]
         }
            </Carousel>
          </div>
          <div className="headline">
            <p>[官方标配]{list.productName}{list.skuName}{list.tags}</p>
            <h2>{list.profile}</h2>
            <h3>￥{list.price}</h3>
            <div className="jiang">
              <p>价格走势</p>
              <p>降价通知</p>
              <p>机型对比</p>
              <p>开箱展示</p>
            </div>
          </div>
          <div className="specification">
            <div className="speci">
              <p>规     格</p>
            </div>
            <ul>
              {
                list.params ? list.params.map((items, indexs) => (
                  <li key={indexs}>
                    <img src={items.imgPath} />
                    <p>{items.key}</p>
                    <p >{items.value}</p>
                  </li>
                )) : []
              }
            </ul>
          </div>
          <div className="date">
            <span>{list.rent ? list.rent.tag : ''}</span>
            <p>{list.rent ? list.rent.description : ''}</p>
          </div>
       
        </div>
        <Footers/>
      </Lbt>

    )
  }
  componentDidMount() {
    let { ppid } = this.props.match.params;
    console.log(ppid, 11)
    this.props.haldlist(ppid)
    this.setState({
      imgHeight: 'auto'
    })
  }
  hadlaadd(){
     alert(3)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Detail))