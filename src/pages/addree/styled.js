import styled from "styled-components";
export const Addreess = styled.div`
    .top{
        width:100%;
        height:0.44rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
        border-bottom:1px solid #000;
        position: fixed;
        top: 0;
        background:#fff;
        i{
            height:0.44rem;
            width:0.44rem;
            font-size:20px;
            color:#000;
            line-height:0.44rem;
            text-align:center;
        }
        div{
            width:2.35rem;
            height:0.44rem;
            display:flex;
            align-items: center;
            text-align:center;
            i{
                display:inline-block;
                font-size:14px;
                color:red;
                padding-left:0.8rem;

            }
            span{
                font-size:14px;
                font-weight:500;
                color:#000;
                margin-left: 0.2rem;
                
            }
            
        }
        i:nth-child(3){
            width:0.71rem;
            height:0.44rem;
            font-size:12px;
            color:#ccc;
        }
        
    }
    .tab{
        width:100%;
        height:0.44rem;
        background:#fff;
        display:flex;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        top: 0.44rem;
        span{
            font-size:14px;
            font-weight:800;
            color:#ccc;
        }
        .active{
            border-bottom:2px solid red;
            color:red;
        }
        
    }
    

`