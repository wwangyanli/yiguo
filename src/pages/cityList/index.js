import React, { Component } from 'react'
import {CityList} from './styled'
export default class cityList extends Component {
    render() {
        return (
            <CityList>
                <div className="city_body" >

                 {/*   热门城市 */}
                    <div className="hot_city">
                        <div className="hot_title">热门城市</div>
                        <div className="hot_city_list">
                            <div className="hot_city_name">北京</div>
                            <div className="hot_city_name">北京</div>
                            <div className="hot_city_name">北京</div>
                            <div className="hot_city_name">北京</div>
                            <div className="hot_city_name">北京</div>
                        </div>
                    </div>
                 {/*   城市列表 */}
                    <div className="city_list">
                        <div className="city_list_item" >
                            <div className="city_title_letter">A</div>
                            <div className="city_list_name">
                                <div className="city_list_name_item">北京</div>
                                <div className="city_list_name_item">北京</div>
                                <div className="city_list_name_item">北京</div>
                                
                            </div>
                        </div>

                        <div className="city_list_item" >
                            <div className="city_title_letter">A</div>
                            <div className="city_list_name">
                                <div className="city_list_name_item">北京</div>
                                <div className="city_list_name_item">北京</div>
                                <div className="city_list_name_item">北京</div>
                                
                            </div>
                        </div>
                        <div className="city_list_item" >
                            <div className="city_title_letter">A</div>
                            <div className="city_list_name">
                                <div className="city_list_name_item">北京</div>
                                <div className="city_list_name_item">北京</div>
                                <div className="city_list_name_item">北京</div>
                                
                            </div>
                        </div>
                        <div className="city_list_item" >
                            <div className="city_title_letter">A</div>
                            <div className="city_list_name">
                                <div className="city_list_name_item">北京</div>
                                <div className="city_list_name_item">北京</div>
                                <div className="city_list_name_item">北京</div>
                                
                            </div>
                        </div>

                    </div >
   
                 城市列表下标
                    <div className="city_list_index">
                        <div className="index_item">A</div>
                        
                     </div >
                 </div >
            </CityList >
        )
    }
}
