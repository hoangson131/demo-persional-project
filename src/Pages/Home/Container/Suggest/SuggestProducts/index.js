
import classNames from "classnames/bind";

import styles from "./SuggestProducts.module.scss";
import { selectorProducts } from "~/stores/cart/selectors";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function SuggestProducts({voucher = false}) {
  const productsShow = useSelector(selectorProducts)
  console.log(productsShow[0].imgUrl[0]);
 

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
                      {product.like > 1000 && (
                        <div className={cx('isProduct--logo')}>
                        <div className={cx('wrapper__isProduct--text')}>
                          <span className={cx('isProduct--text')}>Yêu thích{product.like > 2000 && <span>+</span>}</span>
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
                        <div className={cx('price')}><span className={cx('vnd')}>₫</span>{product.models[0].price.toFixed(3)}</div>
                        <div className={cx('sold')}>Đã bán {product.sold}</div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className={cx('search--similar')}>Tìm sản phẩm tương tự</div>
              </li>
            )
          })}
          <li className={cx('product__item')}>
            <div className={cx('product')} >
              <div className={cx('picture')}>
                <img className={cx('image')} src="https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lihm44s2rh1o12_tn" alt="test"/>
              </div>
              <div className={cx('content')} >
                <div className={cx('content--top')} >
                  <div className={cx('description')} >[LOẠI TỐT] Bộ dụng cụ mở bu lông ốc vít, bộ dụng cụ sửa chữa ô tô xe máy, bộ dụng cụ đa năng 46 chi tiết cầm tay cao cấp</div>
                  {voucher && <div className={cx('voucher')}>Voucher</div>}
                </div>
                <div className={cx('content--bottom')} >
                  <div className={cx('price')}><span className={cx('vnd')}>₫</span>66.000</div>
                  <div className={cx('sold')}>Đã bán</div>
                </div>
              </div>
            </div>
            <div className={cx('search--similar')}>Tìm sản phẩm tương tự</div>
          </li>
          <li className={cx('product__item')}>
            <div className={cx('product')} >
              <div className={cx('picture')}>
                <img className={cx('image')} src="https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lihm44s2rh1o12_tn" alt="test"/>
              </div>
              <div className={cx('content')} >
                <div className={cx('content--top')} >
                  <div className={cx('description')} >Description</div>
                  <div className={cx('voucher')} >Voucher</div>
                </div>
                <div className={cx('content--bottom')} >
                  <div className={cx('price')}>Price</div>
                  <div className={cx('sold')}>Sold</div>
                </div>
              </div>
            </div>
            <div className={cx('search--similar')}>Tìm sản phẩm tương tự</div>
          </li>
          <li className={cx('product__item')}>
            <div className={cx('product')} >
              <div className={cx('picture')}>
                <img className={cx('image')} src="https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lihm44s2rh1o12_tn" alt="test"/>
              </div>
              <div className={cx('content')} >
                <div className={cx('content--top')} >
                  <div className={cx('description')} >Description</div>
                  <div className={cx('voucher')} >Voucher</div>
                </div>
                <div className={cx('content--bottom')} >
                  <div className={cx('price')}>Price</div>
                  <div className={cx('sold')}>Sold</div>
                </div>
              </div>
            </div>
            {/* <div></div> */}
          </li>
          <li className={cx('product__item')}>
            <div className={cx('product')} >
              <div className={cx('picture')}>
                <img className={cx('image')} src="https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lihm44s2rh1o12_tn" alt="test"/>
              </div>
              <div className={cx('content')} >
                <div className={cx('content--top')} >
                  <div className={cx('description')} >Description</div>
                  <div className={cx('voucher')} >Voucher</div>
                </div>
                <div className={cx('content--bottom')} >
                  <div className={cx('price')}>Price</div>
                  <div className={cx('sold')}>Sold</div>
                </div>
              </div>
            </div>
            {/* <div></div> */}
          </li>
          <li className={cx('product__item')}>
            <div className={cx('product')} >
              <div className={cx('picture')}>
                <img className={cx('image')} src="https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lihm44s2rh1o12_tn" alt="test"/>
              </div>
              <div className={cx('content')} >
                <div className={cx('content--top')} >
                  <div className={cx('description')} >Description</div>
                  <div className={cx('voucher')} >Voucher</div>
                </div>
                <div className={cx('content--bottom')} >
                  <div className={cx('price')}>Price</div>
                  <div className={cx('sold')}>Sold</div>
                </div>
              </div>
            </div>
            {/* <div></div> */}
          </li>
          <li className={cx('product__item')}>
            <div className={cx('product')} >
              <div className={cx('picture')}>
                <img className={cx('image')} src="https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lihm44s2rh1o12_tn" alt="test"/>
              </div>
              <div className={cx('content')} >
                <div className={cx('content--top')} >
                  <div className={cx('description')} >Description</div>
                  <div className={cx('voucher')} >Voucher</div>
                </div>
                <div className={cx('content--bottom')} >
                  <div className={cx('price')}>Price</div>
                  <div className={cx('sold')}>Sold</div>
                </div>
              </div>
            </div>
            {/* <div></div> */}
          </li>
          <li className={cx('product__item')}>
            <div className={cx('product')} >
              <div className={cx('picture')}>
                <img className={cx('image')} src="https://down-vn.img.susercontent.com/file/5a18f18bad1e2e74774e5305708f70bf_tn" alt="test"/>
              </div>
              <div className={cx('content')} >
                <div className={cx('content--top')} >
                  <div className={cx('description')} >Description</div>
                  <div className={cx('voucher')} >Voucher</div>
                </div>
                <div className={cx('content--bottom')} >
                  <div className={cx('price')}>Price</div>
                  <div className={cx('sold')}>Sold</div>
                </div>
              </div>
            </div>
            {/* <div></div> */}
          </li>
          <li className={cx('product__item')}>
            <div className={cx('product')} >
              <div className={cx('picture')}>
                <img className={cx('image')} src="https://down-vn.img.susercontent.com/file/5a18f18bad1e2e74774e5305708f70bf_tn" alt="test"/>
              </div>
              <div className={cx('content')} >
                <div className={cx('content--top')} >
                  <div className={cx('description')} >Description</div>
                  <div className={cx('voucher')} >Voucher</div>
                </div>
                <div className={cx('content--bottom')} >
                  <div className={cx('price')}>Price</div>
                  <div className={cx('sold')}>Sold</div>
                </div>
              </div>
            </div>
            {/* <div></div> */}
          </li>
        </ul>
      </div>
  );
}

export default SuggestProducts;
