import styled from "styled-components";
export const Eeac = styled.div`
    .content{
        margin-top:0.84rem;
        padding-bottom:0.8rem;
        width:100%;
        .banner{
           width:100%;
           height:1.87rem;
           background:pink; 
           position:relative;
           .con{
                width:100%;
                height:1.87rem;
                position:relative;
                overflow: hidden;
                img{
                    width:100%;   
                }
                p{
                    position:absolute;
                    width:100%;
                    height:0.4rem;
                    background: rgba(0,0,0,.8);
                    bottom:0;
                    left:0;
                    display:flex;
                    align-items: center;
                    padding:0 0.1rem;
                    span{
                        font-size:12px;
                        
                        height:0.168rem;
                        line-height:0.168rem;
                        color:#fff;
                    }
                }
           }
        }
        .news{
            width:100%;
            height:0.8rem;
            display:flex;
            padding:0.1rem;
            justify-content: space-between;
            border-bottom:1px solid #ccc;
            img{
                width:0.8rem;
                height:0.6rem;
                background-size:cover;
            }
            .newsLe{
                margin-left:0.1rem;
                width:2.65rem;
                height:0.6rem;
                p{
                    font-size:14px;
                    color:#000;
                }
                .bot{
                    display:flex;
                    justify-content: space-between;
                    margin-top:0.05rem;
                    span{
                        color:#9c9c9c;
                        font-size:12px;
                    }
                }
            }

        }
    }
        
`