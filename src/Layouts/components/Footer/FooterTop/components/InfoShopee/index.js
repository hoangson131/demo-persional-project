import { dataBase } from "~/database";

import classNames from "classnames/bind";
import styles from '../../FooterTop.module.scss'

const cx = classNames.bind(styles)
function InfoShopee() {
    return ( 
        <div className={cx('box__items')}>
            <span className={cx('title')}>VỀ SHOPEE</span>
            <ul className={cx('list__items')}>
                {dataBase.inforShopee.map((item, index) => {
                    return <li key={index} className={cx('item')}>{item}</li>
                })}
            </ul>
        </div>
     );
}

export default InfoShopee;