import classNames from "classnames/bind";
import styles from "./CustomProduct.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
import { IconShipping } from "~/assets/icon";
import { Fragment, forwardRef, useState, useRef } from "react";
import Button from "~/components/Button";
// import Button from "~/components/Button";

const cx = classNames.bind(styles);

function CustomProduct({ models }, ref) {
  const [amount, setAmount] = useState(1);
  // // selector types and quanlity products
  const idSelector = useRef(null)
  const priceType = useRef(null)
  
  ref.current = { idType: idSelector.current, quanlity: amount, price: priceType.current}
  

  
  const [typeProducts, setTypeProducts] = useState({
    activeObject: null,
    models,
  })
  
  const inventory = models.reduce((total, item) => {
    return total + item.inventory;
  }, 0);
  
  const [totalInventory, setTotalInventory] = useState(inventory);

  
  //=====Handle Click change amount======

  const handleDecreament = () => {
    if (amount - 1 > 0) {
      return setAmount(amount - 1);
    }
    return;
  };
  const handleIncreament = () => {
    return setAmount(amount + 1);
  };

  const handleChangeAmount = (e) => {
    // let value = Number(e.target.value)
    setAmount(e.target.value);
    // if (value > 0) {
    // }
    // return
  };
  
  const toogleActive = (index) => {
    setTypeProducts({...typeProducts, activeObject:typeProducts.models[index]})
  }

  const toogleActiveStyles = (index) => {
    if(typeProducts.models[index] === typeProducts.activeObject) {
      return cx("btn--typeproduct", "type--active")
    } else {
      return cx("btn--typeproduct")
    }
  }

  const handleSelectorType = (index) => {
    const selectorId = [index + 1];
    const typeSelector = models.filter((model) => {
      return selectorId.includes(model.typeID);
    });
    setTotalInventory(typeSelector[0].inventory);
    toogleActive(index);
    idSelector.current = index;
    priceType.current = typeSelector[0].price;
  };

  

  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper--transport")}>
        <div className={cx("text--shared", "box--title")}>Vận Chuyển</div>
        <div className={cx("wrapper__transport--content")}>
          <div className={cx("transport--voucher")}>
            <div className={cx("icon")}>
              <IconShipping height={20} width={25} />
            </div>
            <div className={cx("text--shared", "freeship--text")}>
              Miễn phí vận chuyển
            </div>
          </div>
          <div className={cx("wrapper__transport--from")}>
            <div className={cx("icon")}>
              <FontAwesomeIcon icon={faPlaneDeparture} />
            </div>
            <div className={cx("transport__from--content")}>
              <div className={cx("transport__from--top")}>
                <div className={cx("text--shared", "transport--text")}>
                  Vận chuyển từ
                </div>
                <div className={cx("transport--content")}>
                  <div className={cx("text--shared")}></div>
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>
              <div className={cx("transport--fee")}>
                <div className={cx("text--shared", "transport--text")}>
                  Phí vận chuyển
                </div>
                <div className={cx("text--shared")}>
                  ₫0 <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("wrapper--products--model")}>
        {models.length > 1 ? <div className={cx("wrapper--productType")}>
          <div className={cx("text--shared", "box--title")}>Loại</div>
          <div className={cx("wrapper__btns--type")}>
            {typeProducts.models.map((model,index) => {
              return (
                <Button
                  key={index}
                  className={(toogleActiveStyles(index))}
                  // typeActive={btnTypeRef.current}
                  disabled={model.inventory === 0}
                  onClick={() => handleSelectorType(index)}
                >
                  {model.typeName}
                </Button>
              );
            })}
          </div>
        </div> : <Fragment/>}
        <div className={cx("wrapper--quantity")}>
          <div className={cx("text--shared", "box--title")}>Số Lượng</div>
          <div className={cx("quantity--content")}>
            <div className={cx("number-input")}>
              <button className={cx("btn")} onClick={() => handleDecreament()}>
                &#8722;
              </button>
              <input
                type="text"
                maxLength={5}
                value={amount}
                onChange={handleChangeAmount}
              />
              <button className={cx("btn")} onClick={() => handleIncreament()}>
                &#43;
              </button>
            </div>
            <div className={cx("text--shared")}>
              <span>{totalInventory}</span>
              {` `}sản phẩm có sẵn
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(CustomProduct);
