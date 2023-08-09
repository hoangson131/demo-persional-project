import classNames from "classnames/bind";
import styles from './HeaderLogin.module.scss'
import Logo from "~/assets/images/logo";

const cx = classNames.bind(styles)

function HeaderLogin() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('header--outner')}>
                <div className={cx('header--left')}>
                    <div className={cx('logo')}><Logo height={42} width={124}/></div>
                    <div className={cx('title')}>Đăng nhập</div>
                </div>
                <div className={cx('header--right')}>Bạn cần giúp đỡ?</div>
            </div>
        </div>
     );
}

export default HeaderLogin;