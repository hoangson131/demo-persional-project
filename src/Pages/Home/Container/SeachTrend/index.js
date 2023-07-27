import classNames from "classnames/bind";

import styles from './SeachTrend.module.scss'
import Button from "~/components/Button";

const cx = classNames.bind(styles)

function SeachTrend() {
    return ( 
        <div className={cx('wrapper')} >
            <div className={cx('title__wrapper')} >
                <div className={cx('title')}>TÌM KIẾM HÀNG ĐẦU</div>
                <div className={cx('viewAll--text')} >Xem Tất Cả<span className={cx('icon')}>&#10095;</span></div>
            </div>
            <div className={cx('prodTrend--wrapper')} >
                <div className={cx('prodTrend--list')} >
                    <ul className={cx('products__list')}>
                        <li className={cx('item--products')}>
                            <div className={cx('item')}>
                                <div className={cx('banner')} >
                                    <div className={cx('logo--top')}></div>
                                    <div>
                                        <img className={cx('imgBackgr')} src="https://down-vn.img.susercontent.com/file/c64ddf57f14037d07edc37f88c364641" alt="ts" />
                                    </div>
                                    <div className={cx('SalesPerMonth')} >Bán 7k+ / tháng</div>
                                </div>
                                <div className={cx('name')} >Ghế Chơi Game</div>
                            </div>
                        </li>
                        <li className={cx('item--products')}>
                            <div className={cx('item')}>
                                <div className={cx('banner')} >
                                    <div className={cx('logo--top')}></div>
                                    <div>
                                        <img className={cx('imgBackgr')} src="	https://down-vn.img.susercontent.com/file/ca48e7b657a4a0f0507df8c3307de033" alt="ts" />
                                    </div>
                                    <div className={cx('SalesPerMonth')} >Bán 7k+ / tháng</div>
                                </div>
                                <div className={cx('name')} >Ghế Chơi Game</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <Button className={cx('btn', 'prev')}>&#10094;</Button>
                <Button className={cx('btn', 'next')}>&#10095;</Button>
            </div>
        </div>
     );
}

export default SeachTrend;