import React, { Component } from 'react'
import Search from '../../components/search';
import {PageBody} from "../../common/commonStyled"
import {sort_api} from "../../api/sort"
import {LeftUl ,Right} from "./styled"

export default class Sort extends Component {
    render() {
        return (
            <div>
                <Search/>
                <PageBody>
                    <LeftUl ref="sortLeft">
                        <li>进口水果</li>
                        <li>国内水果</li>
                    </LeftUl>
                    <Right>
                        <li>
                            <img src="https://img09.yiguoimg.com/e/items/2017/170612/9288708943225548_220.jpg"/>
                            <div>全部</div>
                        </li>
                    </Right>
                </PageBody>
            </div>
        )
    }
    async componentDidMount(){
        let data = await sort_api();
        console.log(data)
      
    }
}
