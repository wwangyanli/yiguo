import React, { Component } from 'react'
import { Tim } from "./styled"
import axios from 'axios'
import {NavLink,Switch,Route,Redirect} from 'react-router-dom'
import {Ri,Yi,Er } from '@pages';
export default class Time extends Component {
    constructor(){
        super();
        this.state = {
            tabs:[],
            cont:[],
            
        }
    }
   
    render() {
        let {tabs,cont} = this.state
        return (
            <Tim>
                <div className='warp'>
                    <div className='banner'>
                        <div className='swiper'>
                            <img src='https://img2.ch999img.com/newstatic/1379/010c896d89909d43.jpg.webp'></img>
                        </div>
                    </div>
               
                    <div className='qiang'>
                        <div className='con'>
                            <div className='one'>
                          {/*   {
                                tabs.map((item,index)=>(
                                  
                                        <a key={index}>
                                            <p>{item.title}</p>
                                            <p>{item.description}</p>
                                        </a>
                                 
                                
                                ))
                            }
                                 */}
                                 <NavLink to='/home/time/ri'>
                                     <p>周日抢</p>
                                     <p>已结束</p>
                                 </NavLink>
                                 <NavLink  to='/home/time/yi'>
                                     <p>周一抢</p>
                                     <p>已结束</p>
                                 </NavLink>
                                 <NavLink  to='/home/time/er'>
                                     <p>周二抢</p>
                                     <p>已结束</p>
                                 </NavLink>
                                 <NavLink  to='/home/time/ri'>
                                     <p>周三抢</p>
                                     <p>已结束</p>
                                 </NavLink>
                                 <NavLink  to='/home/time/yi'>
                                     <p>周四抢</p>
                                     <p>已结束</p>
                                 </NavLink>
                                 <NavLink  to='/home/time/er'>
                                     <p>周五抢</p>
                                     <p>已结束</p>
                                 </NavLink>
                                 <NavLink  to='/home/time/ri'>
                                     <p>周六抢</p>
                                     <p>已结束</p>
                                 </NavLink>
                                
                                
                            </div>

                            <Switch>
                            <Redirect from="/home/time" to="/home/time/ri" exact/>

                            <Route path='/home/time/ri' component={Ri}></Route>
                            <Route path='/home/time/yi' component={Yi}></Route>
                            <Route path='/home/time/er' component={Er}></Route>

                            </Switch>

                        </div>
                    </div>
                    <div className='product'>
                        <div className='clock'>
                  
                            <p>距结束:

                                <span>
                                    <em>12</em>时
                                    <em>12</em>分
                                    <em>12</em>秒
                                </span>
                            </p>
                        </div>
                       <div className='info'>
                         
                            
                           
                       </div>
                    </div>
                    <div className='log'>
                        <div className='logCon'>
                            <p>登录尊享极致购物体验</p>
                            <p>立即登录</p>
                        </div>
                    </div>
                </div>
                
            </Tim>
        )
    }
    componentDidMount(){
        axios.get("web/api/floors/v1?label=891839163259564033&page=1&random=1566967284464")
        .then((data)=>{
           
            let tabs = data.data.data.container.floor[1].content.tabs
            let cont = data.data.data.container.floor[1].content.product[0].list

            // console.log(cont)
            this.setState({
                tabs,
                cont
            })
        })
    }
   
}
