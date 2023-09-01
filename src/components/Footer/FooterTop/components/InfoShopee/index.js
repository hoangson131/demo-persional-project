
import classNames from "classnames/bind";
import styles from '../../FooterTop.module.scss'
import { useContext } from "react";
import { DataContext } from "~/DataProvider/dataProvider";

const cx = classNames.bind(styles)

function InfoShopee() {
    const data = useContext(DataContext)

    
    return ( 
        <div className={cx('box__items')}>
            <span className={cx('title')}>VỀ SHOPEE</span>
            <ul className={cx('list__items')}>
                {data && data.inforShopee.map((item, index) => {
                    return <li key={index} className={cx('item')}>{item}</li>
                })}
            </ul>
        </div>
     );
}

export default InfoShopee;