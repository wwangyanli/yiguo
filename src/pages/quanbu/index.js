import React, { Component } from 'react'
import { Quan } from './styled';
import axios from "axios"
export default class Quanbu extends Component {
    constructor() {
        super();
        this.state = {
            dian: []
        }
    }
    render() {
        let { dian } = this.state
        return (
            <Quan>

                <div className='con'>



                    {
                        dian.map((item, index) => (
                            <div className='item-list' key={index}>
                                <div className='topp'>
                                    <div className='right'>
                                        <img src={item.picture}/>
                                        <div className='ms'>
                                            <span>{item.name}</span>
                                            <span>{item.address}</span>
                                            <h2>{item.openTime}</h2>
                                            <h4>{item.service}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='bot'>
                                    <a>
                                        <i className='iconfont icon-weizhi1'></i>
                                        <span>到这里去</span>
                                    </a>
                                    <a>
                                        <i className='iconfont icon-weizhi1'></i>
                                        <span>到这里去</span>
                                    </a>

                                    <a>
                                        <i className='iconfont icon-weizhi1'></i>
                                        <span>到这里去</span>
                                    </a>
                                </div>
                            </div>
                        ))
                    }







                </div>
            </Quan>
        )
    }
    componentDidMount() {
        /* https://m.9ji.com/web/api/cityService/store/v1?act=allStore&cityId=0&showCount=0 */
        axios.get("/web/api/cityService/store/v1?act=allStore&cityId=0&showCount=0")
            .then((data) => {
                let dian = data.data.data
                // console.log(data.data.data)
                this.setState({
                    dian
                })
            })
    }
}
