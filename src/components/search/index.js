import React, { Component } from 'react'
import {SearchWarpper} from "./styled"
import {withRouter} from "react-router-dom"
class Search extends Component {
    state = {
        title:""
    }
    render() {
        let {title} = this.props
        return (
            <SearchWarpper>
                <div className="iconfont icon-fanhui left" onClick={this.handleBack.bind(this)}></div>
                <span className="iconfont icon-8"></span>
                <input onFocus={this.handleSearch.bind(this)} placeholder="5G手机"/>
                <div className="right">{title?title:"..."}</div>
            </SearchWarpper>
        )
    }
    handleBack(){
        this.props.history.goBack();
    }
    handleSearch(){
        this.props.history.push("/search")
    }
}

export default withRouter(Search)