import styled from "styled-components";
export const EE = styled.div`
.info{
    width:100%;
    height:1.1rem;
    margin-top:0.5rem;
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

`