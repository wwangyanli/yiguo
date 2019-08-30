import React, { Component } from 'react'
import http from "@utils/http"
import Search from "../../components/search"
import Choose from "../../components/choose"
import {List} from "./styled"
import {connect} from "react-redux"
import {mapStateToProps} from "./map"
 
class SearchDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goods:[]
        }
        this.handleSend()
        
        
    }  
    render() {
        let {goods} = this.state
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
            if(sessionStorage.getItem("zH") && sessionStorage.getItem("zH").length != 2){ 
                    var collCon = JSON.parse(sessionStorage.getItem("zH")).address
                    var url = JSON.parse(sessionStorage.getItem("zH")).url
                    let detail = (coll=collCon)=>http.get(url,{coll})
                    let data = await detail()
                    this.setState({
                    goods:data.data.product.list
                    })
            }else if(!sessionStorage.getItem("search") || sessionStorage.getItem("search").length == 2){
                if(!sessionStorage.getItem("link") && this.props.location.state.url == undefined){
                    var link = this.props.location.state.val;
                    var address =  link.split("list/")[1]; 
                    sessionStorage.setItem("link",link)
                    var url = "/web/api/products/search/v1?";
                        var detail = (coll=address)=>http.get(url,{coll})
                        let data = await detail()
                        this.setState({
                            goods:data.data.product.list
                        })
                }else if(sessionStorage.getItem("link") && sessionStorage.getItem("search").length == 2){
                    if(this.props.location.state){
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
                    }
                    
                }  
                if(!sessionStorage.getItem("search")){
                    var url = this.props.location.state.url
                    var key = this.props.location.state.keyword
                    var type = this.props.location.state.serchType
                    var pages = this.props.location.state.page
                    var cou = this.props.location.state.inStock
                    var obj = {}
                        obj.url = url
                        obj.key = key
                        obj.type = type
                        obj.pages = pages
                        obj.cou = cou
                    var msg = JSON.stringify(obj)
                    sessionStorage.setItem("search",msg)
                    var detail = (coll='',keyword=key,page = pages,serchType = type,inStock = cou)=>http.get(url,{coll,keyword,page,inStock,serchType})
                                let data = await detail()
                                this.setState({
                                goods:data.data.product.list
                        })
                }
               
            }else if(sessionStorage.getItem("search")){
                    if(this.props.location.state ){
                        var url = this.props.location.state.url
                        var key = this.props.location.state.keyword
                        var type = this.props.location.state.serchType
                        var pages = this.props.location.state.page
                        var cou = this.props.location.state.inStock
                        var obj = {}
                        obj.url = url
                        obj.key = key
                        obj.type = type
                        obj.pages = pages
                        obj.cou = cou
                        var msg = JSON.stringify(obj)
                        sessionStorage.setItem("search",msg)
                        var detail = (coll='',keyword=key,page = pages,serchType = type,inStock = cou)=>http.get(url,{coll,keyword,page,inStock,serchType})
                            let data = await detail()
                            this.setState({
                            goods:data.data.product.list
                    })
                    }else{
                            var url = JSON.parse(sessionStorage.getItem("search")).url
                            var key = JSON.parse(sessionStorage.getItem("search")).key
                            var type = JSON.parse(sessionStorage.getItem("search")).type
                            var pages = JSON.parse(sessionStorage.getItem("search")).pages
                            var cou = JSON.parse(sessionStorage.getItem("search")).cou
                            var detail = (coll='',keyword=key,page = pages,serchType = type,inStock = cou)=>http.get(url,{coll,keyword,page,inStock,serchType})
                                let data = await detail()
                                this.setState({
                                goods:data.data.product.list
                        })
                    }  
        }
        
    }
    async componentWillReceiveProps(newProps){
        if(newProps){
            if(newProps.type){
                var url = newProps.url;
                var coll = newProps.coll; 
                var searchType = newProps.type
                var obj = {}
                obj.url = url;
                obj.coll = coll;
                obj.searchType = searchType
                var msg = JSON.stringify(obj)
                sessionStorage.setItem("xP",msg)
                let detail = (coll=newProps.coll,searchType=newProps.type)=>http.get(url,{coll,searchType})
                let data = await detail()
    
                this.setState({
                goods:data.data.product.list
                })
            }else{
                var url = newProps.url;
                var address = newProps.coll; 
                var obj = {}
                obj.url = url;
                obj.address = address;
                var msg = JSON.stringify(obj)
                sessionStorage.setItem("zH",msg)
                let detail = (coll=newProps.coll)=>http.get(newProps.url,{coll})
                let data = await detail()
                    this.setState({
                    goods:data.data.product.list
                    })
                }
            }  
           
    
    }
   
}

export default connect (mapStateToProps)(SearchDetail)