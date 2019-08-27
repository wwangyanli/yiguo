import styled from "styled-components"

export const List  = styled.div`
            width:100%;
            overflow:auto;
            li{
                width:100%;
                height:2.05rem;
                display:flex;
                justify-content: center;
                align-items: center;
                padding:0.1rem 0.1rem 0.18rem 0.1rem;
                border-bottom:0.01rem solid #eee;
                .left{
                    width:33%;
                    height:100%;
                    img{
                        width:1rem;
                        height:1rem;
                    }
                }
                .right{
                    width:67%;
                    height:100%;
                    display:flex;
                    justify-content:space-around;
                    align-items: left;
                    flex-direction: column
                    .title{
                        height:0.38rem;
                        margin-top:.05rem;
                        color:#333;
                        font-size:.14rem;
                        font-weight:700;
                        width:100%;
                    }
                    .very{
                        width:100%;
                        height:.16rem;
                        display:flex;
                        justify-content: left;
                        white-space: nowrap;
                        align-items: center;
                        overflow: auto;
                        i{
                            display: block;
                            width:100%;
                            line-height: .16rem;
                            margin-right: .1rem;
                            font-size: .1rem;
                            padding: 0 .05rem;
                            color: #9c9c9c;
                            height: .16rem;
                            border-radius: .08rem;
                            background-color: #f5f5f5;
                            
                        }
                    }
                    
                    .money{
                        color: #f21c1c;
                        font-size:.16rem;
                        font-weight: 700;
                    }
                    p{
                        color: #9c9c9c;
                        margin-top: .05rem;
                        font-size: .12rem;  
                    }
                    .hot{
                        margin-right: .05rem;
                        font-weight: 700;
                        font-size: .12rem;
                        color: #333;
                        span{
                            font-size:.1rem;
                            color:#ccc;
                        }
                    }
                    .good{
                        width:100%;
                        height:.28rem;
                        display:flex;
                        justify-content: left;
                        align-items: center;
                        span{
                            
                            width:0.78rem;
                            height:100%;
                            border: .01rem solid #bfbfbf;
                            color: #666;
                            padding: .055rem .075rem;
                            border-radius: .24rem;
                            font-size:.1rem;
                            line-height:.15rem;
                            margin-top: .05rem;
                            margin-right: .05rem;
                        }
                    }
                }
            }
`