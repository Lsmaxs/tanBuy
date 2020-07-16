import React, { Component } from 'react';
import {Icon, Toast} from 'antd-mobile';
import _ from 'loadsh';
import {Link} from 'react-router-dom';
import ComFooter from 'components/comFooter'

import './index.scss'

import resultData from 'mock/categorData.json';

class Categories extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentTabId: null,
            cacheData: null,
            currentData: null
        }
    }
    
    componentDidMount(){
        Toast.loading('加载中...',0.5);
        console.log('resultData',resultData);
        this.initCateGoriesData();
    }

    initCateGoriesData = () =>{
        const {currentTabId} = this.state;
        if(!resultData){
            Toast.error('获取分类数据失败');
            return false
        }
        const {data:{list}} = resultData;
        const curId = currentTabId?currentTabId:list[0]['id'];
       
        this.setState({
            cacheData: list,
            currentTabId: curId,
            currentData: this.getCurrentData(list,['id',curId])
        })
    }

    checkTab = (curId) =>{
        const {cacheData} = this.state;
        this.setState({
            currentTabId: curId,
            currentData: this.getCurrentData(cacheData,['id',curId])
        })
    }

    getCurrentData(data,filter){
        return data[_.findIndex(data,filter)] 
    }
    

    toLink = ({id,keyWord}) =>{
        this.props.history.push(`/search?keyWord=${encodeURIComponent(keyWord) }&categorys=${id}`);
    }

    render(){
        const {currentTabId,currentData,cacheData} = this.state;
        console.log('currentData:', currentData, cacheData);
        if(!cacheData){
            return null;
        }
        return (
            <div className='categor-warp'>
                <div className="categor-header border-bottom">
                    <Link to='search'>
                    <div className='inner' ><Icon type='search' style={{"marginRight":'10px'}} />  搜索商品 </div>
                    </Link>
                </div>
                <div className='categor-main'>
                    <div className="categor-tab">
                        {
                            cacheData.map(item=>{
                                const {id,name} = item
                                return (
                                <div key={id} className={`tab-item ${id == currentTabId?'active':''}`} onClick={()=>{
                                    this.checkTab(id)
                                }}>{name}</div>
                                )
                            })
                        }
                        
                    </div>
                    <div className='categor-con'>
                        {currentData.childList.map(item=>{
                            const {name,id,childList} = item;
                            return (
                                <div className="content-main" key={id}>
                                    <h2>{name}</h2>
                                    <ul className="content-list">
                                        { childList.map(curItem=>{
                                             const {name,phUrl,id} = curItem;
                                             return (
                                                 <div className="con-item" key={phUrl} onClick={()=>{
                                                    this.toLink({
                                                        id,
                                                        keyWord: name
                                                    })
                                                 }}>
                                                    <img src={phUrl} alt={name}/>
                                                    <p>{name}</p>
                                                 </div>
                                             )
                                        })}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <ComFooter showFooter curClass="activeCategories"/>
            </div>
        )
    }
}


export default Categories;