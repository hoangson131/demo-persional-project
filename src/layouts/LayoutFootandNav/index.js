import classNames from 'classnames/bind';


import styles from './LayoutFootandNav.module.scss'
import Footer from "../components/Footer";
import { OnlyNavbar } from '~/Layouts/components';

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