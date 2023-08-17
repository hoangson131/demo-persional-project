import classNames from "classnames/bind";

import styles from '../../FooterTop.module.scss'
import { dataBase } from "~/database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles)

function FollowShopee() {
    return ( 
        <div className={cx('box__items')}>
            <span className={cx('title')}>THEO DÕI CHÚNG TÔI TRÊN</span>
            <ul className={cx('box__items--follow')}>
                {dataBase.followShopee.map((item,index) => {
                    return <li key={index} className={cx('follow--item')}>
                        <FontAwesomeIcon className={cx('icon')} icon={item.icon}/>
                        <div className={cx('title', 'item--tile')}>{item.title}</div>
                    </li>
                    }
                )}
            </ul>
        </div>
     );
}

export default FollowShopee;