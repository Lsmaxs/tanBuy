import React, { useEffect, useState } from 'react';
import GoodIstem from 'components/goodsItem';


const usePurchase = ({renderData}) => {

    const [goodsListData,setGoodsListData] = useState(renderData)

    useEffect(()=>{
        setGoodsListData(renderData)
    },[renderData])
    
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