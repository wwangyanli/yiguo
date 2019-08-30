import React, { Component } from 'react'
import {NavLink,Switch,Route,Redirect} from 'react-router-dom'
import { Addreess } from "./styled"
import {Quanbu,Fjmd} from "@pages"

export default class Addree extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render() {
        return (
            <Addreess>
                
  

                <div className='top'>
                    <i className='iconfont icon-fanhui' onClick={this.handleClick.bind(this)}></i>
                    <div>
                        <i className='iconfont icon-weizhi'></i>
                        <span onClick={this.handleCityList.bind(this)}>昆明城市</span>
                    </div>
                    <i onClick={this.handleCityList.bind(this)}>切换城市></i>
                </div>
                <div className='tab'>
                    <span>
                        <NavLink to='/addree/quanbu'>全部</NavLink>
                    </span>
                    <span>
                        <NavLink to='/addree/fjmd'>附近门店</NavLink>
                       
                    </span>
                </div>
                <Switch>
                <Redirect from="/addree" to="/addree/quanbu" exact/>

                    <Route path='/addree/quanbu' component={Quanbu}></Route>
                    <Route path='/addree/fjmd' component={Fjmd}></Route>
                </Switch>
                
               
            </Addreess>
        )
    }
    handleClick(){
        this.props.history.push('/home')
    }
    handleCityList(){
        this.props.history.push('/cityList')
        
    }
}
