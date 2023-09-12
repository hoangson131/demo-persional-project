import classNames from 'classnames/bind'
import { useSelector } from 'react-redux';
import { Fragment, forwardRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';


import styles from './Header.module.scss'
import { SearchIcon, IconCart } from '~/assets/icon';
import  Logo  from '~/assets/images/logo';
import OnlyNavbar from '../OnlyNavbar';
import { selectorCart } from '~/stores/cart/selectors';
import { config } from '~/config';
import Cookies from 'js-cookie';

const cx = classNames.bind(styles)


function Header(props,ref) {
    const productsInCart = useSelector(selectorCart)
    const navigate = useNavigate()
    
    const handleCheckUsers = () => {
        const currentUsertoken = Cookies.get("token")
            if (currentUsertoken === undefined) {
                navigate(config.login)
            } else {
                navigate(config.cart);
            }
        }

    return (
    <div ref={ref} className={cx('wrapper')}>
        <OnlyNavbar className={cx('navbar')}/>
        <div className={cx('main__header')}>
            <Link to={config.home} className={cx('box__logo--shopee')}>
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
            <div onClick={() => handleCheckUsers()} className={cx('box__logo--cart')}>
                <IconCart/>
                {productsInCart.length > 0 ? <div className={cx('cart--products-amount')}>{productsInCart.length}</div> : Fragment} 
            </div>
        </div>
    </div>
    );
}

export default forwardRef(Header);