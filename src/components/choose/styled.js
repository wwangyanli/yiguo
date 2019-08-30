import styled from "styled-components"

export const ChooseCon  = styled.div`
    width:100%;
    height:0.85rem;
    z-index:10;
    .top{
        height:0.44rem;
        display:flex;
        position:relative;
        
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
        .modalZh{
            width:100%;
            height:.92rem;
            padding:.1rem 0;
            z-index:10;
            background:#fff;
            position:absolute;
            top:.44rem;
            border-top:0.01rem solid #eee;
            .zhCon{
                height:100%;
                width:100%;
                display:flex;
                flex-wrap: wrap
                
                li{  
                    width:1.87rem;
                    height:.36rem
                    font-size:.14rem;
                }
                .active{
                    color:#f21c1c;
                }
            }
            
        }
        .modalJg{
            width:100%;
            height:.92rem;
            padding:.1rem 0;
            z-index:10;
            background:#fff;
            position:absolute;
            top:.44rem;
            border-top:0.01rem solid #eee;
            .zhCon{
                height:100%;
                width:100%;
                display:flex;
                flex-wrap: wrap
                
                li{  
                    width:1.87rem;
                    height:.36rem
                    font-size:.14rem;
                }
                .active{
                    color:#f21c1c;
                }
            }
            
        }
    }
    .bottom{
        height:0.41rem;
        display:flex;
        padding: 0 0.05rem .15rem;
        position:relative;
        border-bottom:0.01rem solid #eee;
        .modalXp{
            width:100%;
            height:2.35rem;
            z-index:10;
            background:#fff;
            position:absolute;
            top:0.41rem;
            .top{
                height:1.8rem;
                width:100%;
                display:flex;
                flex-wrap: wrap 
                li{  
                    width:1.87rem;
                    height:.36rem
                    font-size:.14rem;
                }
                .active{
                    color:#f21c1c;
                }
            }
            .bottomXp{
                height:0.55rem
                border-top:0.01rem solid #eee;
                div{
                    line-height:.55rem;
                    text-align:center;
                    width:1.86rem;
                    height:.55rem;
                    font-size:.14rem;
                    float:left
                }
                .right{
                    background:#f21c1c;
                    color:#fff;
                }
            }
        }
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

