import classNames from "classnames/bind";
import styles from '../../FooterTop.module.scss'
import { dataBase } from "~/database";

const cx = classNames.bind(styles)

function PayAndDriver() {
    return ( 
        <div className={cx('box__items')}>
                    <div className={cx('title')}>THANH TOÁN</div>
                    <ul className={cx('box--shared','pay__box')}>
                        {dataBase.payUrl.map((itemUrl, index) => {
                            return <li key={index} className={cx('pay__item--logo')}>
                                <img src={itemUrl} alt={index}/>
                            </li>
                        })}
                    </ul>
                    <div className={cx('title', 'driver--title')}>ĐƠN VỊ VẬN CHUYỂN</div>
                    <ul className={cx('box--shared','driver__box')}>
                        {dataBase.shippingInit.map((itemUrl, index) => {
                            return <li key={index} className={cx('driver__item--logo')}>
                                <img src={itemUrl} alt={index}/>
                            </li>
                        })}
                    </ul>
        </div>
     );
}

export default PayAndDriver;