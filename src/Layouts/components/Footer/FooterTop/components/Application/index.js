import classNames from "classnames/bind";
import styles from "../../FooterTop.module.scss";
import { dataBase } from "~/database";

const cx = classNames.bind(styles);

function Application() {
  return (
    <div className={cx("box__items")}>
      <span className={cx("title")}>TẢI ỨNG DỤNG SHOPEE NGAY THÔI</span>
      <div className={cx("list__app")}>
        <div className={cx('qRCode')}>
          <img src={dataBase.application.qRCode} alt="QR" />
        </div>
        <div className={cx('items__appMobile' )}>
          {dataBase.application.appMobile.map((item, index) => {
            return (
              <div key={index} className={cx('item--app')}>
                <img className={cx("app-logo")} src={item.imgUrl} alt={item.name} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Application;
