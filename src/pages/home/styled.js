import styled from "styled-components";
export const HomeTop = styled.div`

    .top{
        width:100%;
        height:0.44rem;
        /* background: linear-gradient(90deg,#39da85,#01b27a); */
        background:rgba(242, 28, 28);
        position:fixed;
        z-index:3;
        left:0;
        top:0;
        display:flex;
        flex-direction:row;
        justify-content : space-between;
        align-items:center;
        .left{
            width:15%;
            hieght:0.38rem;
            font-size:12px;
            color:#fff;
            margin-left:0.1rem;
            i{
                font-size:12px;
            }
        }
        .right{
            width:85%;
            height:0.4rem;
            .inp{
                width:95%;
                height:0.3rem;
                background:#fff;
                border-radius: .45rem;
                margin-top:0.05rem;
                display:flex;
                flex-direction:row;
                align-items:center;
                i{
                    margin-left:0.1rem;
                    color:#ccc;
                }
                label{
                margin-left:0.05rem;
                font-size:12px;
                color:#999;
            }
            }
        }
    }
    .active{
        color:#fff;
        font-size:16px;
    }
    .tabs{
        position: fixed;
        z-index:3;
        top: 0.44rem;
        height:0.4rem;
        background:rgba(242, 28, 28);
        display:flex;
        overflow-x: auto;
        white-space: nowrap;
        ul{
            display:flex;
            align-items : center;
            width:3.75rem;
            li{
                float:left;
                font-size:14px;
                color:#fff;
                margin-right:0.15rem;
                margin-left:0.1rem;
            }
        }
        
    }
   
   
`