import classNames from "classnames/bind";

import styles from './Bill.module.scss'
// import { IconVoucher } from "~/assets/icon";

const cx = classNames.bind(styles)

function Bill() {
    return ( 
        <div >
            <div>
                <div>
                    {/* <div><IconVoucher/></div> */}
                    <div>Shopee Voucher</div>
                </div>
                <div>Chọn Hoặc Nhập Mã</div>
            </div>
            <div>
                <div></div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div></div>
            </div>
            <div>
                <div>
                    <input type="checkbox"/>
                    <div>Chọn tất cả ({})</div>
                    <button>Xóa</button>
                    <button>Lưu vào mục Đã thích</button>
                </div>
                <div>
                    <div>
                        <div>
                            <div>Tổng thanh toán ({} Sản phẩm):</div>
                            <span>₫{0}</span>
                        </div>
                        <div>
                            <div>Tiết kiệm</div>
                            <div>₫51k</div>
                        </div>
                    </div>
                    <button>Mua Hàng</button>
                </div>
            </div>
        </div>
     );
}

export default Bill;