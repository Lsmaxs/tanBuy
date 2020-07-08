import React, { Component } from 'react';
import {Icon} from 'antd-mobile';
import {Link} from 'react-router-dom';
import ComFooter from 'components/comFooter'

import './index.scss'

import tabData from 'mock/catalogsLeft.json';
import contData from 'mock/catalogsRight.json';

class Categories extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentTabId: 225510
        }
    }
    
    componentDidMount(){
        console.log('tabData',tabData);
        console.log('contData',contData);
    }

    toLink = ({categorys,keyWord}) =>{
        this.props.history.push(`/search?keyWord=${encodeURIComponent(keyWord) }&categorys=${categorys}`);
    }

    render(){
        const {currentTabId} = this.state;
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
                            tabData.map(item=>{
                                const {id,name} = item
                                return (
                                <div key={id} className={`tab-item ${id == currentTabId?'active':''}`}>{name}</div>
                                )
                            })
                        }
                        
                    </div>
                    <div className='categor-con'>
                        {contData.map(item=>{
                            const {name,categorys,subNavigations} = item;
                            return (
                                <div className="content-main" key={categorys}>
                                    <h2>{name}</h2>
                                    <ul className="content-list">
                                        { subNavigations.map(curItem=>{
                                             const {name,pic,categorys} = curItem;
                                             return (
                                                 <div className="con-item" key={categorys} onClick={()=>{
                                                    this.toLink({
                                                        categorys,
                                                        keyWord: name
                                                    })
                                                 }}>
                                                    <img src={pic} alt={name}/>
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