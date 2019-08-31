import styled from "styled-components"

export const SearchWarpper = styled.div`
    width:100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 0.4rem;
    width: 100%;
    background: #fff;
    padding: .07rem .09rem;
    box-sizing: border-box;
    z-index: 102;
    display:flex;
    justify-content: space-between
    align-items: center
    position: relative;
    span{
        position:absolute;
        top:0.13rem;
        left:0.17rem;
        z-index:20;
    }
    input{
        position: relative;
        height: .27rem;
        width: 3.1rem;
        background: #f4f4f4;
        border-radius: 20px;
        padding: 0 .21rem 0 0.31rem;
        border:0;
    }
    div{
        height: 0.4rem;
        width: 0.48rem;
        text-align: center;
        font-size: .13rem;
        color: #11B57C;
        display:flex;
        justify-content: center;
        align-items: center
    }
`