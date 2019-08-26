import React, { Component } from 'react'
import {SearchWarpper} from "./styled"
export default class Search extends Component {
    render() {
        return (
            <SearchWarpper>
                <span className="iconfont icon-8"></span>
                <input placeholder="请输入商品名称"/>
                <div>搜索</div>
            </SearchWarpper>
        )
    }
}
