import API from './api'
import http from './http';

export const fetchGoodsList = (params={}) =>
 http.get(API.goodsList,{params})
 
export const fetchGoodsDetail = (params={}) =>
 http.get(API.goodsDetail,{params})