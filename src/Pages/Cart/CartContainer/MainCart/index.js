import classNames from "classnames/bind";
import styles from './MainCart.module.scss'
import ProductCart from "./ProductsCart";

const cx = classNames.bind(styles)

function MainCart() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('wrapper__title')}>
                <div className={cx('checkbox', 'flex__box1')}>
                    <input type="checkbox" onChange={(e) => console.log(e.target.value)}/>
                </div>
                <div className={cx('text', 'flex__box2')}>Sản Phẩm</div>
                <div className={cx('text', 'flex__box3')}>Đơn Giá</div>
                <div className={cx('text', 'flex__box4')}>Số Lượng</div>
                <div className={cx('text', 'flex__box5')}>Số Tiền</div>
                <div className={cx('text', 'flex__box6')}>Thao Tác</div>
            </div>
            <ProductCart/>
        </div>
     );
}

export default MainCart;