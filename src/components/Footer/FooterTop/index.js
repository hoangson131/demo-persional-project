import classNames from "classnames/bind";

import styles from './FooterTop.module.scss'
import { Application, Country, CustomerCare, FollowShopee, InfoShopee, PayAndDriver } from "./components";


const cx = classNames.bind(styles)

function FooterTop({data}) {

    return ( 
        <div>
            <div className={cx('wrapper')}>
                <CustomerCare />
                <InfoShopee />
                <PayAndDriver />
                <FollowShopee />
                <Application />
            </div>
            <Country/>
        </div>
     );
}

export default FooterTop;