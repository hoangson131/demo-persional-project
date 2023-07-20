import classNames from "classnames/bind";

import styles from "./FlashSale.module.scss";
import FlashSaleProducts from "./FlashSaleProducts";

const cx = classNames.bind(styles);

function FlashSale() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("box_title")}>
        <div className={cx('title--left')}>
          <div className={cx("title")}></div>
          <div className={cx('countdown')}>Time out</div>
        </div>
        <div className={cx('title--right')}>
            <span className={cx('viewAll')}>Xem tất cả</span>
            <span className={cx('icon')}>&#10095;</span>

        </div>
      </div>
      <FlashSaleProducts/>
    </div>
  );
}

export default FlashSale;
