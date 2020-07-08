import React from 'react';
import {Button} from 'antd-mobile';
import { ReactComponent as ShopIcon } from 'images/common/shopping.svg';
import { ReactComponent as LikeIcon } from 'images/common/like.svg';

const PriceBox = () =>{

    return (
        <div className="price-bottom">
            <div className="collect"><LikeIcon className='icon'/> <p>收藏</p> </div>
            <div className="shopping"><ShopIcon  className='icon'/> <p>购物袋</p> </div>
            <Button type="primary" className="submit-btn" inline>加入购物袋</Button>
        </div>
    )
}




export default PriceBox