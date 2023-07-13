import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBell, faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

import styles from "./OnlyNavbar.module.scss";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import images from "~/asetss/images";

const cx = classNames.bind(styles);

function OnlyNavbar() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("navbar__left")}>
          <ul className={cx("list__left")}>
            <li>Kênh Người Bán</li>
            <li>Tải Ứng Dụng</li>
            <li>
              Kết Nối
              <FontAwesomeIcon className={cx("icon")} icon={faFacebook} />
              <FontAwesomeIcon className={cx("icon")} icon={faInstagram} />
            </li>
          </ul>
        </div>
        <div className={cx("navbar__right")}>
          <ul>
            <li>
              <FontAwesomeIcon className={cx("icon")} icon={faBell} />
              <span>Thông Báo</span>
            </li>
            <li>
              <FontAwesomeIcon className={cx("icon")} icon={faCircleQuestion} />
              <span>Hỗ Trợ</span>
            </li>
            <li>
              <FontAwesomeIcon className={cx("icon")} icon={faEarthAsia} />
              <span>Language</span>
            </li>
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
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OnlyNavbar;
