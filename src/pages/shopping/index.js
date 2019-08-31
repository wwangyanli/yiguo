
import React, { Component, Fragment } from 'react'
import Head from "@components/head";
import { PageBody } from "../../common/commonStyled";

import { shop } from "@api/shopping"
import http from "@utils/http"
import Bscrollcomponen from "@common/bscroll"
import { connect } from "react-redux"
import {ShopWarpper} from "./styled"

import { mapStateToProps, mapDispatchToProps } from "./connext"
// import{numAdd} from  "@actions/shop/actionCreator"
class Shopping extends Component {
    constructor() {
        super()
        this.state = {
            val: [],
            shopCar: [],
            price: "",
            numsMore: "",
            keyNum: 0,
            flag: false,
            index: 0,
            a: 0,
            num:1
        }

    }
    render() {
            
        let { val, shopCar, numsMore, flag, a,num } = this.state
    
        console.log(val,55555555555555)

        for (var i = 0; i < shopCar.length; i++) {
            if (shopCar[i].flags) {
                a += shopCar[i].price * shopCar[i].num
                if(!shopCar[i].num){
                    a += shopCar[i].price * num
                }
                
            }
        }
        return (

            <ShopWarpper>
                <Head />


                <PageBody>

                    <div className="auto">
                        <div className="car">
                            <div className="car-a" >
                                <span>购物车</span>
                                <h2>共{shopCar.length}件商品</h2>
                            </div>
                            <div className="stroll">
                                <div className="box">

                                    <p onClick={this.hanlego.bind(this)}>去逛逛</p>
                                    <i className="iconfont icon-huoche1"></i>

                                </div>
                                {
                                    shopCar.map((items, indexs) => (
                                        <div className="goods" key={indexs} >
                                            <label>
                                                <input type="checkbox" className="check" onClick={this.handleChoose.bind(this, indexs)} />
                                            </label>
                                            <div className="centen">
                                                <div className="Imges">
                                                    <img src={items.imagePath} onClick={this.props.hanleback.bind(this, items.ppid)} />
                                                </div>
                                                <div className="centeto">
                                                    <h2> {items.name}</h2>
                                                    <p>{items.price}</p>
                                                    <div className="btn">
                                                        <button onClick={this.buttjian.bind(this, items.price, indexs)} >-</button>
                                                        <input type="text" value={shopCar[indexs].num ? shopCar[indexs].num : num} className="inp" />
                                                        <button onClick={this.buttjj.bind(this, items.price, indexs)}>+</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>


                            {/* 为你优选 */}

                            <div className="optimization">
                                <div className="bg">
                                    <img src="https://img2.ch999img.com/newstatic/767/3174479e1a14d5.png" />
                                </div>
                                <div className="shop">

                                    {
                                        val.length?val.map((item, index) => (
                                            <div className="shopleft" key={index}>
                                                <div className="imgas" key={index}>
                                                    <img src={item.imagePath} onClick={this.props.hanleback.bind(this, item.ppid)} />
                                                </div>
                                                <p>{item.name}</p>
                                                <div className="botomm">
                                                    <span>￥{item.price}</span>
                                                    <i className="iconfont icon-huoche1" onClick={this.hanledonclic.bind(this, index)}></i>
                                                </div>
                                            </div>
                                        )):[]
                                    }


                                </div>
                            </div>

                            {/*  */}
                        </div>

                    </div>



                    {/* footer */}
                    <div className="footer">
                        <label>
                            <input type="checkbox" className="checkqbu" />
                            <h6>全选</h6>
                        </label>
                        <div className="total">
                            <h3>合计：<span>￥{a}</span></h3>
                            {/* <p>共2件商品</p> */}
                            <button>去结算</button>
                        </div>
                    </div>


                </PageBody>

            </ShopWarpper>

        )
    }
    async componentDidMount() {
        let data = await shop();
        var arr = data.data.product.list;
        if(!sessionStorage.getItem("wyl")){

            var obj = {}
            obj.url = '/web/api/products/search/v1?'
            obj.coll = '2-7-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0_0'
            var msg = JSON.stringify(obj)
            sessionStorage.setItem("wyl",msg)
            this.setState({

                val: arr
    
            })
            this.handlecar()
        }else if(sessionStorage.getItem("wyl")){

            var url= JSON.parse(sessionStorage.getItem("wyl")).url
            var collMsg= JSON.parse(sessionStorage.getItem("wyl")).coll
            var goods = (coll=collMsg)=>http.get(url,{coll})
            let data = await goods();

            var arr = data.data.product.list;
            console.log(arr,9999999999999)
            this.setState({
                val: arr ,
                // shopCar:arr
            })
            console.log(10101010)
            this.handlecar()
        }
        
           

    }
    hanledonclic(index) {
        let { val, shopCar } = this.state

            val[index].num = 0
                    shopCar.push(val[index])
                    this.setState({
                        shopCar,
                    })
        
     
        
        
    }
    buttjj(...val) {

        let { shopCar, price, keyNum } = this.state
        price = Number(val[0])
        for (var i = 0; i < shopCar.length; i++) {
            if (i == val[1]) {
                shopCar[i].num++
               
            }
        }
        keyNum = keyNum + price
        this.setState({
            keyNum,
            
        })


        this.setState({
            shopCar,
            price,
            numsMore: keyNum
        })

    }
    hanlego() {

        this.props.history.push("/home")
    }
    handleChoose(index) {
        // console.log(index)
        let { shopCar, flag } = this.state
        shopCar[index].flags = !shopCar[index].flags
        // console.log( shopCar[index].flags)
        this.setState({
            index,
            flag: shopCar[index].flags
        })
    }
    handleCom() {
        let { shopCar, numsMore } = this.state
        let a = 0

        console.log(a, 55555555555)

    }
    shouldComponentUpdate(newState) {
        let { index, shopCar } = this.state

        if (shopCar[index]) {
            if (shopCar[index].flag) {
                this.handleCom()
            }
        }

        return true
    }
    // ----
    buttjian(...val) {

        let { shopCar, price, keyNum } = this.state
        price = Number(val[0])
        for (var i = 0; i < shopCar.length; i++) {
            if (i == val[1]) {
                
                if( shopCar[i].num == 0){
                    shopCar[i].num = 0   
            }else{
                shopCar[i].num--
                
            }
            
            
        }
        keyNum = keyNum + price
        this.setState({
            keyNum,
           
        })


        this.setState({
            shopCar,
            price,
            numsMore: keyNum
        })


    }
   
}
 handlecar(){
    let { val, shopCar } = this.state
        console.log(1111,shopCar)
    if(val.length>0){
        if(this.props.location.state){
            for(var i = 0 ; i<val.length;i++){
                if(val[i].ppid == this.props.location.state.val){
                   val[i].num = 1
                    shopCar.push(val[i])
                    this.setState({
                        shopCar,
                    })
                }
            }
        }
    }
    
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shopping)