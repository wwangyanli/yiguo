import React, { Component } from 'react'
import Search from '../../components/search';
import {PageBody} from "../../common/commonStyled"
import {sort_api} from "../../api/sort"
import {LeftUl ,Right} from "./styled"

export default class Sort extends Component {
    constructor(){
        super();
        this.state = {
            sort:[],
            rightCon:[],
            index:0,
            list:[],
         
            }
    }
    
    render() {
        let {sort,rightCon,list,index} = this.state
        if(list.length != 0){
            this.handleActive(list,index)
        }
        console.log(rightCon)
        return (
            <div>
                <Search/>
                <PageBody>
                    
                    <LeftUl ref="sortLeft">
                        {
                            sort.map((item,index)=>(
                                <li onClick={this.handleChange.bind(this,index)} key={index}><span>{item.title}</span></li>
                            ))
                        }
                        
                    </LeftUl>
                    
                    <Right>
                            {
                                rightCon.map((right,idx)=>(
                                    <div  className="rightCon" key={idx}>
                                        <div className="top">
                                            <img src={right.picture}/>
                                        </div>
                                       
                                            <div className="hot">
                                                <div className="top">
                                                    <div className="left">{right.children[0].title}</div>
                                                    <div className="right">{right.children[0].name2}<span className="iconfont icon-arrow-right"></span></div>
                                                </div>
                                                {
                                                    right.children[0].children.map((bottom,idb)=>(
                                                            <li key={idb} onClick={this.handleLink.bind(this,bottom.link)}>
                                                                <img src={bottom.picture}/>
                                                                <div>{bottom.title}</div>
                                                            </li>
                                            
                                                    ))   
                                                }
                                                
                                            </div>
                                            <div className="more">
                                                <div className="top">
                                                    <div className="left">{right.children[1].title}</div>
                                                </div>
                                                    {
                                                        right.children[1].children.map((more,idm)=>(
                                                      
                                                                <li key={idm}>
                                                                    <img src={more.picture}/>
                                                                    <div>{more.title}</div>
                                                                </li>
                                            
                                                        ))   
                                                    }   
                                            </div>
                                                    
                                        
                                    </div>
                                ))
                            }
                            
                    </Right>
                </PageBody>
            </div>
        )
    }
    async componentDidMount(){
        let data = await sort_api();
        let arr = data.data
        let obj = arr[0]
        let brr = [];
        brr.push(obj)
        this.setState({
            sort:arr,
            rightCon:brr
        })
        console.log(arr)
        var list = this.refs.sortLeft
        this.setState({
            list:list
        })
    }
    handleActive(...rest){
        var list = rest[0]
        var index = rest[1]
        for(var i = 0; i < list.children.length;i++){
            list.children[i].className = ""
            list.children[i].firstChild.className = ""
        }
        list.children[index].className = "active"
        list.children[index].firstChild.className = "active"
    }
    handleChange(index){
        let {sort} = this.state;
        let obj = sort[index]
        let brr = []; 
        brr.push(obj)
        this.setState({
            rightCon:brr,
            index:index
        })
        
    }
    handleLink(val){
        this.props.history.push({pathname:"/searchDetail",state:{val}})
    }
}
