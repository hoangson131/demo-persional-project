import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from '~/components/Popper'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";

import styles from "./OnlyNavbar.module.scss";
import { IconArowDown, IconHelp, IconNotication } from "~/assets/icon";
import { config } from "~/config";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode"
import { useEffect, useState } from "react";
import avatar from '~/assets/images/avatar.jpg'

const cx = classNames.bind(styles);

function OnlyNavbar({className}) {
  const [currentUser, setCurrentUser] = useState(false)
  const token = Cookies.get('token')

  const checkLogin = () => {
    console.log("checklogin......");
    if(token === undefined) {
      return
    } else {
      try {
        const decodetoken = jwt_decode(token)
        setCurrentUser(decodetoken)
      } catch (error) {
        console.error("InvalidTokenError");
      }
    }
  }
  useEffect(() => {
    checkLogin()
  },[token])

  return (
    <div className={cx("wrapper", `${className}`)}>
      <div className={cx("container")}>
        <div className={cx("navbar__left")}>
          <ul className={cx("list__left")}>
            <li>Kênh Người Bán</li>
            <li>Trở thành Người bán Shopee</li>
            <Tippy
              interactive
              placement="bottom-start"
              render={attrs => (
                <div className={cx('popper--app')} tabIndex="-1" {...attrs}>
                  <PopperWrapper >
                    <div className={cx('popper--inner')}>
                      <img className={cx('qr--image')} src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/d91264e165ed6facc6178994d5afae79.png" alt="qr"/>
                      <div className={cx('list-app')}>
                        <div className={cx('item--app')}>
                          <img className={cx('img--item')} src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/39f189e19764dab688d3850742f13718.png" alt=""/>
                        </div>
                        <div className={cx('item--app')}>
                          <img className={cx('img--item')} src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/f4f5426ce757aea491dce94201560583.png" alt=""/>
                        </div>
                        <div className={cx('item--app')}>
                          <img className={cx('img--item')} src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/1ae215920a31f2fc75b00d4ee9ae8551.png" alt=""/>
                        </div>
                      </div>
                    </div>    
                  </PopperWrapper>
                </div>
              )}
            >
              <li>Tải ứng dụng</li>
            </Tippy>
            <li>
              Kết nối
              <FontAwesomeIcon className={cx("icon")} icon={faFacebook} />
              <FontAwesomeIcon className={cx("icon")} icon={faInstagram} />
            </li>
          </ul>
        </div>
        <div className={cx("navbar__right")}>
          <ul>
            <Tippy
              interactive
              placement="bottom-end"
              render={attrs => (
                <div className={cx('notigication--popper')} tabIndex="-1" {...attrs}>
                  <PopperWrapper >
                    {currentUser ? (
                      <div className={cx('popper__notication--inner')}>
                        <p className={cx("title--nocitcation")} >Tất cả các thông báo</p>
                        <div className={cx('content')}></div>
                      </div>
                    ) : (
                      <div className={cx('popper__notication--inner')}>
                        <div className={cx('content')}>
                          <div className="img--outner">
                            <img className={cx('image')} src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/99e561e3944805a023e87a81d4869600.png" alt=""/>
                          </div>
                          <p className={cx('note')}>Đăng nhập để xem Thông báo</p>
                        </div>
                        <div className={cx('btn--outner')}>
                          <Link to={config.register} className={cx('btn')}>Đăng ký</Link>
                          <Link to={config.login} className={cx('btn')}>Đăng nhập</Link>
                        </div>
                      </div>
                    )}
                  </PopperWrapper>
                </div>
              )}
            >
                <Link to="/notification">
                  <li className={cx('notification')}>
                    <IconNotication className={cx("icon")} />
                    <span>Thông Báo</span>
                  </li>
                </Link>
            </Tippy>
            <li className={cx('support')}>
              <IconHelp className={cx("icon")} />
              <span>Hỗ Trợ</span>
            </li>
            <Tippy
              interactive
              placement="bottom-end"
              render={attrs => (
                <div className={cx('popper--language')} tabIndex="-1" {...attrs}>
                  <PopperWrapper >
                    <div className={cx('language--list')}>
                      <button className={cx('btn')}>Tiếng Việt</button>
                      <button className={cx('btn')}>Tiếng Anh</button>
                    </div>
                  </PopperWrapper>
                </div>
              )}
            >
              <li className={cx('language')}>
                <FontAwesomeIcon className={cx("icon")} icon={faEarthAsia} />
                <span>Tiếng Việt</span>
                <IconArowDown/>
              </li>
            </Tippy>

            { currentUser ? (
            <Link to={config.profile}>
              <li>
                <div className={cx("user")}>
                  <img
                    className={cx("avatar")}
                    src={avatar}
                    alt="avatar"
                  />
                  <span className={cx("username")}>{currentUser.username}</span>
                </div>
              </li>
            </Link>) :   (
              <>
                <Link to={config.register}><li className={cx('register')}>Đăng Ký</li></Link>
                <Link to={config.login}><li className={cx('login')}>Đăng Nhập</li></Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OnlyNavbar;
