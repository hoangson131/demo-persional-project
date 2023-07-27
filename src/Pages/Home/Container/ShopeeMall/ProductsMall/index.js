import classNames from "classnames/bind";

import styles from './ProductsMall.module.scss'
import Button from "~/components/Button";
import { dataBase } from "~/database";

const cx = classNames.bind(styles)
function ProductsMall() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('company__wapper--list')}>
                <ul className={cx('company--list')}>
                    {dataBase.shopeeMall.listCompanyBrand.map((item,index) => {
                        return (
                            <li key={index} className={cx('item--company')}>
                                <div className={cx('item')}>
                                    <img src={item.imgUrl} className={cx('image')} alt={item.id}/>
                                    <div className={cx('title')}>{item.title}</div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <Button className={cx('btn', 'prev')}>&#10094;</Button>
            <Button className={cx('btn', 'next')}>&#10095;</Button>
        </div>
     );
}

export default ProductsMall;