import classNames from "classnames/bind";

import styles from './ShowPicture.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger, faFacebook, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles)

function ShowPicture() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('wrapper__show--image')}>
                <div className={cx('show--image')}>
                    <img className={cx('screen--image')} src={'https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lfp7ritborwrfd'} alt={'1'}/>
                </div>
                <div className={cx('wrapper--showList')}>
                    <div className={cx('wrapper__list--image')}>
                        <ul className={cx('list--image')}>
                            <li className={cx('item--image')}>
                                <img className={cx('image')} src="https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lfp7ritborwrfd" alt="1" />
                            </li>
                            <li className={cx('item--image')}>
                                <img className={cx('image')} src="https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lfp7ritc485n25" alt="2" />
                            </li>
                            <li className={cx('item--image')}>
                                <img className={cx('image')} src="https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lfp7ritborlk19" alt="3" />
                            </li>
                            <li className={cx('item--image')}>
                                <img className={cx('image')} src="https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lfp7ritb9bco8f" alt="4" />
                            </li>
                            <li className={cx('item--image')}>
                                <img className={cx('image')} src="https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lfp7ritccn94b8" alt="5" />
                            </li>
                            <li className={cx('item--image')}>
                                <img className={cx('image')} src="https://down-vn.img.susercontent.com/file/cn-11134207-7qukw-lfp7ritc47ug42" alt="6" />
                            </li>
                        </ul>
                    </div>
                    <button className={cx('btn', 'prev')}>&#10094;</button>
                    <button className={cx('btn', 'next')}>&#10095;</button>
                </div>
            </div>
            <div className={cx('wrapper__share')}>
                <div className={cx('share__link--icon')}>
                    <div className={cx('text','share--text')}>Chia sẻ:</div>
                    <div className={cx('iconMess')}><FontAwesomeIcon icon={faFacebookMessenger}/></div>
                    <div className={cx('iconFace')}><FontAwesomeIcon icon={faFacebook}/></div>
                    <div className={cx('iconPintes')}><FontAwesomeIcon icon={faPinterest}/></div>
                    <div className={cx('iconTw')}><FontAwesomeIcon icon={faTwitter}/></div>              
                </div>
                <div className={cx('amount--like')}>
                    <div className={cx('iconHeart')}><FontAwesomeIcon icon={faHeart}/></div>
                    <span className={cx('text')}>Đã thích (<span>{1.6}k</span>)</span>
                </div>
            </div>
        </div>
    );
}

export default ShowPicture;