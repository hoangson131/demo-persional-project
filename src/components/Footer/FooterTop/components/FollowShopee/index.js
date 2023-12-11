import classNames from "classnames/bind";

import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../FooterTop.module.scss";

const cx = classNames.bind(styles);

function FollowShopee() {
  const followShopee = [
    {
      title: "Facebook",
      icon: faFacebook,
    },
    {
      title: "Instagram",
      icon: faInstagram,
    },
    {
      title: "LinkedIn",
      icon: faLinkedin,
    },
  ];

  return (
    <div className={cx("box__items")}>
      <span className={cx("title")}>THEO DÕI CHÚNG TÔI TRÊN</span>
      <ul className={cx("box__items--follow")}>
        {followShopee.map((item, index) => {
          return (
            <li key={index} className={cx("follow--item")}>
              <FontAwesomeIcon className={cx("icon")} icon={item.icon} />
              <div className={cx("title", "item--tile")}>{item.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FollowShopee;
