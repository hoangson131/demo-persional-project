import classNames from 'classnames/bind';

import OnlyNavbar from '~/layouts/components/OnlyNavbar'

import styles from './LayoutFootandNav.module.scss'
import Footer from '~/layouts/components/Footer'
const cx = classNames.bind(styles)

function LayoutFootandNav({children }) {
    return ( 
        <div className={cx('wrapper')}>
            <OnlyNavbar/>
            <div className={cx('content')}>
                {children}
            </div>
            <Footer/>
        </div>
     );
}

export default LayoutFootandNav ;