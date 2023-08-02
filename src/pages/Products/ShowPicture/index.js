import classNames from "classnames/bind";

import styles from './ShowPicture.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger, faFacebook, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles)

function ShowPicture({data}) {
    console.log('ShowPicture: ',data);
    const dataShow = data[0]
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('wrapper__show--image')}>
                <div className={cx('show--image')}>
                    <img className={cx('screen--image')} src={dataShow.imgUrl[0]} alt={dataShow.id}/>
                </div>
                <div className={cx('wrapper--showList')}>
                    <div className={cx('wrapper__list--image')}>
                        <ul className={cx('list--image')}>
                            {dataShow.imgUrl.map((itemImg,index) => {
                                return (
                                    <li key={index} className={cx('item--image')}>
                                        <img className={cx('image')} src={itemImg} alt={index} />
                                    </li>
                                )
                            })}
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
                    <span className={cx('text')}>Đã thích (<span>{dataShow.reviewNumber}k</span>)</span>
                </div>
            </div>
        </div>
    );
}

export default ShowPicture;