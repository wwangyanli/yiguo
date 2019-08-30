import React, { Component } from 'react'
import { Eeac } from "./styled"
/* import { addr } from '@api/home' */
import axios from 'axios'
export default class Tuijian extends Component {
    constructor() {
        super();
        this.state = {
          news:[],
          newss:[]
        }
    }
    render() {
      let {news,newss} =  this.state 
        return (
            <Eeac>
                <div className='content'>
                    <div className='banner'>
                        <div className='con'>
                        
                            <img src='https://img2.ch999img.com//pic/edt/news/20190821/20190821181956_4505.jpg'/>
                            <p>
                                <span>三星首款国行5G机皇 Note10系列发布:6599元起</span>
                            </p>
                            
                        </div>
                    </div>
                
                {
                    news.map((item,index)=>(
                        <div className='news' key={index}>
                            <img src={item.imagePath}/>
                            <div className='newsLe'>
                                <p>{item.title}</p>
                                <p className='bot'>
                                    <span>{item.author}</span>
                                    <span>{item.praise}阅读</span>
                                </p>
                            </div>
                        </div>
                    ))
                }
                 <div className='banner'>
                        <div className='con'>
                        
                            <img src='https://img2.ch999img.com//pic/edt/news/20190821/20190821181956_4505.jpg'/>
                            <p>
                                <span>三星首款国行5G机皇 Note10系列发布:6599元起</span>
                            </p>
                            
                        </div>
                    </div>
                {
                    newss.map((item,index)=>(
                        <div className='news' key={index}>
                            <img src={item.imagePath}/>
                            <div className='newsLe'>
                                <p>{item.title}</p>
                                <p className='bot'>
                                    <span>{item.author}</span>
                                    <span>{item.praise}阅读</span>
                                </p>
                            </div>
                        </div>
                    ))
                }
                
                
                    
                   

                </div>

            </Eeac>

        )
    }
    componentDidMount(){
        axios.get("/web/api/floors/v1?label=891839620925239297&page=1&random=0")
        .then((data)=>{
            let news = data.data.data.container.floor[1].content
            this.setState({
                news
            })
        })
        axios.get("/web/api/floors/v1?label=891839620925239297&page=2&random=0")
        .then((data)=>{
            let newss = data.data.data.container.floor[0].content
            this.setState({
                newss
            })
        })
    }
   
}


