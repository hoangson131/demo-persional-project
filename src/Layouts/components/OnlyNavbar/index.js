import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

import styles from "./OnlyNavbar.module.scss";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";
// import images from "~/assets/images";
import Tippy from "@tippyjs/react/headless";
import { IconArowDown, IconHelp, IconNotication } from "~/assets/icon";

const cx = classNames.bind(styles);

function OnlyNavbar({className}) {

  return (
    <div className={cx("wrapper", `${className}`)}>
      <div className={cx("container")}>
        <div className={cx("navbar__left")}>
          <ul className={cx("list__left")}>
            <li>Kênh Người Bán</li>
            <li>Trở Thành Người bán Shopee</li>
            <Tippy
              render={attrs => {
                <div className={cx('box')} tabIndex="-1" {...attrs}>
                  My tippy box
                </div>
              }}  
            >
              <li>Tải Ứng Dụng</li>
            </Tippy>
            <li>
              Kết Nối
              <FontAwesomeIcon className={cx("icon")} icon={faFacebook} />
              <FontAwesomeIcon className={cx("icon")} icon={faInstagram} />
            </li>
          </ul>
        </div>
        <div className={cx("navbar__right")}>
          <ul>
            <Link to="/notification">
              <li className={cx('notification')}>
                <IconNotication className={cx("icon")} />
                <span>Thông Báo</span>
              </li>
            </Link>
            <li className={cx('support')}>
              <IconHelp className={cx("icon")} />
              <span>Hỗ Trợ</span>
            </li>
            <li className={cx('language')}>
              <FontAwesomeIcon className={cx("icon")} icon={faEarthAsia} />
              <span>Tiếng Việt</span>
              <IconArowDown/>
            </li>
            <Link to={'/register'}><li className={cx('register')}>Đăng Ký</li></Link>
            <Link to={'/login'}><li className={cx('login')}>Đăng Nhập</li></Link>
            {/* <Link to='/profile'>
              <li>
                <div className={cx("user")}>
                  <img
                    className={cx("avatar")}
                    src={images.avatar}
                    alt="avatar"
                  />
                  <span className={cx("username")}>Username</span>
                </div>
              </li>
            </Link> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OnlyNavbar;
