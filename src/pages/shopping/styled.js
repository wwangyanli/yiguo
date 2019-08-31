import styled from "styled-components"
import bj from "../../img/1.png"
export const ShopWarpper=styled.div`
.heander{
    width: 100%;
   height: 0.44rem;
    background: #f21c1c;
    display: flex;
    justify-content:center;
    align-items: center;
    
  

}
.heander>h2{
    font-size: 16px;
    color: #fff;


}
.heander>p{
    font-size: 12px;
    color: #fff;
      position: relative;
      left: 1.25rem;
  
}
.auto{
    width: 100%;
    height: 100%;
    overflow:auto;
}
.car{
    width: 100%;
    height: 1.31rem;
   background: url(${bj}) no-repeat
}

.car-a{
    width: 100%;
    height: 1.31rem;
    position: relative;

}
.car-a>span{
    font-size: 16px;
    color: #fff;
    position: absolute;
  top:40px;
    left: 10px;
}
.car-a>h2{
    font-size: 16px;
    color: #fff;
    position: absolute;
     top:60px;
    left: 10px;
}
label{
    width: 0.1rem;
    height: 0.1rem;
    padding-right:30px; 
}
.check{
    position: relative;
   top: -0.5rem;
   left:-1.53rem ;
   
}
.goods{
    width: 3.47rem;
    display: flex;
    height: 1.22rem;
    margin-left:0.15rem; 
    margin-bottom:0.1rem; 
    align-items: center;
    background: #ccc;
    position: relative;
    top: -55px;
    border-radius: 0.05rem ;
    flex-direction: column

}
.centen{
    width: 2.97rem;
    height: 0.9rem;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
}
.centen>.Imges{
        width: 0.7rem;
        height: 0.7rem;
}
.centen>.Imges>img{
    width: 100%;
    height: 100%
}
.centeto{
    width: 2.17rem;
    height: 0.7rem;
    background: #fff;
}
.centeto>h2{
    font-size: 14px;
    color: #000000
}
.centeto>p{
    font-size: 10px;
    color: #f21c1c;
    
}
.centeto >.btn{
    display:flex;
    width: 0.3rem;
    height: 0.2rem;
    position: relative;
    left: 1rem;
    top:-0.1rem;


}
.centeto >.btn >.inp{
    width: 0.25rem;


    
}
.centeto >.btn >button{
    border-radius:8px; 
    border: none;
    background: #f21c1c;
    color: #fff
}



.optimization{
    width: 100%;
    height: 100%;
}
.bg{
    width: 100%;
    height:0.4rem;
}
.bg>img{
    width: 100%;
    height: 100%;
}

.shop{
    width: 100%;
    height: 100%;
        float: left;
    

    
}
.shopleft{
    width: 45%;
    height: 2.32rem;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    float: left;
    padding-left: 0.15rem;
    
    
  
}
.imgas,.imgas>img{
    width: 1.5rem; 
    height:1.5rem; 
}
/* .imgas>img{
    width: 1.5rem; 
    height:1.5rem;
    padding: 
} */
.shopleft>p{
    font-size: 14px;
    padding-left: 0.2rem;
    color: #f21c1c;
    
}
.botomm>span{
    font-size: 16px;
    padding-right: 0.09rem; 
    

}
.botomm{
display: flex;


}
.botomm>i{
    font-size: 25px;
}
.box{
    display: flex;
    justify-content: center
}
.box>p,.box>i{
    font-size: 20px;
    text-align: center;
    
}



/* footer */
.footer{
    width: 100%;
    height: 0.5rem;
    background:#ffff;
    position: fixed;
    top: 5.71rem;

}
.checkqbu{
    position: fixed;
    top: 5.9rem;
    left: 0.2rem;
    
}
.footer>label>h6{
    position: fixed;
    top: 5.85rem;
    left: 0.35rem
}
.total{
    width: 3rem;
    height: 100%;
    position: fixed;
    top: 5.71rem;
    left:1.8rem;
    justify-content: space-between;
    align-items: center
}
 .total>h3{
     font-size: 14px
 }
 .total>h3>span{
    font-size: 14px;
    color: #f21c1c
}
.total>p{
    font-size: 12px;
    color: #ccc;
    margin-left:32px; 
}
.total>button{
    width: 1rem;
    height: 0.5rem;
    position: fixed;
    top: 5.71rem;
    left: 2.8rem;
    background: #f21c1c;
    color: #fff;
    border: none;
}
`