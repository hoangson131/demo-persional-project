import classNames from "classnames/bind";
import styles from './Action.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleChevronLeft, faTruck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)
function Action() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('item')}>
                <span className={cx('icon')}>
                    <FontAwesomeIcon icon={faCircleChevronLeft}/>
                </span>
                <span className={cx('title')}>7 Ngày Miễn Phí Trả Hàng</span>
            </div>
            <div className={cx('item')}>
                <span className={cx('icon')}>
                    <FontAwesomeIcon icon={faCircleCheck}/>
                </span>
                <span className={cx('title')}>Hàng Chính Hãng 100%</span>
            </div>
            <div className={cx('item')}>
                <span className={cx('icon')}>
                    <FontAwesomeIcon icon={faTruck}/>
                </span>
                <span className={cx('title')}>Miễn Phí Vận Chuyển</span>
            </div>
        </div>
     );
}

export default Action