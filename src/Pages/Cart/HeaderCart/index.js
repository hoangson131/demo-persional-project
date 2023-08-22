// import images from "~/asetss/images";
import Logo from "~/assets/images/logo";

import styles from "./HeaderCart.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { SearchIcon } from "~/assets/icon";
import { config } from "~/config";

const cx = classNames.bind(styles);

function HeaderCart() {
  return (
    <div className={cx("wrapper__cart--header")}>
      <div className={cx("container__cart--header")}>
        <div className={cx("cart__header--logo")}>
          <div className={cx("box--logo")}>
            <Link to={config.home}>
              <Logo className={cx("logo")}/>
            </Link>
          </div>
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
            <SearchIcon height={14} width={14} color={'var(--white--clr)'}/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderCart;
