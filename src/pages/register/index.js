import React, { Component } from 'react'
import {RegisterWarpper}from "./styled"
import {register} from '@api/shopping';
export default class Register extends Component {
    constructor(){
        super()
        this.state={
            password:"",
            username:""
        }
    }
    render() {
        return (
            <div>
            <RegisterWarpper>
                <div className="loginhed">
                    <i className=" iconfont icon-fanhui" onClick={this.hanelgoBack.bind(this)} ></i>
                    <h3>注册</h3>
                </div>
                <div className="dengl">
                    <input type="text" placeholder="请输入用户名" onChange={this.handleName.bind(this)}/>
                    <input type="password" placeholder="请输入密码" onChange={this.handlepaswod.bind(this)}/>
                    <p onClick={this.hanelregin.bind(this)}>注册成功了快去登录</p>
                    <button onClick={this.hanlregister.bind(this)}>注册</button>
                    
                </div>
            </RegisterWarpper>
            </div>
        )
    }
    hanelregin(){
        this.props.history.push("/login")
    }
    hanelgoBack(){
        this.props.history.goBack()
    }
    async hanlregister(){
        alert(1)
        let{username,password} = this.state
        console.log(777,username,password)
        let data = await register(username,password)
        if (data.code==200){
            
            console.log(data)
            this.props.history.push("/login")
            
        }
        
    }
    handleName(e){
           
            this.setState({
                username:e.target.value
            })
          
    }
    handlepaswod(e){
       
        this.setState({
            password:e.target.value
        })
    }
}
