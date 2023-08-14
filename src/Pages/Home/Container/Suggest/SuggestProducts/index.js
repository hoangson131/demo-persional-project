
import classNames from "classnames/bind";

import styles from "./SuggestProducts.module.scss";
import { selectorProducts } from "~/stores/cart/selectors";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function SuggestProducts({voucher = false}) {
  const productsShow = useSelector(selectorProducts)
  
  const coverAmount = (number) => {
    return new Intl.NumberFormat("de-DE").format(number)
  }
 

  return (
      <div className={cx('wrapper')}>
        <ul className={cx('products__list')}>
          {productsShow.map((product) => {
            return (
              <li className={cx('product__item')} key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <div className={cx('product')} >
                    <div className={cx('picture')}>
                      <img className={cx('image')} src={product.imgUrl[0]} alt={product.id}/>
                      {product.like > 300 && (
                      <div className={cx('isProduct--logo')}>
                        <div className={cx('wrapper__isProduct--text')}>
                          <span className={cx('isProduct--text')}>Yêu thích{product.like > 1000 && <span>+</span>}</span>
                        </div>
                      </div>
                      )}
                    </div>
                    <div className={cx('content')} >
                      <div className={cx('content--top')} >
                        <div className={cx('description')} >{product.description}</div>
                        {voucher && <div className={cx('voucher')}>Voucher</div>}
                      </div>
                      <div className={cx('content--bottom')} >
                        <div className={cx('price')}><span className={cx('vnd')}>₫</span>{coverAmount(product.models[0].price)}</div>
                        <div className={cx('sold')}>Đã bán {product.sold}</div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className={cx('search--similar')}>Tìm sản phẩm tương tự</div>
              </li>
            )
          })}
        </ul>
      </div>
  );
}

export default SuggestProducts;
