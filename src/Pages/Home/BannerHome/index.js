import classNames from "classnames/bind";

import { dataBase } from "~/database";
import styles from "./BannerHome.module.scss";

const cx = classNames.bind(styles);

function BannerHome() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("main-banner")}>
          <div className={cx("banner-slider")}>
            <div className={cx("slide--image")}></div>
          </div>
          <div className={cx("banner-images")}>
            <div className={cx("box__image")}>
              <img src="" alt="" />
            </div>
            <div className={cx("box__image")}>
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div className={cx("banner__list--catalog")}>
          {dataBase.banner.listCatalog.map((item, index) => {
            return (
              <div className={cx("box__list--items")}>
                <div className={cx("box__items")} key={index}>
                  <div className={cx("box__logo")}>
                    <img
                      className={cx("logo")}
                      src={item.imgUrl}
                      alt={item.title}
                    />
                  </div>
                  <div className={cx("box__title")}>{item.title}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BannerHome;
