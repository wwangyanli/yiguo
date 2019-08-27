import React, { Component } from 'react'
import Search from "@components/search"
import {search_web} from "../../api/search"
import {SearchCon,SearchHot} from "./styled"

export default class SearchPage extends Component {
    constructor(){
        super();
        this.state = {
            hot:[],
            sales:[]
       }
    }
    
    render() {
        let {hot,sales} = this.state
        let salesCon = sales[0]?sales[0]:[]
        console.log(222,hot,sales,salesCon)
        return (
            <div>
                <Search title="搜索"/>
                <SearchCon>
                    <div>
                        热门搜索
                    </div>
                    <div>
                        {
                            hot.map((item,index)=>(
                                    <a href="" key={index}>{item}</a>
                            ))
                        }
                    </div>
                </SearchCon>
                <SearchHot>
                    <div className="left">
                        <span className="iconfont icon-8"></span>
                        <p>{salesCon.content}</p>
                        <div>{salesCon.title}</div>
                    </div>
                    <span className="iconfont icon-arrow-right"></span>
                </SearchHot>
                        
            </div>
        )
    }
    async componentDidMount(){
        let data = await search_web();
        this.setState({
            hot:data.data.hotSearch,
            sales:data.data.advertise
        })
        console.log(333,data.data,this.state.sales)
    }
}
