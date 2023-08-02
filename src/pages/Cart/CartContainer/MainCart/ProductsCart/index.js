import classNames from "classnames/bind";
import styles from './ProductsCart.module.scss'

const cx = classNames.bind(styles)

function ProductCart() {
    return ( 
        <div className={cx('wrapper__product--list')}>
                <div className={cx('box--item1', 'shop--name' )}>
                    <input type="checkbox"/>
                    <div className={cx('common--text', 'name')}>Name Shop</div>
                </div>
                <div className={cx('list__product--shop')}>
                    <div className={cx('voucher__shop')}>voucher Combo</div>
                    <div className={cx('product--item')}>
                        <div className={cx('checkbox', 'box--item1')}>
                            <input type="checkbox" />
                        </div>
                        <div className={cx('common--text', 'box--item2')}>
                            <div className={cx('product--description')}>
                                <img src='https://down-vn.img.susercontent.com/file/d20dec373fa663d7507e74c078094743' className={cx('image')} alt=""/>
                                <div className={cx('content')}>
                                    <div className={cx('description--text')}>Giá đỡ điện Thoại giá đỡ ipad Giá Đỡ Điện Thoại Gấp Gọn Giá Đỡ Để Bàn Đa Năng Có Thể điều Chỉnh Cho iPhone iPad</div>
                                    <div className={cx('voucher--list')}>voucher__icon</div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('common--text', 'box--item3')}></div>
                        <div className={cx('common--text', 'box--item4')}>Đơn Giá</div>
                        <div className={cx('common--text', 'box--item5','quantity')}>
                            <div className={cx('number-input')}>
                                <button className={cx('btn')}>&#8722;</button>
                                <input type="number"  min={0}/>
                                <button className={cx('btn')}>&#43;</button>
                            </div>
                        </div>
                        <div className={cx('common--text', 'box--item6')}>
                            <span>₫</span>
                            99.000
                        </div>
                        <div className={cx('common--text', 'box--item7')}>
                            <div className={cx('operation')}>
                                <button className={cx()} >Xóa</button>
                                <button className={cx('find--product')}>
                                    <span>Tìm sản phẩm tương tự</span>
                                    <div>&#9660;</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('wrapper__voucherShop')}>
                    <div>VoucherShop</div>
                </div>
            </div>
     );
}

export default ProductCart;