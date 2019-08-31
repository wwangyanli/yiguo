import styled from "styled-components"

export const SearchWarpper = styled.div`
    width:100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 0.44rem;
    width: 100%; 
    background: #fff;
    box-sizing: border-box;
    z-index: 102;
    display:flex;
    justify-content: space-between
    align-items: center
    position: relative;
    border-bottom:0.01rem solid #eee;
    .left{
        font-size:0.18rem;
        width:0.44rem;
        height:100%;
        display:flex;
        justify-content: center;
        align-items: center
    }
    span{
        position:absolute;
        top:0.15rem;
        left:0.5rem;
        z-index:20;
    }
    input{
        position: relative;
        height: .3rem;
        padding:0 0.1rem ;
        padding-left:0.26rem;
        width:2.87rem;
        background: #f4f4f4;
        border-radius: 20px;
        border:0;
    }
    .right{
        width:0.44rem;
        height:100%
        text-align: center;
        font-size: .15rem;
        color: #000;
        display:flex;
        justify-content: center;
        align-items: center
    }
`
