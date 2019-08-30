import styled from "styled-components";
export const Eeac = styled.div`

        .content{
                margin-top:0.84rem;
                padding-bottom:0.8rem;
                width:100%;
            .banner{
                
                width:100%;
                height:2rem;
                background: linear-gradient(#e10f02,#e10f02 70%,#fff 0,#fff);
                position:relative
                .swiper{
                    width:95%;
                    height:1.72rem;
                    position:absolute;
                    left: 0;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    margin: auto;
                    background:pink;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
            }
            .info{
                width:100%;
                .item-list{
                    width:100%;
                    height:1.15rem;
                    padding:0.15rem 0.15rem;
                    display:flex;
                            justify-content: space-between;
                    img{
                        width:0.85rem;
                        height:0.85rem;
                        background-size: contain;
                    }
                    .right{
                        margin-left:0.1rem;
                        .n1{
                            width:2.52rem;
                            height:0.168rem;
                            font-weight: 700;
                            font-size:14px;
                            color:#000;
                        }
                        .n2{
                            color:#6b6b6b;
                            margin-top:0.05rem;
                            font-size:12px;
                        }
                        .topp{
                            margin-top:0.1rem;
                            display:flex;
                            justify-content: space-between;
                            .inin{
                                width:0.76rem;
                                height:0.36rem;
                                background:blue；
                                p:nth-child(1){
                                    display:flex;
                                    justify-content: space-between;
                                    span:nth-child(1){
                                        color:#f21c1c;
                                        font-size:14px;
                                       
                                        
                                    }
                                    span:nth-child(2){
                                        font-size:10px;
                                        color:#666;
                                        margin-top:0.05rem;
                                    }
                                    
                                }
                                p:nth-child(2){
                                    width:1.76rem;
                                    color:#666;
                                    font-size:10px;
                                    margin-top:0.05rem;
                                }
                            }
                            .pp{
                                width:0.75rem;
                                height:0.36rem;
                                background:red;
                                border-radius: 0.16rem;
                                text-align: center;
                                line-height: 0.36rem;
                                font-size:14px;
                                color:#fff;
                                font-weight:900
                            }
                        }
                    }
                }
            }
            .log{
                width:85%;
                height:0.44rem;
                background:#ccc;
                margin: 0 auto;
                position: fixed;
                margin-left:0.25rem;
                bottom: 0.66rem;
                border-radius: 44px;
                background: rgba(0,0,0,.6);
                color: #fff;
                padding: 0 16px;
                font-size: .37rem;
                transition: all .3s ease;
                pointer-events: auto;
                .logCon{
                    display:flex;
                    align-items:center;
                    justify-content: space-between;
                    p:nth-child(1){
                        font-size:14px;
                        color:#fff;
                        height:0.44rem;
                        line-height:0.44rem;
                       
                        
                    }
                    p:nth-child(2){
                       
                        width:0.8rem;
                        height: 0.24rem;
                        line-height: 0.24rem;
                        text-align: center;
                        background-color: #f21c1c;
                        border-radius: 0.24rem;
                        font-size: 12px;
                        color: #fff;
                    }
                }
            }
 
        }

`
