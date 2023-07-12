import classNames from "classnames/bind";
import styles from './DefaultLayout.module.scss'
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

const cx = classNames.bind(styles)

function DefaultLayout({children}) {
    return ( 
        <div className={cx('wrapper')}>
            <Header/>
            <div className="content">
                {children}
            </div>

            <Link to="/cart">Cart Page</Link>
            <Footer/>
        </div>
     );
}

export default DefaultLayout ;