import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import { ReactComponent as SearchIcon } from 'images/common/search.svg';
import Logo from 'images/common/logo.jpg';

const ComHeader = (props) => {
    const {showHeader} = props;

    if(!showHeader){
        return null;
    }

    return (
        <div className={styles['com-header']}>
            {/* <Link to="/" ><Icon className={styles['icon']} type='goback' /></Link> */}
            <div><img src={Logo} alt="" /></div>
            <Link to="search"><SearchIcon className={styles['header-icon']} /></Link>
        </div>
    );
       
}


export default ComHeader

