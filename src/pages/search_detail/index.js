import React, { Component } from 'react'
import http from "@utils/http"
import Search from "../../components/search"
import Choose from "../../components/choose"
import {List} from "./styled"
 
export default class SearchDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goods:[]
        }
        this.handleSend()
    }  
    render() {
        let {goods} = this.state
        console.log(5555,goods)
        return (
            <div>
                <Search/>
                <Choose/>
                <List>
                    {
                        goods.map((item,index)=>(
                        <li key={index}>
                        <div className="left">
                            <img src={item.imagePath}/>
                        </div>
                        <div className="right">
                            <div className="title">{item.name}</div>
                            <div className="very">
                            {
                                item.tag.map((veryCon,idv)=>(
                                    <div key={idv}>
                                        <i>{veryCon}</i>
                                    </div>
                                ))
                            }
                            </div>
                            <span className="money">￥{item.price}</span>
                            <p>{item.commentCount}人评价 好评率{item.praiseRate}</p>
                            {item.rank.text?<div className="hot">{item.rank.text}<span className="iconfont icon-arrow-right"></span></div>:""}
                            <div className="good">
                                {item.bargain&&item.bargain.price?<span>优品￥{item.bargain.price}</span>:""}{item.secondHand&&item.secondHand.price?<span>良品￥{item.secondHand.price}</span>:''}
                            </div>
                        </div>
                    </li>
                        ))
                    }
                    
                </List>
            </div>
        )
    }
    async handleSend(){   
        if(!sessionStorage.getItem("link")){
            var link = this.props.location.state.val;
            var address =  link.split("list/")[1]; 
            sessionStorage.setItem("link",link)
            var url = "/web/api/products/search/v1?";
                var detail = (coll=address)=>http.get(url,{coll})
                let data = await detail()
                this.setState({
                    goods:data.data.product.list
                })
                console.log(data,111) 
        }else{
            if(this.props.location.state){
                alert(1)
                var link1 = this.props.location.state.val;
            }else{
                var link1 = ""
            }
            var link2 = sessionStorage.getItem("link")
            if(link1 == link2 || link1 == ""){
                var address = link2.split("list/")[1]; 
                var url = "/web/api/products/search/v1?";
                var detail = (coll=address)=>http.get(url,{coll})
                let data = await detail()
                
                this.setState({
                    goods:data.data.product.list
                })
                console.log(data,222,data.data.product.list) 
            }else{
                sessionStorage.setItem("link",link1)
                var link = sessionStorage.getItem("link")
                var address = link.split("list/")[1];
                var url = "/web/api/products/search/v1?";
                var detail = (coll=address)=>http.get(url,{coll})
                let data = await detail()
                this.setState({
                    goods:data.data.product.list
                })
                console.log(data,333) 
            }
            
        }    
       
    }
}
