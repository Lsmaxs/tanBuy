
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const useGoodIstem = (props) => {
    const goodsItem = props.goods; 
    const lsData = props.lsData;
    
    const handleClick = ()=> {
        console.log('lsData',lsData)
        !!lsData && (window.localStorage.setItem('lsParams',lsData))
    }
    
    return (
        <li className={styles['goods-item']} key={goodsItem.goodsId} onClick={()=>{
            handleClick();
        }}>
            <Link
                to={`goodsDetails?goodsId=${goodsItem.skuId}`}
            >
                <div className={styles['goods-img']}>
                    <img src={goodsItem.imgUrl} width="100%" alt="" />
                { goodsItem.stockNum < 1 &&  <span className={styles["stockend"]}>售罄</span> } 
            </div>
            <div className={styles['goods-bottom']}>
                <p className={styles["goods-des"]}>
                    {goodsItem.showTitle}
                </p>
                <div className={styles["goods-price"]}>
                    <ins className={styles["current-price"]}>¥<span>{parseFloat(goodsItem.activityPrice).toFixed(2)}</span></ins>
                    <del className={styles["original-price"]}>¥<span>{parseFloat(goodsItem.salePrice).toFixed(2)}</span></del>
                </div>
            </div>
            </Link>
        </li>
    )
}



export default useGoodIstem