import React, { Component } from 'react'
import { Cont } from "./styled"
import { tuijian ,home} from '@api/home'
import {Link} from 'react-router-dom'
import Swiper from "swiper";
import {Carousel} from 'antd-mobile'
import "../../../node_modules/swiper/dist/css/swiper.min.css";
export default class Tuijian extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            bann:[],
            school:[],
            new1:[],
            new2:[],
            new3:[],
            dao:[],
            pul:[],
            imgHeight:172
        }
      
    }
    render() {
        let {list,bann,school,new1,new2,new3,dao,pul} = this.state
        return (
            <Cont>
                <div className='content'>
                   <div className='banner'>
                        
                        {/*     <img src='https://img2.ch999img.com/newstatic/1378/010b833550fc917f.jpg.webp'/> */}
                   
                        <Carousel 
                        autoplay 
                        autoplayInterval={800}
                        infinite>
                            {  bann.map((item,index)=>(
                                    
                                            <img src={item.imagePath} key={index}
                                            
                                            style={{ width: '100%', verticalAlign: 'top'   ,width:"92%",height:"1.72rem",margin:"0 auto",borderRadius: '5px'}}
                                                onLoad={() => {
                                                // fire window resize event to change height
                                                window.dispatchEvent(new Event('resize'));
                                                this.setState({ imgHeight: 'auto' });
                                                }}
                                                                        
                                            
                                            ></img>
                                      
                                )) }
                        </Carousel>  
                   </div>
                    
                    {/* 
                       <Carousel autoplay>
                           {  bann.map((item,index)=>(
                                <div className="swiper-slide" key={index}>
                                        <img src={item.imagePath}></img>
                                    </div>
                            )) }
                       </Carousel>  
                   */}
                     {/* <div className="swiper swiper-container">
                        <div className="swiper-wrapper" >
                          
                           {
                                bann.map((item,index)=>(
                                    <div className="swiper-slide" key={index}>
                                        <img src={item.imagePath}></img>
                                    </div>
                                ))
                            } 
                           
                        </div>
                        <div className="swiper-pagination swiper-pagination-white"></div>
                    </div>  */}
                    
                     <div className='zhansh'>
                        <img src='https://img2.ch999img.com/newstatic/1377/c12348e35e3868.png.webp' />
                    </div> 
                    <div className='server'>
                        <div className='fl'>
                        {
                        school.map((item,index)=>(
                            <a key={index}>
                                <img src={item.imagePath} />
                            </a>
                           
                        ))
                    }
                            
                        </div>
                    </div>
                    <div className='news'>
                    {
                        new1.map((item,index)=>(
                            <a key={index}>
                                <img src={item.imagePath} />
                            </a>
                           
                        ))
                    }
                    </div>
                    <div className='news'>
                    {
                        new2.map((item,index)=>(
                            <a key={index}>
                                <img src={item.imagePath} />
                            </a>
                           
                        ))
                    }
                    </div>
                    <div className='news'>
                    {
                        new3.map((item,index)=>(
                            <a key={index}>
                                <img src={item.imagePath} />
                            </a>
                           
                        ))
                    }
                    </div>
                    <div className='dao'>
                        <div className='daoCon'>
                           
                                {
                                    dao.map((item,index)=>(
                                        <div className='conList' key={index}>
                                             <Link to={"/detail/"+item.ppid+"/"+item.title}> 
                                                <a>
                                                    <p className='name'>{item.title}</p>
                                                    <p className='price'>￥{item.price}</p>
                                                    <p className='ms'>{item.sellingPoint}</p>
                                                    <img src={item.imagePath} />
                                                </a>
                                             </Link> 
                                        </div>
                                    ))
                                }
                            {/* </div> */}

                        </div>
                    </div>
                    <div className='tt'>为您优选</div>
                    <div className='info'>
                        <div className='infoCon'>
                        {
                                dao.map((item,index)=>(
                                    <a key={index}>
                                        <img src={item.imagePath} />
                                        <p className='name'>{item.title}</p>
                                        <p className='ms'>{item.sellingPoint}</p>
                                        <p className='price'>￥{item.price}</p>

                                    </a>
                                ))
                            }
                           
                            
                        </div>

                    </div>

                    <div className='more'>
                        <p className='lx'>发现好货</p>
                        <div className='moreCon'>
                        {
                            pul.map((item,index)=>(
                                // <Link to={"/detail/"+item.ppid}>
                                <div className='ccc' key={index} onClick={this.handleToDet.bind(this,item.ppid)}>
                                    <img src={item.imagePath} />
                                    <img src='https://img2.ch999img.com//pic/edt/ProEva/20170908/20170908104114_2659.png' className='hot' />
                                    <div className='name'>
                                        <span className='nn'>好看又能打</span>
                                    </div>
                                    <div className='ss'>
                                        <p className='nam'>{item.name}</p>
                                        <p className='price'>￥{item.price}</p>
                                    </div>
                                </div>
                                // </Link>
                            ))
                             
                        }
                          
                  
                        </div>
                    </div>
                    <div className='log'>
                        <div className='logCon'>
                            <p>登录尊享极致购物体验</p>
                            <p>立即登录</p>
                        </div>
                    </div>
                </div>

            </Cont>

        )

    }
    async componentDidMount() {
        
        
        let data = await tuijian();
        let data1 = await home()
        let pul = data1.data.product.list
        // console.log(data1.data.product.list)
        let list = data.data.container.floor
        let bann = data.data.container.floor[0].content
        let school = data.data.container.floor[2].content
        let new1 = data.data.container.floor[5].content
        let new2 = data.data.container.floor[6].content
        let new3 = data.data.container.floor[7].content
        let dao = data.data.container.floor[26].content
        this.setState({
            list,
            bann,
            school,
            new1,
            new2,
            new3,
            dao,
            pul,
            imgHeight: 'auto' 
          
           
        })
    
       /*   new Swiper('.swiper-container', { 
                 
            autoplay: {
                delay: 800
            },
            loop: true,
            pagination: {
                el: ".swiper-pagination"
            },
           
        })    */
 
    
    }
    handleToDet(ppid){
       this.props.history.push({pathname:"/detail/"+ppid})
    }
   
}
