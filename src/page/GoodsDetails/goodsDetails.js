
import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import './index.scss';
import brandData from 'mock/brandDetail.json'
import detailData from 'mock/goodsDetail.json'
import PriceBox from './components/priceBox';

class GoodsDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            detailData: detailData,
            brandData: brandData
        }
    }

    render(){
        const {detailData,brandData} = this.state;
        console.log('detailData',detailData,brandData)
        const { pics,name,description,brand,details} = brandData;
        const {salesPrice,warehouseAlias,limitNumber,delivery} = detailData;
        return (
            <div className="details-warp">
                <div className="details-carousel" >
                    <div className="slid-content">  
                        <div className="detail-header">
                            {/* <Carousel className="img-carousel" autoplay >
                                { pics.map(item=><img src={item} />)}
                            </Carousel> */}
                            <img src={pics[0]} alt=""/>
                            <div className="detail-info">
                                <div className="price-content">  <i>￥</i>{salesPrice.value}</div>
                                <h3> <span>{warehouseAlias}</span> {name}</h3>
                                <p className="desc">{description}</p>
                                <p className="country"><img src={brand.country.log} alt=""/> {brand.country.name}</p>
                            </div>
                        </div>
                        <div className="detail-tips-list">
                            <div className="tips-buy"><span>提货:</span> <p dangerouslySetInnerHTML={{__html:delivery.declare}}></p> <Icon type='right' /> </div>
                            <div className="tips-mf"><span>说明:</span> <p>商品限购{limitNumber}件</p> <Icon type='right' /> </div>
                        </div>
                        <div className="detail-content" dangerouslySetInnerHTML={{__html:details}} /> 
                    </div >
                </div>

               <PriceBox />
            </div>
        )
    }
} 


export default GoodsDetail

 