import React, { Component} from 'react'
import {ChooseCon} from "./styled"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import {mapStateToProps,mapDispatchToProps} from "./map"

class Choose extends Component {
    constructor(props){
        super(props);
        this.state = {
            flag:false,
            chooseKey:"新品",
            arr:[],
            flagZh:false,
            zhVal:[],
            flagJg:false,
            jgVal:[],
            box:[],
        }
    }
    render() {
        let {flag,chooseKey,flagZh,zhVal,flagJg,jgVal} = this.state
        
        return (
            <ChooseCon>
                <div className="top" ref="top">
                    <li className="active" onClick={this.handleZhFlag.bind(this)}><div>{this.props.zhKey}<span className="iconfont icon-lower-triangle"></span></div></li>
                    <div className="modalZh" style={{display:flagZh?"block":"none"}}>
                        <div className="zhCon" ref="zH">
                            <li className="active" onClick={this.props.handleChooseZh.bind(this,"综合排序",0,zhVal)}>综合排序</li>
                            <li onClick={this.props.handleChooseZh.bind(this,'按销量排序',1,zhVal)}>按销量排序</li>
                        </div>
                    </div>
                    <li onClick={this.handleJgFlag.bind(this)}><div>{this.props.jgKey}<span className="iconfont icon-lower-triangle"></span></div></li>
                    <div className="modalJg" style={{display:flagJg?"block":"none"}}>
                        <div className="zhCon" ref="jG">
                            <li className="active" onClick={this.props.handleChooseJg.bind(this,"价格升序",0,jgVal)}>价格升序</li>
                            <li onClick={this.props.handleChooseJg.bind(this,'价格降序',1,jgVal)}>价格降序</li>
                        </div>
                    </div>
                    <li className='' onClick={this.props.handleNew.bind(this,"active")}><div>最新上架</div></li>
                    <li ><div>筛选</div></li>
                </div>
                <div className="bottom">
                    <li onClick={this.handleNew.bind(this)}><div>{chooseKey}<span className="iconfont icon-lower-triangle"></span></div></li>
                    <div className="modalXp" style={{display:flag?"block":"none"}}>
                        <div className="top" ref="here">
                            <li className="active" onClick={this.handleChoose.bind(this,"新品",0)}>新品</li>
                            <li onClick={this.handleChoose.bind(this,'一手优品',1)}>一手优品</li>
                            <li onClick={this.handleChoose.bind(this,'二手良品',2)}>二手良品</li>
                            <li onClick={this.handleChoose.bind(this,'租机',3)}>租机</li>
                        </div>
                        <div className="bottomXp">
                            <div className="left" onClick={this.handleClose.bind(this)}>关闭</div>
                            <div className="right" onClick={this.props.handleSure.bind(this,chooseKey)} onMouseUp={this.handleClose.bind(this)}>确定</div>
                        </div>
                    </div>
                    
                    <li><div>华为<span className="iconfont icon-lower-triangle"></span></div></li>
                    <li><div className="glay">运行内存<span className="iconfont icon-lower-triangle"></span></div></li>
                    <li><div className="glay">机身内存<span className="iconfont icon-lower-triangle"></span></div></li>
                </div>
            </ChooseCon>
        )
    }
    componentDidMount(){
        this.setState({
            arr:this.refs.here.children,
            zhVal:this.refs.zH.children,
            jgVal:this.refs.jG.children,
            box:this.refs.top.children
        })
    }
    handleNew(){
        let {flag} = this.state
        this.setState({
            flag:!flag
        })
    }
    handleChoose(...val){
        let {arr} = this.state
        for(var i = 0;i<arr.length;i++){
            arr[i].className = ""
        }
        arr[val[1]].className = "active"
        this.setState({
            chooseKey:val[0]
        })
    }
    handleClose(){
        this.setState({
            flag:false
        })
    }
    handleZhFlag(){
        let {flagZh,box} = this.state
        box[0].className = "active"
        box[2].className = ""
        box[4].className = ""
        box[5].className = ""
        this.setState({
            flagZh:!flagZh,
        })
    }
    handleJgFlag(){
        let {flagJg,box} = this.state
        box[0].className = ""
        box[2].className = "active"
        box[4].className = ""
        box[5].className = ""
        this.setState({
            flagJg:!flagJg
        })
    }
    
}

export default connect (mapStateToProps,mapDispatchToProps)(withRouter(Choose))