import styled from "styled-components";
export const Quan = styled.div`
.con{
    width:100%;
    height:1.95rem;
    padding-top:0.88rem;
    .item-list{
        margin: 0.15rem 0.14rem;
        border-radius: 0.04rem;
        box-shadow: 0 0.05rem 0.1rem 0 rgba(0,0,0,.08);
        padding: 0.1rem;
        color: #000;
        background-color: #fff;
        .topp{
            width:3.27rem;
            height:1.29rem;
            
            .right{
                display:block;
                width:3.27rem;
                height:1.29rem;
                display:flex;
                justify-content: space-around;
                img{
                    
                    width:1.02rem;
                    height：1.29rem;
                    margin-right:0.1rem;
                }
                .ms{
                    width: 2.15rem;
                    height: 1.29rem;
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    /* display: flex; */
                    -webkit-flex-direction: column;
                    -ms-flex-direction: column;
                    flex-direction: column;
                    /* -webkit-align-items: center; */
                    /* -webkit-box-align: center; */
                    -ms-flex-align: center;
                    /* align-items: center; */
                   
                    span{
                        height:0.2rem;
                        line-height:0.2rem;
                        font-size:16px;
                        color:#000;
                        margin-top:0.05rem;
                        font-weight:600
                        
                    }
                    span:nth-child(2){
                        // margin-left:0.1rem;
                        color:#666;
                        font-size:13px;
                    }
                    h2{
                        font-size:12px;
                        color:#000;  
                       margin-top:0.35rem; 

                    }
                    h4{
                        font-size:12px;
                        color:#000;  
                        margin-top:0.05rem; 

                    }
                }
            }
        }
        .bot{
            width:3.27rem;
            height:0.26rem;
            display:flex;
            justify-content: space-between;
            margin-top:0.1rem;
            a{
                width:0.9rem;
                height:0.26rem;
                border-radius: 0.2rem;
                border: 1px solid #bfbfbf;
                display:flex;
                align-items:center;
                i{
                    background: #bfbfbf;
                    color: #fff;
                    display: block;
                    height: 0.18rem;
                    width: 0.18rem
                    text-align: center;
                    line-height: 0.18rem;
                    font-size: 13px;
                    border-radius: 100%;
                }
                span{
                    font-size: 13px;
                    color: #000;
                    text-align: center;
                    padding: 0 0.05rem;
                    line-height: 0.18rem
                }
            }
        }
    }
}

`