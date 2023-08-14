import classNames from "classnames/bind";
import styles from './HeaderRegister.module.scss'
import Logo from "~/assets/images/logo";
import { Link } from "react-router-dom";
import { config } from "~/config";

const cx = classNames.bind(styles)

function HeaderRegister() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('header--outner')}>
                <div className={cx('header--left')}>
                    <Link to={config.home}><div className={cx('logo')}><Logo height={42} width={124}/></div></Link>
                    <div className={cx('title')}>Đăng ký</div>
                </div>
                <div className={cx('header--right')}>Bạn cần giúp đỡ?</div>
            </div>
        </div>
     );
}

export default HeaderRegister;