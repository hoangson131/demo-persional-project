import classNames from "classnames/bind";

import styles from './Bill.module.scss'
import { IconShipping, IconShopXu } from "~/assets/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";
import { selectorCart } from "~/stores/cart/selectors";
// import { IconVoucher } from "~/assets/icon";

const cx = classNames.bind(styles)

function Bill() {
    const productsInCart = useSelector(selectorCart)

    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('voucher--outner')}>
                <div className={cx('voucher--inner')}>
                    <div className={cx('voucher--content')}>
                        <IconShipping width={25} height={20}/>
                        <div className={cx('voucher--title')}>Shopee Voucher</div>
                    </div>
                    <button className={cx('btn--voucher')}>Chọn Hoặc Nhập Mã</button>
                </div>
            </div>
            <div className={cx('coin--ouner')}>
                <div className={cx('coin--check')}><input className={cx('input--checkcoin')} type="checkbox" /></div>
                <div className={cx('coin--main')}>
                    <IconShopXu width={25} height={20}/>
                    <span className={cx('coin--text')}>Shopee Xu</span>
                    <span className={cx('coin--text')}>Bạn chưa có Shopee Xu</span>
                    <FontAwesomeIcon icon={faCircleQuestion}/>
                </div>
                <div className={cx('coin--cover')}><span>-đ 0</span></div>
            </div>
            <div className={cx('bill--total')}>
                <div className={cx('product--selector')}>
                    <div className={cx('checkbox--all')}><input className={cx('checkinput--all')} type="checkbox"/></div>
                    <button className={cx('btn__selector--all', 'text')}>Chọn tất cả ({productsInCart.length})</button>
                    <button className={cx('text', 'btn')}>Xóa</button>
                    <button className={cx('text', 'btn', 'save--favorite')}>Lưu vào mục Đã thích</button>
                </div>
                <div className={cx('total--products')}>
                    <div className={cx('total--ounner')}>
                        <div className={cx('total--inner')}>
                            <div className={cx('total--content')}>
                                <div className={cx('total--title')}>Tổng thanh toán ({0} Sản phẩm):</div>
                                <div className={cx('total--number')}><span>₫</span>{0}</div>
                            </div>
                            {/* <div className={cx('save--content')}>
                                <div className={cx('save--text')}>Tiết kiệm</div>
                                <div className={cx('save--number')}>₫51k</div>
                            </div> */}
                        </div>
                        <button className={cx('btn--buy')}>Mua Hàng</button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Bill;