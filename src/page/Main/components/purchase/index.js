import React, { useEffect, useState } from 'react';
import GoodIstem from 'components/goodsItem';


const mockData = [
    {
        goodsId: 2769856,
        imgUrl: 'https://pic.cdfg.com.cn/assets/upload/product/45855b9fe3c9b2bec9a115fdce4a6e31_400x400.jpg',
        couponPolicyName: '测试',
        goodsName: 'SK-IIPITERA基础护肤套组,基础护肤套组基础护肤套组基础护肤套组基础护肤套组基础护肤套组基础护肤套组基础护肤套组',
        mallPrice: '9.9999',
        marketPrice: '19.999'
    },
    {
        goodsId: 27698562,
        imgUrl: 'https://pic.cdfg.com.cn/assets/upload/product/45855b9fe3c9b2bec9a115fdce4a6e31_400x400.jpg',
        couponPolicyName: '测试',
        goodsName: 'SK-IIPITERA基础护肤套组',
        mallPrice: '9.9999',
        marketPrice: '19.999'
    },
    {
        goodsId: 27698561,
        imgUrl: 'https://pic.cdfg.com.cn/assets/upload/product/45855b9fe3c9b2bec9a115fdce4a6e31_400x400.jpg',
        couponPolicyName: '测试',
        goodsName: 'SK-IIPITERA基础护肤套组',
        mallPrice: '9.9999',
        marketPrice: '19.999'
    },
    {
        goodsId: 276985,
        imgUrl: 'https://pic.cdfg.com.cn/assets/upload/product/45855b9fe3c9b2bec9a115fdce4a6e31_400x400.jpg',
        couponPolicyName: '测试',
        goodsName: 'SK-IIPITERA基础护肤套组',
        mallPrice: '9.9999',
        marketPrice: '19.999'
    },
    {
        goodsId: 276956,
        imgUrl: 'https://pic.cdfg.com.cn/assets/upload/product/45855b9fe3c9b2bec9a115fdce4a6e31_400x400.jpg',
        couponPolicyName: '测试',
        goodsName: 'SK-IIPITERA基础护肤套组',
        mallPrice: '9.9999',
        marketPrice: '19.999'
    }
]


const usePurchase = () => {

    const [goodsListData,setGoodsListData] = useState(mockData)

    useEffect(()=>{
        setTimeout(() => {
            
        }, 100);
    },[])
    
  
    return (
        <div className='purchase-warp'>
            <h3> -- 缤纷夏季欢乐购 -- </h3>
            <ul>
                {
                    goodsListData.length > 0 && goodsListData.map(item=> <GoodIstem goods={item} />)
                }
            </ul>
            <div className='separator'>
                <span className="separator-line"></span>
                <p>我要防守最后的底线</p>
                <span className="separator-line"></span>
            </div>
        </div>
      
    );
}


export default usePurchase