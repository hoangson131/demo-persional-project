import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import OnlyNavbar from '~/layouts/components/OnlyNavbar';
// import images from '~/asetss/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import  Logo  from '~/assets/images/logo';

const cx = classNames.bind(styles)

function Header() {

    return (
    <header className={cx('wrapper')}>
        <OnlyNavbar className={cx('navbar')}/>
        <div className={cx('main__header')}>
            <Link to='/' className={cx('box__logo--shopee')}>
                <Logo className={cx('logo--shoppe')} />
            </Link>
            <search className={cx('search__container')}>
                <div className={cx('searchbar')}>
                    <div className={cx('seacrch__input')}>
                        <input className={cx('input')}  placeholder='TÌM THỨ BẠN MUỐN Ở ĐÂY NHA!!!'/>
                    </div>
                    <button className={cx('seachr__btn')}>
                        TIM
                    </button>
                </div>
                <div className={cx('list-search')}></div>
            </search>
            <Link to="/cart" className={cx('box__logo--cart')}>
                <FontAwesomeIcon  className={cx('logo--cart')} icon={faShoppingCart}/>
            </Link>
        </div>
    </header>
    );
}

export default Header;