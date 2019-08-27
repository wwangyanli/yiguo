import styled from "styled-components"

export const ChooseCon  = styled.div`
    width:100%;
    height:0.85rem;
    z-index:10;
    .top{
        height:0.44rem;
        display:flex;

        li{
            width:0.93rem;
            height:100%;
            font-size:.14rem;
            color:#333;
            display:flex;
            justify-content: center;
            align-items: center
        }
        li.active{
            color: #f21c1c;
        }
    }
    .bottom{
        height:0.41rem;
        display:flex;
        padding: 0 0.05rem .15rem;
        li{
            width:0.91rem;
            height:.26rem;
            font-size:.12rem;
            color:#333;
            display:flex;
            justify-content: center;
            align-items: center;
            div{
                display:flex;
                justify-content: center;
                align-items: center;
                border: 0.01rem solid #f21c1c;
                background-color: #fff;
                color: #f21c1c;
                height: .24rem;
                width:100%;
                border-radius: .12rem;
                border-radius: .12rem;
                margin: 0 0.05rem;
                padding: 0 0.05rem;
            }
            div.glay{
                background-color: #f5f5f5;
                border:0;
                color:#333;
            }
        }ss
    }
`

