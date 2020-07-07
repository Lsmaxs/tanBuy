import React from 'react';
import { Icon } from 'antd-mobile';
import ComFooter from 'components/comFooter'

import userIcon from 'images/user/nickname.png';
import shopIcon from 'images/user/voiceshopping.png';
import wayIcon from 'images/user/evitarehighway.png';
import payIcon from 'images/user/evitarepayment.png';
import lockIcon from 'images/user/kidslock.png';

import './index.scss';


const defaultOrderList = [
    {
        name: '待付款',
        icon: payIcon,
        link: null
    },
    {
        name: '待发货',
        icon: wayIcon,
        link: null
    },
    {
        name: '已发货',
        icon: lockIcon,
        link: null
    },
    {
        name: '全部订单',
        icon: shopIcon,
        link: null
    },
]

const defaultEventList = [
    {
        name: '我的优惠劵',
        link: null
    },
    {
        name: '收货地址',
        link: null
    },
    {
        name: '我的客服',
        link: null
    },
]

const User = () => {

    const orderItem = (props,type='order') => {
        const current = props;
        if(type === 'event'){
            return (
                <div className="ev-list border-bottom " key={props.name}>
                    <p>{current.name}</p>
                    <Icon type='right' />
                </div>
            )
        }
        return (
            <div className="order-item" key={props.name}>
                <img src={current.icon} alt=""/>
                <p>{current.name}</p>
            </div>
        )
    }

   

    return (
        <div className='user-warp'>
            <div className='user-info'>
                <img src={userIcon} alt=""/>
                <span>点击登录</span>
            </div>
            <div className='card'>
                <header className="card-header">
                    <h3>我的订单</h3>
                    <span>查看全部订单 <Icon type='right' /> </span>
                </header>
                <div className="card-content">
                    { defaultOrderList.map(item=>orderItem(item)) }
                </div>   
            </div>
            <ul className="card">
                { defaultEventList.map(item=>orderItem(item,'event')) }
            </ul>
            <ComFooter showFooter curClass="activeUser"/>
        </div>
    )
}


export default User;