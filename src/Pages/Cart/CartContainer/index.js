import classNames from 'classnames/bind'

import MainCart from "./MainCart";
import styles from './CartContainer.module.scss'
import { IconShipping } from '~/assets/icon';
import Bill from './Bill';

const cx = classNames.bind(styles)

function CartContainer() {
    return ( 
        <div className={cx('')}>
            <div className={cx('tip')} >
                <span><IconShipping/></span>
                <div className={cx('text')}>Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!</div>
            </div>
            <div className={cx('')}>
                <MainCart/>
            </div>
            <div className={cx('')}>
                {/* <Bill/> */}
            </div>
        </div>
     );
}

export default CartContainer;