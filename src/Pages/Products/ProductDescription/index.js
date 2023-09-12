import classNames from "classnames/bind";
import styles from './ProductDescription.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { IconClock, IconFlashSale } from "~/assets/icon";
import { useDispatch } from "react-redux";
import { buyProduct } from "~/stores/cart/actions";
import CustomProduct from "./CustomProduct";
import { Link } from "react-router-dom";
import { config } from "~/config";
import { useRef, useState } from "react";

const cx = classNames.bind(styles)
function ProductDescription({data}) {
    const typeRef = useRef()
    const dispatch = useDispatch()
    const showData = data[0]
//    useEffect(() => {
//     if (typeRef.current.idType !== null) {
//         // setNotSelected('')
//        }
//    },[])

    console.log(typeRef.current);

    const [dataFromChild, setDataFromChild] = useState(false)


    const handleChildData = (data) => {
        setDataFromChild(data)
    }

    console.log('data from children: ',dataFromChild);


    //====Handle Click================================
    const handleAddCart = (idProduct) => {
        if(typeRef.current.idType === null) {
            console.warn("Please select a product")
            handleChildData(true)
        } else {
            console.log("idType:",typeRef.current.idType);
            dispatch(buyProduct({...typeRef.current, idProduct: idProduct}))
        }
    }
 
    const coverAmount = (number) => {
       return new Intl.NumberFormat("de-DE").format(number)
    }

    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('description')} >
                {showData.like > 300 && <span className={cx('icon--review')}>Yêu Thích {showData.like > 1000 && <span>+</span>}</span>}
                <h4 className={cx('description__content')}>{showData.description}</h4>
            </div>
            <div className={cx('evalute--product')}>
                <div className={cx('rating--product')}>
                    <div className={cx('underline', 'number--rating')}>{showData.rate.toFixed(1)}</div>
                    <div className={cx('start--outer')}>
                        <div className={cx('start--inner')} style={{width: showData.rate / 5 * 100 + '%'}}></div>
                    </div>
                </div>
                <div className={cx('review--product')}>
                    <div className={cx('underline','text--medium', 'amount')}>{showData.reviewNumber}k</div>
                    <p className={cx('text--small', 'title--amount')}>Đánh Giá</p>
                </div>
                <div className={cx('review--product')}>
                    <div className={cx('text--medium', 'amount')}>{showData.sold}k</div>
                    <div className={cx('text--small', 'title--amount')}>Đã Bán</div>
                </div>
                <button className={cx('text--small', 'spam')}>Tố cáo</button>
            </div>
            <div className={cx('price--product')}>
                <div className={cx('event--product')} >
                    <div className={cx('logo--flashsale')}><IconFlashSale/></div>
                    <div className={cx('icon--clock')}><IconClock/></div>
                    <div className={cx('text--endTime')}>KẾT THÚC TRONG</div>
                    <div className={cx('block--coundown')}>coundown</div>
                </div>
                <div className={cx('wrapper__price--afterEvent')} >
                    <div className={cx('price--affterEvent')}>
                        <div className={cx('text--medium', 'cost')}>{coverAmount(showData.models[0].price)}</div>
                        <div className={cx('price')}>
                            <div className={cx('price--afterVoucher')}>{coverAmount(showData.models[0].price)}</div>
                            <div className={cx('product--voucher')}>voucher</div>
                        </div>
                    </div>
                </div>
            </div>
            <CustomProduct models={showData.models} onDataToParent={handleChildData} warning={dataFromChild} ref={typeRef}/>
            <div className={cx('product--buy')}>
                <div className={cx('wrapper__btns--buy')}>
                    <button className={cx('btn--product--cart')}>
                        <div className={cx('content__btn--addCart')}>
                            <FontAwesomeIcon icon={faCartPlus}/>
                            <div className={cx('text--medium', 'text__add--cart')} onClick={() => handleAddCart(showData.id)}>Thêm Vào Giỏ Hàng</div>
                        </div>
                    </button>
                    <button onClick={() => handleAddCart(showData.id)} className={cx('text--medium', 'buy--now')} ><Link to={config.cart}>Mua Ngay</Link></button>
                </div>
            </div>
            <div className={cx('ensuar--shopee')}>
                <div className={cx('wrapper--ensuar')}>
                    <div className={cx('block--title')}>
                        <div className={cx('ensuar--icon')}></div>
                        <div className={cx('title--ensuar')}>Shopee Đảm Bảo</div>
                    </div>
                    <div className={cx('block__content--ensuar')}>
                        <span className={cx('text--small', 'text--content')}>3 Ngày Trả Hàng / Hoàn Tiền</span>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default ProductDescription;