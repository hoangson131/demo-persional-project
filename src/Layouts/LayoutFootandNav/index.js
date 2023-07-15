import classNames from 'classnames/bind';

import OnlyNavbar from '~/layouts/components/OnlyNavbar'
import Footer from "~/layouts/components/Footer";
import styles from './LayoutFootandNav.module.scss'

const cx = classNames.bind(styles)

function LayoutFootandNav({children }) {
    return ( 
        <div className={cx('wrapper')}>
            <OnlyNavbar/>
            <div className="content">
                {children}
            </div>
            <Footer/>
        </div>
     );
}

export default LayoutFootandNav ;