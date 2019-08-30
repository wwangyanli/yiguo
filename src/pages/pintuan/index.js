import React, { Component } from 'react'
import { Eeac } from "./styled"
import axios from 'axios'
export default class Tuijian extends Component {
    constructor() {
        super();
        this.state = {
            list:[]
        }
    }
    render() {
        let {list} = this.state

        return (
            <Eeac>
                <div className='content'>
                    <div className='banner'>
                        <div className='swiper'>
                            <img src='https://img2.ch999img.com/newstatic/1380/010c5e35cb50ffb5.jpg.webp'></img>
                        </div>
                    </div>
                    <div className='info'>
                        {
                            list.map((item,index)=>(
                                <div className='item-list' key={index}>
                                    <img src={item.imagePath}/>
                                    <div className='right'>
                                        <p className='n1'>{item.productName}</p>
                                        <p className='n2'>{item.skuName}</p>
                                        <div className='topp'>
                                            <div className='inin'>
                                                <p>
                                                    <span>￥{item.raPrice}</span>
                                                    <span>￥{item.price}</span>
                                                </p>
                                                <p>{item.raType}</p>
                                            </div>
                                            <div className='pp'>去拼团</div>
                                        </div>
                                    </div>
                                </div>
                        
                             
                            ))
                        }
                       
                    </div>
                    <div className='log'>
                        <div className='logCon'>
                            <p>登录尊享极致购物体验</p>
                            <p>立即登录</p>
                        </div>
                    </div>
                </div>

            </Eeac>

        )
    }
    componentDidMount(){
        axios.get("/web/api/floors/v1?label=1118433473604915201&page=1&random=1566959711173")
        .then((data)=>{
            let list = data.data.data.container.floor[1].content
            this.setState({
                list,
            })
        })
       
    }
}


