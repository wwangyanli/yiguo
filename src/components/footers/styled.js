import styled from "styled-components"
export const FooterWarpper=styled.div`

    width: 100%;
    height: 0.5rem;
    background:#ffff;
    position: fixed;
    bottom: 0px;



.totals{
    width: 3rem;
    height: 0.5rem;
    position: fixed;
    bottom: 0px;
    left:1.8rem;
    justify-content: space-between;
    align-items: center
}
 .totals>h3{
     font-size: 14px
 }
 .totals>h3>span{
    font-size: 14px;
    color: #f21c1c
}
.totals>p{
    font-size: 12px;
    color: #ccc;
    margin-left:32px; 
}
.totals>button{
    width: 1rem;
    height: 0.5rem;
    position: fixed;
    bottom: 0px;
    left: 2.8rem;
    background: #f21c1c;
    color: #fff;
    border: none;
}
.totals>.btn{
    width: 1rem;
    height: 0.5rem;
    position: fixed;
    bottom: 0px;
    left: 1.8rem;
    background: #fff;
    color: #000;
    border: none;
   

    z-index: 10000
}
.let{
    width:1.65rem;
    height: 0.5rem;
    display: flex;
 
}
.let1{
    width:0.55rem;
    height: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: column;

}
.let1>img{
    width:0.28rem;
    height: 0.28rem;
}
.let1>p{
    font-size: 12px
}
`