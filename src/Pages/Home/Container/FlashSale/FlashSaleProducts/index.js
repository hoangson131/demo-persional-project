import classNames from "classnames/bind";
import styles from "./FlashSaleProducts.module.scss";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function FlashSaleProducts() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("product--item")}>
        <div className={cx("product--image")}>
          <img
            src="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lguo0n3oq1wyaa_tn"
            className={cx("image")}
            alt=""
          />
        </div>
        <div className={cx("description")}>
          <div className={cx("box__price")}>
            <span className={cx('vnd')}>₫</span>
            <span className={cx("price")}>9.000</span>
          </div>
          <div className={cx("box__sale")}>
            <div className={cx("bestsaler")}>
              <div className={cx("text")}>Đang Bán Chạy</div>
              <div className={cx('background--img')}></div>
              <div className={cx('background--color')}></div>
            </div>
          </div>
        </div>
      </div>
      <Button className={cx('btn', 'prev')}>
          &#10094;
      </Button>
      <Button className={cx('btn', 'next')}>
      &#10095;
      </Button>
    </div>
  );
}

export default FlashSaleProducts;
