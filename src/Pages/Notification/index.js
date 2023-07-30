import classNames from "classnames/bind";
import styles from './Notification.module.scss'
import BannerCatalog from "../Home/BannerHome/BannerCatalog";
import { dataBase } from "~/database";
import Slide from "~/components/Slide";

const cx = classNames.bind(styles)

function Notication() {
  const data = dataBase.banner.slideImage
  return ( 
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("main-banner")}>
          <div className={cx('wrapper__slide')}><Slide data={data} width={796} height={235} rectangle countdown={5000}/></div>
          <div className={cx("banner-images")}>
            <div className={cx("box__image")}>
              <img src="https://cf.shopee.vn/file/vn-50009109-eb59c33017a7c1bdb9f89ade65a9ea47_xhdpi" className={cx('item--image')} alt="slide1" />
            </div>
            <div className={cx("box__image")}>
              <img src="https://cf.shopee.vn/file/vn-50009109-ba54e34c1fd64fcf9602427143c971aa_xhdpi" className={cx('item--image')} alt="slide2" />
            </div>
          </div>
        </div>
        <BannerCatalog/>
      </div>
    </div>
   );
}

export default Notication;