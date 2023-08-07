import classNames from "classnames/bind";
import styles from "./ProductsCart.module.scss";
import { useSelector } from "react-redux";
import { productsCartSelector, selectorCart } from "~/stores/cart/selectors";
import { useState } from "react";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function ProductCart() {
    const [amount, setAmount] = useState(1)

  const infoProductsCart = useSelector(productsCartSelector);
  console.log(infoProductsCart);

  const infoProductsShow = useSelector(selectorCart);
  console.log(infoProductsShow);
  //======Handle number================================
  const coverAmount = (number) => {
    return new Intl.NumberFormat("de-DE").format(number)
  }


  //=====Handle Onclick================================
  const handedDecrease = () => {
    if(amount - 1 > 0) {
        setAmount(amount - 1)
    }
    return
  }
  const handeIncrease = () => {
    setAmount(amount + 1)
  }

  return (
    <div className={cx("wrapper__product--list")}>
      {infoProductsCart.map((product) => {
        return (
          <div key={product.id}>
            <div className={cx("box--item1", "shop--name")}>
              <input type="checkbox" />
              <div className={cx("common--text", "name")}>{product.infoShop.shopName}</div>
            </div>
            <div className={cx("list__product--shop")}>
              <div className={cx("voucher__shop")}>voucher Combo</div>
              <div className={cx("product--item")}>
                <div className={cx("checkbox", "box--item1")}>
                  <input type="checkbox" />
                </div>
                <div className={cx("common--text", "box--item2")}>
                  <Link to={`/products/${product.id}`}>
                    <div className={cx("product--description")}>
                      <img
                        src={product.imgUrl[0]}
                        className={cx("image")}
                        alt={product.id}
                      />
                      <div className={cx("content")}>
                        <div className={cx("description--text")}>
                          {product.description}
                        </div>
                        <div className={cx("voucher--list")}>voucher__icon</div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className={cx("common--text", "box--item3")}>
                  Phân Loại Hàng
                </div>
                <div className={cx("common--text", "box--item4")}>
                  <div className={cx("price--cost")}>
                    <span>₫</span>
                    {coverAmount(product.models[0].price)}
                  </div>
                  <div className={cx("price--beforeVoucher")}>
                    <span>₫</span>
                    {coverAmount(product.models[0].price)}
                  </div>
                </div>
                <div className={cx("common--text", "box--item5", "quantity")}>
                  <div className={cx("number-input")}>
                    <button className={cx("btn")} onClick={() => handedDecrease()}>&#8722;</button>
                    <input type="text" value={amount} min={1} onChange={e => {setAmount(Number(e.target.value))}}/>
                    <button className={cx("btn")} onClick={() => handeIncrease()}>&#43;</button>
                  </div>
                </div>
                <div className={cx("common--text", "box--item6")}>
                  <span>₫</span>
                  99.000
                </div>
                <div className={cx("common--text", "box--item7")}>
                  <div className={cx("operation")}>
                    <button className={cx()}>Xóa</button>
                    <button className={cx("find--product")}>
                      <span>Tìm sản phẩm tương tự</span>
                      <div>&#9660;</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("wrapper__voucherShop")}>
              <div>VoucherShop</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductCart;
