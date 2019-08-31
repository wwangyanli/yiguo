import styled from "styled-components"
export const MInes=styled.div`
.mine{
    width: 100%;
height: 100%;
}
.top{
    width: 100%;
    height: 0.44rem;
background: #f21c1c;
display: flex;
align-items: center;
justify-content: space-between
}
.top>i{
    font-size: 18px;
    color: #ffffff;
    margin-left:10px; 
    font-weight: 900
}
.top>p{
    font-size: 16px;
    color: #ffffff;
    margin:0 10px; 
}
.between{
    width: 100%;
    height: 0.44rem;
background: #f21c1c; 
}
.name{
    width: 3.47rem;
    height: 1.79rem;
    background: #fff;
    box-shadow: 0 1px 10px 0 rgba(0,0,0,.08);
    margin:0 12px; 
    position: relative;
    top:-0.4rem;
    border-radius:10px; 
    
}
.tx{
    width: 3.47rem;
    height: 0.76rem;
  display: flex;
 
}
.tx>.tximg{
    width: 0.76rem;
    height: 0.76rem;
    border-radius:100px; 
   
}
.tx>.tximg>img{
    width: 0.76rem;
    height: 0.76rem;
    border-radius:100px; 
    border: 5px #fff solid
}
.txname{
    width: 2.5rem;
    height: 100%;
    position: relative;
    left: 1rem;
    top: -0.7rem;
}
.txname>p{
    font-size:12px; 
        margin: 2px 0 

}
.txname>h2{
    font-weight: 900;
    margin: 2px 0
}
.txname>span{
    width: 2rem;;
    display: flex;
    font-size: 12px;
    margin: 2px 0
    
}
.txname>span>h3{
    padding: 5px 0
}
.yuhe{
    width: 100%;
    height: 0.63rem;
    margin-top:15px ;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
}
.fens{
    width: 100%;
    min-height: 7.61rem;
    background: #fff
}
.fensbox{
    width: 3.45rem;
    height: 1.6rem;
    background: #fff;
    margin: 0 14px;
}
.fenstop{
    width: 100%;
    height: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: end;
}
.fenstop>h2{
    font-size: 14px;

}
.fenstop>h3{
    font-size: 12px;
    color: #ccc;
    margin-left:2.2rem 
    
}

.fenbottm{
    width: 100%;
    min-height: 0.84rem;
    background: #fff;
    display: flex;
    align-items: center;
    margin-left:5px; 
    flex-wrap: wrap;
}
.fenbottm_top{
    width: 0.81rem;
    height: 0.69rem;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:3px 0; 

}
.fenbottm_top>img{
    width: 0.32rem;
    height: 0.32rem;

}
.fenbottm_top>h2{
    font-size: 14px;
    margin: 3px 0
}
`