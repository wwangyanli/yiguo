import styled from "styled-components"

export const LeftUl  = styled.ul`
        width:0.86rem;
        height:100%rem;
        li{
            width:100%;
            height:0.51rem;
            padding:0.19rem 0;
            color: #333;
            font-size:0.13rem;
            line-height:0.13rem;
            text-align:center;
        }
`

export const Right = styled.div`
        width:100%;
        height:100%;
        padding: 0.18rem 0.2rem
        li{
            width:0.83rem;
            height:0.96rem;
            display:flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center
            img{
                display:block;
                width:0.57rem;
                height:0.57rem;
            }
            div{
                height:100%;
                font-size:0.12rem;
                text-align:center;
                color:#808080;
            }
        }
`