import React, { Component } from 'react'
import { YY } from "./styled"
import axios from 'axios'
export default class Yi extends Component {
    constructor(){
        super();
        this.state = {
            
            cont:[]
        }
    }
    render() {
        let {cont} = this.state
        return (
            <YY>
               <div className='info'>
             
                          {
                               cont.map((item,index)=>(
                                <a key={index}>
                                    <img src={item.imagePath}/>
                                    <div className='right'>
                                            <p>{item.name}</p>
                                            <p>{item.description}</p>
                                            <div className='price'>
                                                <div>
                                                    <div className='price-s'>
                                                        <p>￥{item.price}</p>
                                                        <p>￥{item.originalPrice}</p>
                                                    </div>
                                                    <div className='jj'>
                                                        <div className='jindu'>
                                                            <span>剩余{item.totalCount}件</span>
                                                            <i></i>
                                                            
                                                        </div>
                                                        <div className='go'>去抢购</div>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                    </div>
                                </a>
                               ))
                           }  
                           
                       </div>
            </YY>
        )
    }
    componentDidMount(){
        axios.get("web/api/floors/v1?label=891839163259564033&page=1&random=1566967284464")
        .then((data)=>{
           
            let cont = data.data.data.container.floor[1].content.product[1].list

            this.setState({
                cont
            })
        })
    }
}
