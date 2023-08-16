import classNames from 'classnames/bind'

import MainCart from "./MainCart";
import styles from './CartContainer.module.scss'
import Bill from './Bill';

const cx = classNames.bind(styles)

function CartContainer() {
    return ( 
        <div className={cx('wrapper')}>
            <div>
                <div className={cx('tip')} >
                    <div className={cx('icon')}></div>
                    <div className={cx('text')}>Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!</div>
                </div>
                <MainCart/>
            </div>
            <Bill/>
        </div>
     );
}

export default CartContainer;