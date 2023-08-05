import classNames from "classnames/bind";
import styles from './CustomProduct.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { IconAriFly, IconShipping } from "~/assets/icon";

const cx = classNames.bind(styles)

function CustomProduct() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('wrapper--transport')}>
                <div className={cx('text--shared')}>Vận Chuyển</div>
                <div className={cx('wrapper__transport--content')}>
                    <div className={cx('transport--voucher')}>
                        <div className={cx('icon')}><IconShipping/></div>
                        <div className={cx('text--shared')} text>Miễn phí vận chuyển</div>
                    </div>
                    <div className={cx('wrapper__transport--from')}>
                        <div className={cx('icon')}><IconAriFly/></div>
                        <div className={cx('transport__from--content')}>
                            <div className={cx('transport__from--top')}>
                                <div className={cx('text--shared')}>Vận chuyển từ</div>
                                <div className={cx('transport--content')}>
                                    <div className={cx('text--shared')}></div>
                                    <FontAwesomeIcon icon={faChevronDown}/>
                                </div>
                            </div>
                            <div className={cx('transport--fee')}>
                                <div className={cx('text--shared')}>Phí vận chuyển</div>
                                <div className={cx('text--shared')}>₫0 <FontAwesomeIcon icon={faChevronDown}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('wrapper--products--model')}>
                <div className={cx('wrapper--productType')} >
                    <div className={cx('text--shared')}>Type</div>
                    <div className={cx('wrapper__btns--type')}>
                        <button></button>
                    </div>
                </div>
                <div className={cx('wrapper--quantity')}>
                    <div className={cx('text--shared')}>quantity</div>
                    <div className={cx('')}>
                        <div className={cx('')}>
                            <input/>
                        </div>
                        <div className={cx('text--shared')}><span></span> sản phẩm có sẵn</div>
                    </div>  
                </div>
            </div>
        </div>
     );
}

export default CustomProduct;