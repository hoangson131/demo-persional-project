import classNames from "classnames/bind";

import styles from './Suggest.module.scss'
import SuggestProducts from "./SuggestProducts";

const cx = classNames.bind(styles)
function Suggest() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('title')}>GỢI Ý HÔM NAY</div>
            <div className={cx('wapper__products--suggest')}>
                <SuggestProducts/>
            </div>
        </div>
     );
}

export default Suggest;