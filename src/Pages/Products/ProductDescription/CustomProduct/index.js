import classNames from "classnames/bind";
import styles from './CustomProduct.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
import { IconShipping } from "~/assets/icon";
import { Fragment, forwardRef, useState, useRef, useEffect } from "react";
import Button from "~/components/Button";
// import Button from "~/components/Button";

const cx = classNames.bind(styles);

function CustomProduct({ models,warning, onDataToParent }, ref) {
  const [amount, setAmount] = useState(1);
  const btnTypeRef = useRef()
  const wapperModelRef=useRef()
  console.log("ref trong CustomProduct",ref.current);
  console.log(warning);


  // const [warning, setWarning] = useState('')
  // if (onWarning) {
  //   setWarning('warning')
  // } else {
  //   setWarning('')
  // }
  const inventory = models.reduce((total, item) => {
    return total + item.inventory;
  }, 0);
  
  const [totalInventory, setTotalInventory] = useState(inventory);

  // // selector types and quanlity products
  const idSelector = useRef(null)
  const priceType = useRef(null)
  // const [active, setActive] = useState(null)
  const [activeProduct,setActiveProduct] = useState({
    activeObject:[],
    models
  })
  


    // set type default when models length is 1
    if(models.length === 1) {
      ref.current = { idType: models[0].typeID, quanlity: amount, price: models[0].price, checked: false}
    } else {
      ref.current = { idType: idSelector.current, quanlity: amount, price: priceType.current, checked: false}
    }
    //================================================================

  

  
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
    setAmount(e.target.value);
  };
  
  const toogleActive = (index) => {
    console.log('set active: ', index);
    onDataToParent(false)

    if(wapperModelRef.current.classList.contains(cx('notSelected'))) {
      wapperModelRef.current.classList.remove(cx('notSelected'));
    }

    setActiveProduct({...activeProduct, activeObject: activeProduct.models[index]})
    if(btnTypeRef.current.children[index].classList.contains(cx('active'))) {
      idSelector.current = null;

      return btnTypeRef.current.children[index].classList.remove(cx('active'))
    } else {
      idSelector.current = index;

      const listTypeBtn = [...btnTypeRef.current.children]
      listTypeBtn.forEach(children => children.classList.remove(cx('active')));
      return btnTypeRef.current.children[index].classList.add(cx('active'))
    }
  }

  const handleSelectorType = (index) => {
    const selectorId = [index + 1];
    
    // tìm inventory
    const typeSelector = models.filter((model) => {
      return selectorId.includes(model.typeID);
    });
    setTotalInventory(typeSelector[0].inventory);
    // active css
    toogleActive(index);

    // set data for selected product 
    priceType.current = typeSelector[0].price;
    // setWarning("");
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
      <div className={cx("wrapper--products--model", `${warning === true ? "notSelected" : "" }`)}  ref={wapperModelRef}>
        {models.length > 1 ? <div className={cx("wrapper--productType")}>
          <div className={cx("text--shared", "box--title")}>Phân Loại</div> 
          <div className={cx("wrapper__btns--type")} ref={btnTypeRef}>
            {models.map((model,index) => {
              return (
                  <Button
                    key={index}
                    disabled={model.inventory === 0}
                    className={cx('btn--typeproduct')}
                    onClick={() => handleSelectorType(index)}
                  >{model.typeName}</Button>
              );
            })}
          </div>
        </div> : <Fragment/>}
        <div className={cx("wrapper--quantity")}>
          <div className={cx("text--shared", "box--title")}>Số Lượng</div>
          <div className={cx("quantity--content")}>
            <div className={cx("number-input")}>
              <button className={cx("btn--quanlity")} onClick={() => handleDecreament()}>
                &#8722;
              </button>
              <input
                type="text"
                maxLength={5}
                value={amount}
                onChange={handleChangeAmount}
              />
              <button className={cx("btn--quanlity")} onClick={() => handleIncreament()}>
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
