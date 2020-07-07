import React, { Component } from 'react';

import ComFooter from 'components/comFooter'
import ComHeader from 'components/comHeader'

import Slide from './components/carousel';
import Purchase from './components/purchase';

import './index.scss'
// import LazyImg from 'utils/lazyImg';


class Index extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){

        // new LazyImg();
    }

    render(){

        return (
            <div className='main-warp'>
                <ComHeader showHeader />
                <Slide />
                <Purchase />
                <ComFooter showFooter curClass="activeIndex"/>
            </div>
        )
    }
}


export default Index
