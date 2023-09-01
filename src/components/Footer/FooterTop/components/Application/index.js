import classNames from "classnames/bind";
import styles from "../../FooterTop.module.scss";

import { useContext } from "react";
import { DataContext } from "~/DataProvider/dataProvider";

const cx = classNames.bind(styles);
function Application() {
  const data = useContext(DataContext)

  return (
    <div className={cx("box__items")}>
      <span className={cx("title")}>TẢI ỨNG DỤNG SHOPEE NGAY THÔI</span>
      <div className={cx("list__app")}>
        <div className={cx('qRCode')}>
          <img src={data && data.application.qRCode} alt="QR" />
        </div>
        <div className={cx('items__appMobile' )}>
          {data && data.application.appMobile.map((item, index) => {
            return (
              <div key={index} className={cx('item--app')}>
                <img className={cx()} src={item.imgUrl} alt={item.name} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Application;
