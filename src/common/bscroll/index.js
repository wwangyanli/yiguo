import React, { Component } from 'react'
import{Warppercomment} from "./styled"
import Bscroll from "better-scroll"

export default class Bscrollcomponen extends Component {
    render() {
        return (
            <Warppercomment ref="wrapper">
                {this.props.children}
            </Warppercomment>
        )
    }
    componentDidMount(){
        this.scroll=new Bscroll(this.refs.wrapper,{
            click:true,
            tap:true
        })
    }
}
