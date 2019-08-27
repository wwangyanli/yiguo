import React, { Component} from 'react'
import {ChooseCon,List} from "./styled"

export default class Choose extends Component {
    render() {
        return (
            <ChooseCon>
                <div className="top">
                    <li className="active"><div>综合<span className="iconfont icon-lower-triangle"></span></div></li>
                    <li><div>价格<span className="iconfont icon-lower-triangle"></span></div></li>
                    <li><div>最新上架</div></li>
                    <li><div>筛选</div></li>
                </div>
                <div className="bottom">
                    <li><div>新品<span className="iconfont icon-lower-triangle"></span></div></li>
                    <li><div>华为<span className="iconfont icon-lower-triangle"></span></div></li>
                    <li><div className="glay">运行内存<span className="iconfont icon-lower-triangle"></span></div></li>
                    <li><div className="glay">机身内存<span className="iconfont icon-lower-triangle"></span></div></li>
                </div>
            </ChooseCon>
        )
    }
}
