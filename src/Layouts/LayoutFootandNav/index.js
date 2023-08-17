import classNames from 'classnames/bind';


import styles from './LayoutFootandNav.module.scss'
import OnlyNavbar  from '~/components/OnlyNavbar';
import Footer from '~/components/Footer';

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