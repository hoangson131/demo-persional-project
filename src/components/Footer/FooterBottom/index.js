import classNames from 'classnames/bind';

import styles from'./FooterBottom.module.scss'

import { IconChatBox, IconChatText } from '~/assets/icon';
import { useContext } from 'react';
import { DataContext } from '~/DataProvider/dataProvider';

const cx = classNames.bind(styles)
function FooterBottom() {

    const data = useContext(DataContext)

    return ( 
        <>
            <div className={cx('bottom__wrapper')}>
                <div className={cx('box__fbot')}>
                    <div className={cx('footer__list--title')}>
                        {data && data.policyTitle.map((title,index) => {
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
                    <div className={cx('item__info--shopee')}>{data && data.aboutShopee.name}</div>
                    <div className={cx('item__info--shopee', 'custom--info')}>{data && data.aboutShopee.address}</div>
                    <div className={cx('item__info--shopee')}>{data && data.aboutShopee.manager}</div>
                    <div className={cx('item__info--shopee')}>{data && data.aboutShopee.businessCode}</div>
                    <div className={cx('item__info--shopee')}>{data && data.aboutShopee.license}</div>
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