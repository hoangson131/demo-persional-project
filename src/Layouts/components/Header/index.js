import classNames from 'classnames/bind'
import styles from './Header.module.scss'


import { Link } from 'react-router-dom';
import { SearchIcon, CarIcon } from '~/assets/icon';
import  Logo  from '~/assets/images/logo';
import OnlyNavbar from '../OnlyNavbar';
import { selectorCart } from '~/stores/cart/selectors';
import { useSelector } from 'react-redux';
import { forwardRef } from 'react';

const cx = classNames.bind(styles)


function Header(props,ref) {
    const productsInCart = useSelector(selectorCart)

    return (
    <div ref={ref} className={cx('wrapper')}>
        <OnlyNavbar className={cx('navbar')}/>
        <div className={cx('main__header')}>
            <Link to='/' className={cx('box__logo--shopee')}>
                <Logo    className={cx('logo--shoppe')} />
            </Link>
            <div className={cx('search__container')}>
                <div className={cx('searchbar')}>
                    <div className={cx('seacrch__input')}>
                        <input className={cx('input')} placeholder='TÌM THỨ BẠN MUỐN Ở ĐÂY NHA!!!'/>
                    </div>
                    <button className={cx('seachr__btn')}>
                        <SearchIcon height={14} width={14} color={"#fff"} />
                    </button>
                </div>
                <div className={cx('list-search')}></div>
            </div>
            <Link to="/cart" className={cx('box__logo--cart')}>
                <CarIcon/>
                {productsInCart.length > 0 ? <div className={cx('cart--products-amount')}>{productsInCart.length}</div> : <></>}
                
            </Link>
        </div>
    </div>
    );
}

export default forwardRef(Header);