
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const GoodIstem = (props) => {
    const goodsItem = props.goods; 
    return (
        <li className={styles['goods-item']} key={goodsItem.goodsId}>
            <Link
                to={`goodsDetails?goodsId=${goodsItem.goodsId}`}
            >
                <div className={styles['goods-img']}>
                    <img src={goodsItem.imgUrl} width="100%" alt="" />
                </div>
                <p className={styles["goods-des"]}>
                    {goodsItem.goodsName}
                </p>
                <div className={styles["goods-price"]}>
                    <ins className={styles["current-price"]}>¥<span>{parseFloat(goodsItem.mallPrice).toFixed(2)}</span></ins>
                    <del className={styles["original-price"]}>¥<span>{parseFloat(goodsItem.marketPrice).toFixed(2)}</span></del>
                </div>
            </Link>
        </li>
    )
}



export default GoodIstem