import React, { Component } from 'react'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import { HomeTop } from "./styled"

import {Tuijian,Time,PinTuan,TouTiao} from "@pages"

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }
    render() {
      
        // console.log(this.props,111)
        return (
            
            <HomeTop>
                {this.props.children}
                <div className='top'>
                    <div className='left' onClick={this.handleToAdree.bind(this)}>
                        <span>北京&nbsp;&nbsp;</span>
                        <i className='iconfont icon-down'></i>
                    </div>
                    <div className='right'>
                        <div className='inp' onClick={this.handleToSearch.bind(this)}>
                            <i className='iconfont icon-8'></i>
                            <label>
                                请输入商品名称    
                            </label>
                        </div>
                        
                    </div>
                </div>
                <div className='tabs'>
                    <ul>
                      
                     <li>
                            <NavLink to='/home/tuijian'>推荐</NavLink>
                        </li>
                        <li>
                            <NavLink to='/home/time'>限时购</NavLink>
                        </li>
                        <li>
                            <NavLink to='/home/pintuan'>拼团购</NavLink>
                        </li>
                        <li>
                            <NavLink to='/home/old'>以旧换新</NavLink>
                        </li>
                       <li>
                            <NavLink to='/home/phone'>手机快修</NavLink>
                        </li>
                        <li>
                            <NavLink to='/home/toutiao'>头条</NavLink>
                        </li>  
                      
                    </ul>
                    
                </div>
                <Switch>
                    <Redirect from="/home" to="/home/tuijian" exact/>

                    <Route path='/home/tuijian' component={Tuijian}/>
                    <Route path='/home/time' component={Time}/>
                    <Route path='/home/pintuan' component={PinTuan}/>
                    <Route path='/home/toutiao' component={TouTiao}/>
                    
                </Switch>
               
            </HomeTop>
        )
    }
    handleToAdree(){
      
        this.props.history.push("/addree")
    }
    handleToSearch(){
        this.props.history.push("/search")
    }
  
}
