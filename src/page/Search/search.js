
import React, { Component } from 'react';
import './index.scss'
import {SearchBar} from 'antd-mobile';
import GoodsItem from 'components/goodsItem'

import searchResult from 'mock/searchResult.json'

class Search extends Component {

    componentDidMount(){
        console.log('searchResult',searchResult);
    }

    render(){

        return (
            <div className="search-warp">
                <div className="search-header">
                    <SearchBar placeholder="搜索分类商品" maxLength={8} />
                </div>
                <div className='search-content'>
                    <div className="search-config">
                         <span>默认</span>
                         <span>价格</span>
                    </div>
                    <div className="search-result">
                        <ul className="result-list">
                            {
                                searchResult.items.map(item=>{
                                    const {goodsId,name,pic,salesPrice} = item;
                                    const reSetData = {
                                        goodsId,
                                        imgUrl: pic,
                                        goodsName: name,
                                        mallPrice: salesPrice.value,
                                        marketPrice: '19.999'
                                    }
                                    return <GoodsItem className="result-goods"  goods={reSetData} />
                                })
                            }
                        </ul>

                    </div>
                </div>
            </div>
        )
    }
}



export default Search