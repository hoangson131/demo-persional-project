import classNames from 'classnames/bind';

import styles from'./FooterBottom.module.scss'
import { dataBase } from '~/database';
import { IconChatBox, IconChatText } from '~/assets/icon';

const cx = classNames.bind(styles)
function FooterBottom() {
    return ( 
        <>
            <div className={cx('bottom__wrapper')}>
                <div className={cx('box__fbot')}>
                    <div className={cx('footer__list--title')}>
                        {dataBase.listTitel.map((title,index) => {
                            return <div key={index} className={cx('item__fbot--title')}>{title}</div>
                        })}
                    </div>
                    <div className={cx('footer__list--logo')}>
                        <a href='/' className={cx('footer__item--logo')}>
                            <div className={cx('background__image', 'bct-1')}></div>
                        </a>
                        <a href='/' className={cx('footer__item--logo')}>
                            <div className={cx('background__image', 'bct-1')}></div>
                        </a>
                        <a href='/' className={cx('footer__item--logo')}>
                            <div className={cx('background__image', 'bct-3')}></div>
                        </a>
                    </div>
                    <div className={cx('item__info--shopee')}>{dataBase.aboutShopee.name}</div>
                    <div className={cx('item__info--shopee')}>{dataBase.aboutShopee.address}</div>
                    <div className={cx('item__info--shopee')}>{dataBase.aboutShopee.manager}</div>
                    <div className={cx('item__info--shopee')}>{dataBase.aboutShopee.businessCode}</div>
                    <div className={cx('item__info--shopee')}>{dataBase.aboutShopee.license}</div>
                </div>
            </div>
            <div className={cx('chatbox')}>
                <div className={cx('chat--logo')}><IconChatBox/></div>
                <div className={cx('chat--text')}><IconChatText/></div>
            </div>
        </>
     );
}

export default FooterBottom;