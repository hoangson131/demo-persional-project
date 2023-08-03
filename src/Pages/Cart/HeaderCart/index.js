// import images from "~/asetss/images";
import Logo from "~/assets/images/logo";

import styles from "./HeaderCart.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function HeaderCart() {
  return (
    <div className={cx("wrapper__cart--header")}>
      <div className={cx("container__cart--header")}>
        <div className={cx("cart__header--logo")}>
          <Link to="/">
            <div className={cx("box--logo")}>
              <Logo className={cx("logo")}/>
            </div>
          </Link>
          <span className={cx("page--name")}>Giỏ Hàng</span>
        </div>
        <div className={cx("seacrchbar")}>
          <div className={cx("box--input")}>
            <input
              className={cx("search--input")}
              placeholder="CẦN GÌ TÌM Ở ĐÂY !!!"
            />
          </div>
          <button className={cx("seacrch--btn")}>
            <div>TIM</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderCart;
