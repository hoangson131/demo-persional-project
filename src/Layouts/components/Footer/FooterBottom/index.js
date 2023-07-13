import classNames from 'classnames/bind';

import styles from'./FooterBottom.module.scss'

const cx = classNames.bind(styles)
function FooterBottom() {
    return ( 
        <div className={cx('bottom__wrapper')}>
            <div>
                <div>Footer Bottom</div>
                <div>
    
                </div>
            </div>
        </div>
     );
}

export default FooterBottom;