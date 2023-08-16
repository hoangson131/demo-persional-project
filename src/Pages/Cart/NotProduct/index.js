import classNames from "classnames/bind";
import styles from './NotProduct.module.scss'
import { Link } from "react-router-dom";
import { config } from "~/config";

const cx = classNames.bind(styles)
function NotProduct() {
    return ( 
        <div className={cx('wrapper')} >
            <div className={cx('image')}></div>
            <div className={cx('titel')}>Giỏ hàng của bạn còn trống</div>
            <Link to={config.home} className={cx('btn')}>mua ngay</Link>
        </div>
     );
}

export default NotProduct;