import React, { Component, Fragment } from 'react'
import { PageBody } from "@common/commonStyled"
import Haders from "./headers"
import { NavLink} from "react-router-dom"
 
export default class Eat extends Component {
    render() {
        return (
            <Fragment>
                <Haders />
                <PageBody>
                    <div className="ceng">
                        <div className="boxss">
                            <NavLink>
                            <div className="box1">
                                <img src="https://img2.ch999img.com//newstatic/916/71e026db23deb9.png" />
                                <h2>消息通知</h2>
                            </div>
                            </NavLink>
                            <div className="box1">
                                <img src="https://img2.ch999img.com//newstatic/916/71e026db23deb9.png" />
                                <h2>消息通知</h2>
                            </div>
                            <div className="box1">
                                <img src="https://img2.ch999img.com//newstatic/916/71e026db23deb9.png" />
                                <h2>消息通知</h2>
                            </div>
                            <div className="box1">
                                <img src="https://img2.ch999img.com//newstatic/916/71e026db23deb9.png" />
                                <h2>消息通知</h2>
                            </div>
                        </div>
                        {/*  */}
                        <div className="bottoms">
                                  
                        
                        <div className="bootomstop">
                            <div className="box2">
                                    <h2>08-23 19.05</h2>
                                    <div className="box_aa">
                                        <img src="https://img2.ch999img.com/pic/clientimg/201906050349130.png"/>
                                    </div>
                                    <p>本周降价机型</p>
                                    <p>有没有您关注的？</p>
                               <p>-----------------------------------------------------------------</p>
                               <h3>查看详细</h3>

                            </div>

                        </div></div>
                    </div>
                </PageBody>
            </Fragment>
        )
    }
}
