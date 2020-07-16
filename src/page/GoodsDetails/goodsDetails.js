
import React, { Component } from 'react';
import { Toast } from 'antd-mobile';
import './index.scss';
import brandData from 'mock/brandDetail.json'
import PriceBox from './components/priceBox';
import { getParams } from 'utils/getParams';
import { fetchGoodsDetail } from 'service';

class GoodsDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            detailData: null,
            brandData: brandData,
            showModule:false,
            moduleData: 'null'
        }
    }

    componentDidMount(){
        Toast.loading('加载详情中...');
        this.initData();
    }

    initData = async () =>{
        const { goodsId } = getParams();
        const result = await fetchGoodsDetail({
            skuId: goodsId
        });
        const {success,data} = result;
        console.log('data',result)
        if(success){
            Toast.hide();
            this.setState({
                detailData: data
            })
        }
    }

    handlePopup = (type) =>{
        
        const moduleData = type === 'buy'? type: '111'
        this.setState({
            showModule: true,
            moduleData
        })
    }

    render(){
        const {detailData,brandData} = this.state;
        console.log('detailData',detailData,brandData)
        if(!detailData){
            return null;
        }
        const { description,warehouseAlias,delivery} = brandData;
        const { showTitle,imgUrl,salePrice,activityPrice,stockNum,detailHtml} = detailData;
        return (
            <div className="details-warp">
                <div className="details-carousel" >
                    <div className="slid-content">  
                        <div className="detail-header">
                            {/* <Carousel className="img-carousel" autoplay >
                                { pics.map(item=><img src={item} />)}
                            </Carousel> */}
                            <img src={imgUrl} alt=""/>
                            <div className="detail-info">
                            <div className="price-content">  <i>￥</i>{activityPrice}  <span>￥{salePrice}</span></div>
                                <h3> <span>{warehouseAlias}</span> {showTitle}</h3>
                                <p className="desc">{description}</p>
                                {/* <p className="country"><img src={brand.country.log} alt=""/> {brand.country.name}</p> */}
                            </div>
                        </div>
                        <div className="detail-tips-list">
                            <div className="tips-buy" onClick={()=>{this.handlePopup('buy')}}><span>提货:</span> <p dangerouslySetInnerHTML={{__html:delivery.declare}}></p> </div>
                            <div className="tips-mf" onClick={()=>{this.handlePopup('info')}}><span>说明:</span> <p>{ stockNum >0 ? `商品库存剩余${stockNum}件`:'商品售罄,无库存' }</p>  </div>
                        </div>
                        <div className="detail-content" dangerouslySetInnerHTML={{__html:detailHtml}} /> 
                    </div >
                </div>
               <PriceBox />

            </div>
        )
    }
} 


export default GoodsDetail

 