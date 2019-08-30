import styled from "styled-components";
export const Tim = styled.div`
    .warp{
        margin-top:0.84rem;
        width:100%:
        height:2rem;
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
                img{
                    width:100%;
                    height:100%;
                }
            }
        }
        .active{
            color:red;
        }
        .conditionArea_fixed{
            position: fixed;
            top: 0.88rem;
            z-index: 20;
        }
        .qiang{
            width:100%;
            height:0.58rem;
            background:#fff;
            box-shadow:0 0.05rem 0.08rem #eee;
            .con{
                width:100%:
                height:0.58rem;
                margin-bottom:0.1rem;
                
                .one{
                    padding:0.1rem 0;
                    display: flex;
                    overflow-x: auto;
                    white-space: nowrap;
                    
                    a{
                        display:block;
                        float:left;
                        width:0.8rem;
                        margin-left:0.1rem;
                        p:nth-child(1){
                            font-size:14px;
                            padding:0.04rem 0.1rem;
                            color:#000;
                            text-align:center;
                            /* background: #000;
                            border-radius: 0.5rem; */
                        }
                        p:nth-child(2){
                            font-size:13px;
                            color:#999;
                            text-align:center
                        }
                    }
                }
                .clockTab{
                    width:100%;
                    height:0.88rem;
                    background:#ccc;
                }
            }
        }   
        .product{
                width:100%;
                height:7rem;
                .clock{
                  
                    height:0.09rem;
                    border-bottom: 2px dotted #f21c1c;
                    margin: 0.2rem 0.15rem;
                    position: relative;
                    text-align:center;
                   
                    p{
                        width:100%;
                        background: #fff;
                        position: absolute;
                        
                       
                        color: #f21c1c;
                        font-size:14px;
                        color:##f21c1c
                        span{
                           
                            height:0.18rem;
                            font-size:14px;
                            color:##f21c1c;
                            em{
                                width:1rem;
                                height:0.18rem;
                                font-size:14px;
                                color:##f21c1c;
                            }
                        }
                    }
            
                }
                .info{
                    width:100%;
                    height:1.1rem;
                    a{
                        display:flex;
                        padding:0.1rem;
                        justify-content: space-around;
                        border-bottom:1px solid #ccc;
                           
                        img{
                            width:0.9rem;
                            height:0.9rem;
                            margin-right:0.1rem;
                        }
                        .right{
                                p{
                                    color:#333;
                                   font-size:14px;
                                } 
                               p:nth-child(2){
                                   color:#929292;
                                   font-size:12px
                               }
                               .price{
                                   marrgin-top:0.02rem;
                                   displaay:flex;
                                   justify-content: space-between;
                                   div:nth-child(1){
                                        .price-s{
                                            width:1.7rem;
                                            height:0.2rem;
                                            display:flex;
                                            margin-top:0.1rem;
                                            p:nth-child(1){
                                                font-size:14;
                                                color: rgba(0, 0, 0);
                                                margin-right:0.08rem;
                                            }
                                            p:nth-child(2){
                                                font-size:12px;
                                                color:#9c9c9c
                                            }
                                        }
                                        .jj{
                                            display:flex;
                                            justify-content: space-between;
                                            .jindu{
                                                width:1.6rem;
                                                height:0.18rem;
                                                background:yellow;
                                                border-radius:0.08rem;
                                                margin-top:0.1rem;
                                                display:flex;
                                                align-items:center;
                                                position:relative
                                                span{
                                                    font-size:8px;
                                                    color:#fff;
                                                    margin-left:0.07rem;
                                                    position:absolute;
                                                    z-index:1
                                                }
                                                i{
                                                    background:#fa6571;
                                                    border-radius:0.06rem;
                                                    position:absolute;
                                                    width:90%;
                                                    display: block;
                                                    height: 100%;
                                                    left: 0;
                                                    top: 0;
                                                }
                                                
                                            
                                            }
                                            .go{
                                                background:#f21c1c;
                                                width:0.7rem;
                                                height:0.3rem;
                                                font-size:14px;
                                                text-align:center;
                                                line-height:0.3rem;
                                                border-radius: 0.3rem;
                                                margin-left:0.2rem;
                                                color:#fff;
                                                
                                            }

                                        }
                                       
                                   }
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
`


