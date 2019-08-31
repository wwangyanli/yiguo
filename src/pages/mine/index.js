import React, { Component, Fragment } from 'react'
// import "./index.css"
import {MInes}from './styled'
import { mine } from "@api/shopping"
export default class Mine extends Component {
    constructor() {
        super()
        this.state = {
            arr: "",
            list: [],
            num: [],
            val:[]
        }
    }
    render() {
        let { arr, list, num ,val} = this.state
        console.log(11111,list,val)
        return (
            <MInes>
            <Fragment>
                <div className="mine">
                    <div className="set">
                        <div className="top">
                            <i className="iconfont icon-fanhui"></i>
                            <p>设置<i className="iconfont icon-shezhi1 "></i></p>
                        </div>
                        <div className="between">
                        </div>
                        <div className="name">
                            <div className="tx">
                                <div className="tximg">
                                    <img src="https://img2.ch999img.com/newstatic/1381/d43534a496b0c8.png.webp" />


                                    <div className="txname">
                                        <h2>13292105518</h2>
                                        <span>
                                            <h3>普通会员</h3>
                                            <h3>未绑定</h3>
                                        </span>
                                        <p>距离青铜会员</p>
                                    </div>
                                </div>


                            </div>

                            <div className="yuhe">


                                {
                                    list.map((item, index) =>(
                                        <div className="mayn" key={index}>
                                            <h5>{item.number}</h5>
                                            <h6>{item.title}</h6>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                        {/*  */}
                        <div className="fens">
                           {
                               num.map((items,indexs)=>(
                                <div className="fensbox" key={indexs}>
                                <div className="fenstop">
                                    <h2>{items.title}</h2>
                                    <h3>{items.moreText}</h3>
                                </div>
                                <div className="fenbottm">
                                    {
                                        num?num[indexs].item.map((goods,keys)=>(
                                         <div className="fenbottm_top" key={keys}>
                                        <img src={goods.imagePath} />
                                        <h2>{goods.title}</h2>
                                    </div>
                                        )):[]
                                    }
                                    
                                </div>
                            </div>
                               ))
                           }

                        </div>

                    </div>

                </div>

            </Fragment>
            </MInes>
        )
    }
    async   componentDidMount() {
        let data = await mine()
        var arr = data.data
        var aa=arr.user
        var list = arr.property;
        var num = arr.menu
        var val=arr.menu.item
        console.log(aa,arr)
        this.setState({
            arr:arr,
            list:list,
            num:num
        })
    }
}
