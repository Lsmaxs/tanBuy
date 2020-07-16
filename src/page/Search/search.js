
import React, { Component } from 'react';
import './index.scss'
import {SearchBar, Toast} from 'antd-mobile';
import { fetchGoodsList } from 'service';
import { getParams } from 'utils/getParams';
import SearchList from './listVew';

/**
 * 函数节流方法
 * @param Function fn 延时调用函数
 * @param Number delay 延迟多长时间
 * @return Function 延迟执行的方法
 */
var throttle = function (fn, delay) {
    var timer = null;

    return function (res) {
        clearTimeout(timer);
        timer = setTimeout(function() {
            fn(res);
        }, delay);
    }
};

let pageIndex = 0;

class Search extends Component {
    constructor(props){
        super(props);
        const {keyWord,categorys} = getParams();
        this.state = {
            searchResult: null,
            searchKey: localStorage.getItem('lsParams') || decodeURIComponent(keyWord)  || '',
            searchId: categorys,
        }

    }

    componentDidMount(){
        Toast.loading('搜索数据中...');
        this.initSearch();
        console.log('searchResult',this.state);
       
    }

    componentWillUnmount(){
        pageIndex = 0;
    }
    

    pageSearch = () => {
        const {searchKey} = this.state;
        console.log('page',pageIndex)
        this.handleSearch({
            keyword: searchKey,
            page: ++pageIndex,
            isConcat: true
        })
    }

    initSearch = () => {
        const {searchKey,searchId} = this.state;
        let lsParams = localStorage.getItem('lsParams');
        if (lsParams){
            this.handleSearch({
                keyword: lsParams,
                page: ++pageIndex
            })
            return;
        }
        this.handleSearch({
            categoryCode: searchId,
            keyword: searchId ? '': searchKey,
            page: ++pageIndex
        })
    }


    handleSearch = async (params={}) => {
        const { searchResult } = this.state;
        const {isConcat,keyword,categoryCode} = params;
        const result = await fetchGoodsList(params);
        const {data,success} = result;
        Toast.hide();
        if(success){
            let setData = {
                searchResult: isConcat ? searchResult.concat(data): data,
                searchKey: keyword || '',
                searchId: categoryCode || ''
            }
            if(!!keyword){
                setData.searchKey = keyword;
            }
            console.log(setData)
            this.setState(setData)
        } else {
            this.setState({
                searchResult:[],
                searchKey: keyword || '',
            })
        }
    }

    handleSubmitSearch = throttle((value) =>{
        if(!value) return ;
        console.log('handleSubmitSearch',value);
        this.handleSearch({
            keyword: value
        })
        pageIndex = 1;
    },300)

    render(){
        const { searchResult,searchKey,searchId } = this.state;
        const fetchParams = {
            keyword:searchKey,
            categoryCode: searchId
        }
        return (
            <div className="search-warp">
                <div className="search-header">
                    <SearchBar placeholder="搜索分类商品" defaultValue={searchKey} maxLength={8} onChange={this.handleSubmitSearch}/>
                </div>
                <div className='search-content'>
                    <div className="search-config">
                         <span>默认</span>
                         <span>价格</span>
                    </div>
                    <div className="search-result">
                            {
                                !!searchResult &&(
                                    <SearchList  fetchParams={
                                        fetchParams
                                    } listData={searchResult} />
                                    )   
            
                            }
                        
                    </div>
                </div>
            </div>
        )
    }
}



export default Search