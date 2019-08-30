import styled from "styled-components";
export const CityList = styled.div`
.city_body {
  background: #ebebeb;
  height: 100%;
  _overflow: auto;
}

/*热门城市*/
.hot_title,
.city_title_letter {
  line-height: 0.3rem;
  padding-left: 0.26rem;
  font-size: 14px;
}

.hot_city_list,
.city_list_name {
  width: 96%;
  background: #f5f5f5;
  padding-bottom: 0.16rem;
  display: flex;
  flex-wrap: wrap;
}
.hot_city_name {
  margin-top: 0.15rem;
  margin-left: 0.13rem;
  width: 0.96rem;
  height: 0.33rem;
  background: #fff;
  text-align: center;
  line-height: 0.33rem;
  font-size: 12px;
  border: 2px solid #e6e6e6;
}

.city_list > div {
  width: 100%;
}
.city_list_name_item {
  line-height: 0.45rem;
  margin-left: 0.13rem;
  width: 100%;
  border-bottom: 2px solid #e6e6e6;
  font-size: 12px;
}

/*城市列表下标*/
.city_list_index {
position: fixed;
right: 0;
top: 1rem;
}
.city_list_index > div {
padding: 0.02rem 0.05rem;
font-size:14px;
color:#777;
}

`