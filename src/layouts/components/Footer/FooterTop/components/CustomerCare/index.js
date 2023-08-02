import { dataBase } from "~/database";
import classNames from "classnames/bind";
import styles from '../../FooterTop.module.scss'

const cx = classNames.bind(styles)
function CustomerCare() {
    return ( 
        <div className={cx('box__items')}>
            <span className={cx('title')}>CHĂM SÓC KHÁCH HÀNG</span>
            <ul className={cx('list__items')}>
                {dataBase.customerCare.map((item,index) => {
                    return <li className={cx('item')} key={index}>{item}</li>
                })}
            </ul>
        </div>
     );
}

export default CustomerCare;