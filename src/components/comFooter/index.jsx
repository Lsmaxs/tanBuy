import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import { ReactComponent as HomeIcon } from 'images/common/home.svg';
import { ReactComponent as UserIcon } from 'images/common/user.svg';
import { ReactComponent as MenuIcon } from 'images/common/menu.svg';

const defaultConfig = {
    activeIndex: {
        link: '/',
        name: '首页',
        icon: <HomeIcon />
    },
    activeCategories:{
        link: 'categories',
        name: '分类',
        icon: <MenuIcon />
    },
    activeUser: {
        link: 'user',
        name: '我的',
        icon: <UserIcon />
        
    }
}

 const ComFooter = (props) => {
    const {curClass,showFooter} = props;
    if(!showFooter){
        return null;
    }

    return (
        <div className={styles['com-footer']}>
            <ul>
                {
                    Object.keys(defaultConfig).map((item,index)=>{
                        let current = defaultConfig[item]
                        return (
                            <li key={`${item}-${index}`}>
                                <Link to={current['link']} className={`${styles['com-footer-item']} ${item === curClass? styles['active']:''}`}>{current['icon']} <p>{current['name']}</p></Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
      
}


export default ComFooter