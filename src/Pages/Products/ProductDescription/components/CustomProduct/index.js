import classNames from "classnames/bind";
import styles from './CustomProduct.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { IconShipping } from "~/assets/icon";
import { useState } from "react";

const cx = classNames.bind(styles)

function CustomProduct() {
    const [amount, setAmount] = useState(1)

    //=====Handle Click change amount======

    const handleDecreament = () => {
        if(amount - 1 > 0) {
            return setAmount(amount - 1)
        }
        return
    }
    const handleIncreament = () => {
        return setAmount(amount + 1)
    }

    const handleChangeAmount = (e) => {
        // let value = Number(e.target.value)
        setAmount(e.target.value)
        // if (value > 0) {  
        // }
        // return
    } 

    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('wrapper--transport')}>
                <div className={cx('text--shared', 'box--title')}>Vận Chuyển</div>
                <div className={cx('wrapper__transport--content')}>
                    <div className={cx('transport--voucher')}>
                        <div className={cx('icon')}><IconShipping height={20} width={25}/></div>
                        <div className={cx('text--shared','freeship--text')}>Miễn phí vận chuyển</div>
                    </div>
                    <div className={cx('wrapper__transport--from')}>
                        <div className={cx('icon')}><FontAwesomeIcon icon={faPlaneDeparture}/></div>
                        <div className={cx('transport__from--content')}>
                            <div className={cx('transport__from--top')}>
                                <div className={cx('text--shared', 'transport--text')}>Vận chuyển từ</div>
                                <div className={cx('transport--content')}>
                                    <div className={cx('text--shared')}></div>
                                    <FontAwesomeIcon icon={faChevronDown}/>
                                </div>
                            </div>
                            <div className={cx('transport--fee')}>
                                <div className={cx('text--shared', 'transport--text')}>Phí vận chuyển</div>
                                <div className={cx('text--shared')}>₫0 <FontAwesomeIcon icon={faChevronDown}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('wrapper--products--model')}>
                <div className={cx('wrapper--productType')} >
                    <div className={cx('text--shared', 'box--title')}>Loại</div>
                    <div className={cx('wrapper__btns--type')}>
                        <button></button>
                    </div>
                </div>
                <div className={cx('wrapper--quantity')}>
                    <div className={cx('text--shared', 'box--title')}>Số Lượng</div>
                    <div className={cx('quantity--content')}>
                        <div className={cx("number-input")}>
                            <button className={cx("btn")} onClick={() => handleDecreament()}>&#8722;</button>
                            <input type="text" maxLength={5} value={amount} onChange={handleChangeAmount} />
                            <button className={cx("btn")} onClick={() => handleIncreament()}>&#43;</button>
                        </div>
                        <div className={cx('text--shared')}>
                            <span>
                                {/* {usestate inventory} */}
                            </span>
                         sản phẩm có sẵn
                        </div>
                    </div>  
                </div>
            </div>
        </div>
     );
}

export default CustomProduct;