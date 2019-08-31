import styled from "styled-components"
export const RegisterWarpper=styled.div`
width: 100%;
height: 0.44rem;
 background: #fff;

.loginhed{
  width: 100%;
height: 0.44rem;
display: flex;
    justify-content:flex-start;
    align-items: center;
    border-bottom: 1px solid #ccc
}
    
 h3{
    font-size: 16px;
    padding-left:1.5rem;
   

}

i{
  padding-left:0.1rem;
}
.dengl{
  width:100%;
  height: 4.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dengl>input{
  width:3rem;
  height:0.3rem;
  border: 1px solid #ccc
  margin-top: 0.6rem;
}
.dengl>button{
  width:2rem;
  height:0.4rem;
  background: #f21c1c;
  color: #fff
  border: 1px solid #ccc;
  margin-top: 0.5rem;

}
.dengl>p{
  margin-top: 0.5rem;
  font-size: 12px;
color: #ccc
}
`