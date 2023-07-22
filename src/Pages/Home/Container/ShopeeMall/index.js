import Action from "./Action";

import classNames from "classnames/bind";
import styles from './ShopeeMall.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function ShopeeMall() {
    return ( 
        <div className={cx('wrapper')} >
            <div className={cx('wrapper__title')} >
                <div className={cx('title__left')}>
                    <a className={cx('btn')} href='/'>SHOPEE MALL</a>
                    <Action/>
                </div>
                <div className={cx('show__all')}>
                    <span className={cx('text')}>Xem tất cả</span>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faCircleRight}/>
                    </span>
                </div>
            </div>
            <div className={cx('wrapper__content')}>
                {/* SlideMall */}

                {/* ListProduct */}  
            </div>
        </div>
     );
}

export default ShopeeMall;