import Action from "./Action";

import classNames from "classnames/bind";
import styles from './ShopeeMall.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import Slide from "~/components/Slide";
import { dataBase } from "~/database";
import ProductsMall from "./ProductsMall";

const cx = classNames.bind(styles)

function ShopeeMall() {

    const data = dataBase.shopeeMall.slider

    return ( 
        <div className={cx('wrapper')} >
            <div className={cx('wrapper__title')} >
                <div className={cx('title__left')}>
                    <a className={cx('btn')} href='/'>SHOPEE MALL</a>
                    <Action/>
                </div>
                <div className={cx('show__all')}>
                    <span className={cx('text')}>Xem tất cả</span>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faCircleRight}/>
                    </span>
                </div>
            </div>
            <div className={cx('wrapper__content')}>
                <div className={cx('wrapper__slide')}><Slide data={data} width={389} height={463} rectangle countdown={3000}/></div>

                <div className={cx('wrapper__productsMall')}><ProductsMall/></div>
            </div>
        </div>
     );
}

export default ShopeeMall;