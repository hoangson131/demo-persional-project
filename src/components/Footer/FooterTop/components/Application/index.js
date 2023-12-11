import classNames from "classnames/bind";
import styles from "../../FooterTop.module.scss";

const cx = classNames.bind(styles);
function Application() {
  const APPLYCATION = {
    "qRCode": "https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472",
    "appMobile":[
      {
        "name": "Appstore",
        "imgUrl": "https://down-vn.img.susercontent.com/file/ad01628e90ddf248076685f73497c163",
      },
      {
        "name": "Google Play",
        "imgUrl": "https://down-vn.img.susercontent.com/file/ae7dced05f7243d0f3171f786e123def",
      },
      {
        "name": "App Gallery",
        "imgUrl": "https://down-vn.img.susercontent.com/file/35352374f39bdd03b25e7b83542b2cb0",
      }
    ]
  }
  return (
    <div className={cx("box__items")}>
      <span className={cx("title")}>TẢI ỨNG DỤNG SHOPEE NGAY THÔI</span>
      <div className={cx("list__app")}>
        <div className={cx('qRCode')}>
          <img src={APPLYCATION.qRCode} alt="QR" />
        </div>
        <div className={cx('items__appMobile' )}>
          {APPLYCATION.appMobile.map((item, index) => {
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
