import classNames from 'classnames/bind';

import styles from './Footer.modue.scss'
import FooterTop from '~/layouts/components/Footer/FooterTop';
import FooterBottom from '~/layouts/components/Footer/FooterBottom';


const cx = classNames.bind(styles)

function Footer() {
    return ( 
        <div className={cx('wrapper')}>
            <FooterTop/>
            <FooterBottom/>
        </div>
     );
}

export default Footer;