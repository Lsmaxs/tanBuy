import React, { Component } from 'react';
import {Icon} from 'antd-mobile';
import ComFooter from 'components/comFooter'


import './index.scss'

class Categories extends Component {

    render(){
        return (
            <div className='categor-warp'>
                <div className="categor-header border-bottom">
                    <div className='inner'><Icon type='search' />123 </div>
                </div>
                <div >

                </div>
                <ComFooter showFooter curClass="activeCategories"/>
            </div>
        )
    }
}


export default Categories;