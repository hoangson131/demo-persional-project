import classNames from "classnames/bind";
import styles from './BannerSub.module.scss'

const cx = classNames.bind(styles)

function BannerSub() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('box__item1')}></div>
            <div className={cx('box__item2')}></div>
            <div className={cx('box__item3')}></div>
        </div>
     );
}

export default BannerSub;