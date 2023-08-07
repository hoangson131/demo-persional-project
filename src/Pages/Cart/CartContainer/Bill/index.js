import classNames from "classnames/bind";

import styles from './Bill.module.scss'
import { IconShipping, IconShopXu } from "~/assets/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
// import { IconVoucher } from "~/assets/icon";

const cx = classNames.bind(styles)

function Bill() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('wrapper--voucher')}>
                <div className={cx('')}>
                    <IconShipping width={25} height={20}/>
                    <div>Shopee Voucher</div>
                </div>
                <a href="/">Chọn Hoặc Nhập Mã</a>
            </div>
            <div className={cx('')}>
                <div className={cx('')}></div>
                <div className={cx('')}>
                    <IconShopXu width={25} height={20}/>
                    <div className={cx('')}>Shopee Xu</div>
                    <div className={cx('')}>Bạn chưa có Shopee Xu</div>
                    <FontAwesomeIcon icon={faCircleQuestion}/>
                </div>
                <div className={cx('')}><span>-đ 0</span></div>
            </div>
            <div className={cx('')}>
                <div className={cx('')}>
                    <input type="checkbox"/>
                    <div className={cx('')}>Chọn tất cả ({})</div>
                    <button>Xóa</button>
                    <button>Lưu vào mục Đã thích</button>
                </div>
                <div className={cx('')}>
                    <div className={cx('')}>
                        <div className={cx('')}>
                            <div className={cx('')}>
                                <div className={cx('')}>Tổng thanh toán ({} Sản phẩm):</div>
                                <span>₫{0}</span>
                            </div>
                            <div className={cx('')}>
                                <div className={cx('')}>Tiết kiệm</div>
                                <div className={cx('')}>₫51k</div>
                            </div>
                        </div>
                        <button>Mua Hàng</button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Bill;