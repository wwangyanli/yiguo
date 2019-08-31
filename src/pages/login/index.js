import React, { Component, Fragment } from 'react'
import "./index.js"
import { LoginWarpper } from "./styled"

import{connect} from "react-redux"
import {mapstateToProps,mapDispatchToProps} from "./connect"
 class Login extends Component {
     state={
        name:"",
        word:""
     }
    render() {
        let {name,word} = this.state
        console.log(this.props)
        return (
            <LoginWarpper>
                <div className="loginhed">
                    <i className=" iconfont icon-fanhui" onClick={this.hanelgoBack.bind(this)} ></i>
                    <h3>登录</h3>
                </div>
                <div className="dengl">
                    <input type="text" placeholder="请输入用户名" onChange={this.handleNameLogin.bind(this)}/>
                    <input type="password" placeholder="请输入密码" onChange={this.handlepaswodLogin.bind(this)} />
                    <p onClick={this.hanelregin.bind(this)}>还没注册快去注册</p>
                    <button onClick={this.props.hanelBtn.bind(this,name,word)}>登录</button>
                    
                </div>
            </LoginWarpper>
        )
    }
    hanelgoBack() {
       this.props.history.goBack()
    }
    hanelregin(){
        this.props.history.push("/register")
    }
    handleNameLogin(e){  
        var name = e.target.value    
        this.setState({
            name:name
        })                
    }
    handlepaswodLogin(e){
        var word = e.target.value    
        this.setState({
            word:word
        })     
    }
    componentWillReceiveProps(newPrpos){
        alert(newPrpos.keyNum)
        if(newPrpos.keyNum == "登录成功"){
            sessionStorage.setItem("token",newPrpos.username)
            this.props.history.push("/home")
        }
        
    }
  
    
}
export default connect(mapstateToProps,mapDispatchToProps)(Login)