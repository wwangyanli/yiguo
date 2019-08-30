import React, { Component } from 'react'
import {SearchWarpper} from "./styled"
import {withRouter} from "react-router-dom"
import {mapStateToProps,mapDispatchToProps} from "./map"
import {connect} from "react-redux"

class Search extends Component {
    state = {
        title:"",
        inputVal:""
    }
    render() {
        let {title} = this.props
        return (
            <SearchWarpper>
                <div className="iconfont icon-fanhui left" onClick={this.handleBack.bind(this)}></div>
                <span className="iconfont icon-8"></span>
                <input onFocus={this.handleSearch.bind(this)} onChange={this.props.handleChange.bind(this)} placeholder="5G手机"/>
                <div className="right" onClick={this.handelTaggle.bind(this)}>{title?title:""}</div>
            </SearchWarpper>
        )
    }
    handleBack(){
        this.props.history.goBack();
    }
    handleSearch(){
        this.props.history.push("/search")
    }
    handelTaggle(){
        window.sessionStorage.clear();
        var key= this.props.inputVal
        if(key == ""){
            key = "5G手机" 
        }
        var url = "/web/api/products/search/v1?"
        this.props.history.push({pathname:"/searchDetail",state:{url,keyword:key,serchType:1,page:1,inStock:0}})
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(withRouter(Search))