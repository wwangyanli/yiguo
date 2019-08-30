import React, { Component } from 'react'
import { Det } from "./styled"

export default class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
           id:""
        }
        
    }
    render(){
        console.log(this.props)
        return(
            <Det>

            </Det>
        )
       
    }

}
  

