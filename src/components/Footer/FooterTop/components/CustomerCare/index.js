import classNames from "classnames/bind";

import { DataContext } from "~/DataProvider/dataProvider";
import styles from '../../FooterTop.module.scss' 
import { useContext } from "react";

const cx = classNames.bind(styles)
function CustomerCare() {
    const data = useContext(DataContext)

    return ( 
        <div className={cx('box__items')}>
            <span className={cx('title')}>CHĂM SÓC KHÁCH HÀNG</span>
            <ul className={cx('list__items')}>
                {data && data.customerCare.map((item,index) => {
                    return <li className={cx('item')} key={index}>{item}</li>
                })}
            </ul>
        </div>
     );
}

export default CustomerCare;