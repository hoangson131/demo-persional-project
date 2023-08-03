import classNames from "classnames/bind";

import styles from './FooterTop.module.scss'
import { Application, Country, CustomerCare, FollowShopee, InfoShopee, PayAndDriver } from "./compponents";


const cx = classNames.bind(styles)

function FooterTop() {
    return ( 
        <div>
            <div className={cx('wrapper')}>
                <CustomerCare/>
                <InfoShopee/>
                <PayAndDriver/>
                <FollowShopee />
                <Application/>
            </div>
            <Country/>
        </div>
     );
}

export default FooterTop;