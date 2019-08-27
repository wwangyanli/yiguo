import styled from "styled-components"




export const SearchCon = styled.div`
            background:#f5f5f5;
            height:1.03rem;
            div:nth-child(1){
                width:100%;
                height:0.3rem;
                padding:0.15rem 0.1rem 0 0.1rem;
                color: #000;
                font-weight: 500;
                font-size: .15rem;
                border-bottom:0.01rem solid #eee;
                line-height:0.15rem;
                background:#fff;
            }
            div:nth-child(2){
                width:100%;
                height:0.63rem;
                padding: .15rem .1rem .2rem .1rem;
                overflow-y: hidden;
                white-space: nowrap;
                overflow-x: auto;
                display:flex;
                justify-content: left;
                background:#fff;
                a{
                    padding: 0 0.1rem;
                    border-radius: 0.12rem;
                    height: 0.28rem;
                    line-height: 0.28rem;
                    font-size: 0.12rem;
                    margin-right: 0.1rem;
                    border: 0.01rem solid #ededed;
                    background: #f5f5f5;
                    text-align:center;
                    color:#333;
                }
            }

            
`

export const SearchHot = styled.div`
            padding:0 0.1rem;
            width:100%;
            height:0.44rem;
            display:flex;
            justify-content: space-between;
            align-items: center
            .left{
                display:flex;
                font-size:.13rem;
                span{
                    color:#000;
                    font-size:.14rem;
                    font-weight:900;
                    margin-right: 0.05rem;
                }
                div{
                    width:0.36rem;
                    height:0.18rem;
                    text-align:center;
                    line-height:0.18rem;
                    border:0.01rem solid #f21c1c;
                    border-radius: 0.13rem;
                    color:#f21c1c;
                    font-size:0.12rem;
                    margin-left: 0.05rem;
                }
            }
            span.icon-arrow-right{
                color:#9c9c9c;
                font-size:.12rem!important;
            }
            
`