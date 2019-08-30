import styled from "styled-components";
export const Cont = styled.div`
        .content{
                margin-top:0.84rem;
                padding-bottom:0.8rem;
                width:100%;
            /* .swiper-container {
                
                width:100%;
                height:2rem;
                background: linear-gradient(#e10f02,#e10f02 70%,#fff 0,#fff);
                position:relative;
                .swiper-slide{
                    width:95%;
                    height:1.72rem;
                    position:absolute;
                    left: 0;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    margin: auto;
                    background:pink;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        width:100%;
                        display:block;
                    
                    }
                }
            } */
            .banner{
                width:100%;
                height:2rem;
                background: linear-gradient(#e10f02,#e10f02 70%,#fff 0,#fff);
            
               
                   margin:0 auto;
                   /*  img{
                       
                        display:block;
                        width:95%;
                        height:1.72rem;
                       margin:0 auto;
                    
                    }
                */
            }
            .zhansh{
                width:100%;
                height:0.2rem;
                // margin-bottom:0.02rem;
                background:#fff;
                img{
                    width:100%;
                }
            }
            .server{
                width:100%;
                height:0.75rem;
                background:#fff;
                .fl{
                    display:flex;
                    justify-content: space-between;
                    a{
                        display:block;
                        width:0.75rem;
                        height:0.75rem;
                        img{
                            width:100%;
                        }
                    }
                }
            }
            .news{
                width:100%;
                height:1.25rem;
                background:#fff;
                justify-content: space-between;
                display:flex;
                a{
                    width:1.875rem;hieght:1.23rem;
                    img{
                        width:100%;
                    }
                }
            }
           
            .dao{
                width:100%;
                height:1.5rem;
                background:#fff;
                position:relative
                .daoCon{
                    width:92%;
                    height:1.3rem;
                    position:absolute;
                    left: 0;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    margin: auto;
                    box-shadow: 0 0 10px #e1e1e1;
                    border-radius: 5px;
                    float:left;
                    display: flex;
                    overflow-x: auto;
                    overflow-y: hidden;
                    white-space: nowrap;
                    .conList{
                      
                        a{
                            display:block;
                            width:1.1rem;
                            height:1.3rem;
                            padding:0.04rem 0.05rem;
                            float:left;
                           .name{
                                width:1rem;
                                height:0.16rem;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                line-height:0.16rem;
                                word-break: break-all;
                                font-size:14px;
                                color:#333;
                            }
                            .price{
                                color: #f21c1c;
                                width：1rem;
                                height:0.2rem;
                                line-height:0.2rem;
                                text-align:center;
                                font-size:14px;
                            }
                            .ms{
                                width:0.74rem;
                                height:0.14rem;
                                background:red;
                                font-size:10px;
                                color:#fff;
                                border-radius: 0.14rem;
                                margin-left:0.12rem;
                            }
                            img{
                                width:0.7rem;
                                height:0.7rem;
                                margin:0 auto;
                                background-size: contain;
                            }
                            
                        }
                    }
                }
            }
            .tt{
                width:100%;
                height:0.44rem;
                text-align:center;
                line-height:0.44rem;
                font-size:18px;
                background:#fff;
                color:pink
            }
            .info{
                width:100%;
                height:2.23rem;
                position:relative;
                .infoCon{
                    padding:0.04rem;
                   
                    display: flex;
                    overflow-x: auto;
                    overflow-y: hidden;
                    white-space: nowrap;
                    a{
                        display:block;
                        width:1.4rem;
                        height:1.93rem;
                        margin-right: 0.1rem;
                        padding: 0.1rem;
                        box-shadow: 0 0 10px #e1e1e1;
                        border-radius: 0.03rem;
                        margin-left:0.1rem;
                       
                        img{
                            width:1.2rem;
                            height:1.2rem;
                            background-size: contain;
                        }
                        .name{
                            width:1.2rem;
                            height:0.165rem;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            line-height:0.16rem;
                            word-break: break-all;
                            font-size:14px;
                            color:#333;
                            margin-top:0.05rem;

                        }
                        .ms{
                            width:1.2rem;
                            height:0.165rem;
                            margin-top:0.03rem;
                            color:#9c9c9c;
                            font-size:12px;
                        }
                        .price{
                            color:#f21c1c;
                            margin-top:0.02rem;
                            font-size:12px;
                        }
                    }
                }
            }
            .more{
                width:100%;
               
                .lx{
                    width:100%;
                    height:0.3rem;
                    text-align:center;
                    line-height:0.3rem;
                    font-size:18px;
                    background:#fff;
                    color:pink
                }
                .moreCon{
                    width:100%;
                   display:flex;
                   justify-content: space-around;
                   flex-wrap: wrap;

                    .ccc{
                       
                        width: 1.7rem;
                        width:1.69rem;
                        height:2.5rem;
                        background: #fff;
                        margin-top: .2rem;
                        padding-bottom: 10px;
                        position: relative;
                        box-shadow: 0 0.02rem 0.1rem 0 rgba(0,0,0,.08);
                        border-radius: 0.03rem;
                        img{
                            display:block;
                            width:1.5rem;
                            height:1.5rem;
                            margin:0.1rem auto;
                        }
                        img:nth-child(2){
                            display:block;
                            width:0.45rem;
                            height:0.19rem;
                            position: absolute;
                            left: 0;
                            top: 0.03rem;
                        }
                        .name{
                            width:1.69rem;
                            height:0.26rem;
                            background: #ebf6fe;
                            color: #87acd8;
                            padding: 0.05rem 0.15rem;
                          
                            .nn{
                                width:1.39rem;
                                height:0.16rem;
                                color:#87acd8;
                                font-size:12px;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                overflow: hidden;
                                line-height: 1.2;
                                word-break: break-all;
                            }
                        }
                        .ss{
                            width:1.61rem;
                            height:0.41rem;
                            .nam{
                                margin:0.05rem 0.15rem;
                                color:#333;
                                font-size:14px;
                                white-space: nowrap;
                                overflow: hidden;
                                 text-overflow: ellipsis;
                            }
                            .price{
                                color:#f21c1c;
                                margin:0.05rem 0.15rem;
                                font-size:14px;
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