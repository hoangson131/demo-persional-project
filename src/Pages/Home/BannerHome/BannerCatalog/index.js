import classNames from "classnames/bind";

import styles from './BannerCatalog.module.scss'
import { useContext } from "react";
import { DataContext } from "~/DataProvider/dataProvider";

const cx = classNames.bind(styles)

function BannerCatalog() {
  const data = useContext(DataContext)
  
    return ( 
        <div className={cx("banner__list--catalog")}>
          {data && data.banner.listCatalog.map((item, index) => {
            return (
              <div key={index} className={cx("box__list--items")}>
                <div className={cx("box__items")} >
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
     );
}

export default BannerCatalog;