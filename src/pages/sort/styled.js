import styled from "styled-components"

export const LeftUl  = styled.ul`
        width: 25%;
        height:100%;
        margin-top: 0.02rem;
        overflow: auto;
        background: #f5f5f5;
        padding-bottom: 0.5rem;
        box-sizing: border-box;
        li{
            width:100%;
            height:0.44rem;
            color: #333;
            display:flex;
            
            align-items: center
            font-size:0.14rem;
            text-align:center;
            font-weight: 500;
            span{
                display:block;
                width:100%;
                height:0.22rem;
                line-height:0.22rem;
            }
            span.active{
                border-left:0.04rem solid #f21c1c;
                background:#fff;
            }
        }
        li.active{
            background:#fff;
        }
`

export const Right = styled.div`
        width:75%;
        height:100%;
        padding: 0.1rem 0.1rem
        overflow:auto;
            .rightCon{
                .top{
                    img{
                        width:2.62rem;
                        height:0.875rem;
                        display:block;
                    }
                }
                .hot{
                    float:left;
                    margin-top:0.15rem;
                    border-radius: 5px;
                    box-shadow: 0 2px 10px 0 rgba(0,0,0,.08);
                    .top{
                        height:0.3rem;
                        font-size:.14rem;
                        display:flex;
                        justify-content: space-between;
                        align-items: center
                        
                        .left{

                        }
                        .right{
                            color: #9c9c9c;
                            font-size:0.12rem;
                            span{
                                color: #9c9c9c;
                                font-size:0.12rem;
                            }
                        }
                    }

                    li{
                            float:left;
                            width:0.86rem;
                            height:1.08rem;
                            padding:0.1rem 0;
                            display:flex;
                            flex-direction: column
                            justify-content:center;
                            align-items: center
                            img{
                                display:block;
                                width:0.69rem;
                                height:0.69rem;
                            }
                            div{
                                font-size:.12rem;
                            }
                        }
                    }
               
                .more{
                    float:left;
                    margin-top:0.15rem;
                    border-radius: 5px;
                    box-shadow: 0 2px 10px 0 rgba(0,0,0,.08);
                    .top{
                        height:0.3rem;
                        font-size:.14rem;
                        display:flex;
                        justify-content: space-between;
                        align-items: center
                    }
                 
                    li{
                            float:left;
                            width:0.86rem;
                            height:1.08rem;
                            padding:0.1rem 0;
                            display:flex;
                            flex-direction: column
                            justify-content:center;
                            align-items: center
                            img{
                                display:block;
                                width:0.69rem;
                                height:0.69rem;
                            }
                            div{
                                font-size:.12rem;
                            }
                        }
                    }
        
            }
        }
`