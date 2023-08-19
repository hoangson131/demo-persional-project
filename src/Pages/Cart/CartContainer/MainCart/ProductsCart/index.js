import classNames from "classnames/bind";
import styles from "./ProductsCart.module.scss";
import { productsCartSelector, selectorCart } from "~/stores/cart/selectors";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decreaseProduct, increaseProduct, removeProduct, toggleCheckedProduct, updateProduct } from "~/stores/cart/actions";

const cx = classNames.bind(styles);

function ProductCart() {
  const dispatch = useDispatch()
  const infoProductSelector = useSelector(selectorCart);
  
  const infoProductsCart = useSelector(productsCartSelector);



  //======Handle number================================
  const coverAmount = (number) => {
    return new Intl.NumberFormat("de-DE").format(number)
  }

  //=====Handle Onclick================================
  const handedDecrease = (id) => {
    dispatch(decreaseProduct({id}))
    // if(amount - 1 > 0) {
    //   setAmount(amount - 1)
    //   dispatch(updateProduct({id, amount}))
    // }
    // return
  }
  const handeIncrease = (id) => {
    // setAmount(amount + 1)
    dispatch(increaseProduct({id}))

  }
  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id))
  }

  const filterValueofId = (id) => {
    let productId = [id]
    return infoProductSelector.filter(prod => productId.includes(prod.idProduct)); 
  }

  const handleCheckProduct = (id) => {
    dispatch(toggleCheckedProduct(id))
  }

  const handleUpdateProduct = (id, value) => {
    dispatch(updateProduct({id, value}))
  }

  return (
    <div className={cx("wrapper__product--list")}>
      {infoProductsCart.map((product) => {
        return (
          <div key={product.id} className={cx('wrapper__product--item')}>
            <div className={cx("box--item1", "shop--name")}>
              <input type="checkbox" />
              <div className={cx("common--text", "name")}>{product.infoShop.shopName}</div>
            </div>
            <div className={cx("list__product--shop")}>
              <div className={cx("voucher__shop")}>voucher Combo</div>
              <div className={cx("product--item")}>
                <div className={cx("checkbox", "box--item1")}>
                  <input type="checkbox" checked={filterValueofId(product.id)[0].checked} onClick={() => handleCheckProduct(product.id)}/>
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
                    {coverAmount(filterValueofId(product.id)[0].price)}
                  </div>
                  <div className={cx("price--beforeVoucher")}>
                    <span>₫</span>
                    {coverAmount(filterValueofId(product.id)[0].price)}   
                  </div>
                </div>
                <div className={cx("common--text", "box--item5", "quantity")}>
                  <div className={cx("number-input")}>
                    <button className={cx("btn")} onClick={()=>{handedDecrease(product.id)}}>&#8722;</button>
                    <input type="number" value={filterValueofId(product.id)[0].quanlity} onChange={(e) => handleUpdateProduct(product.id,Number(e.target.value))}/>
                    <button className={cx("btn")} onClick={()=> {handeIncrease(product.id)}}>&#43;</button>
                  </div>
                </div>
                <div className={cx("common--text", "box--item6")}>
                  <span>₫</span>
                  {coverAmount((filterValueofId(product.id)[0].price) * filterValueofId(product.id)[0].quanlity)}
                </div>
                <div className={cx("common--text", "box--item7")}>
                  <div className={cx("operation")}>
                    <button className={cx('btn--remove')} onClick={() => handleRemoveProduct(product.id)} >Xóa</button>
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
