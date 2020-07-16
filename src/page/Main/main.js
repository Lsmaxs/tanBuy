import React, { Component } from 'react';

import ComFooter from 'components/comFooter'
import ComHeader from 'components/comHeader'

import Slide from './components/carousel';
import Purchase from './components/purchase';

import './index.scss'
import { fetchGoodsList } from 'service';
// import { Toast } from 'antd-mobile';
// import LazyImg from 'utils/lazyImg';


class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            listData:[]
        }
    }

    componentDidMount(){
        this.getHotGoods()
        // new LazyImg();
    }

    getHotGoods = async () =>{
       const result = await fetchGoodsList({
           page:1,
           pageSize: 10
       });
       const {success,data} = result;
       console.log('result',result)
       if(success){
           this.setState({
               listData: data
           })
       }
      
    }

    render(){
        const {listData} = this.state;
        return (
            <div className='main-warp'>
                <ComHeader showHeader />
                <Slide />
                <Purchase renderData={listData}/>
                <ComFooter showFooter curClass="activeIndex"/>
            </div>
        )
    }
}


export default Index
