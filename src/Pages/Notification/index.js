
import classNames from "classnames/bind";

import styles from "./Notification.module.scss";
import Slide from "~/components/Slide";
import { dataBase } from "~/database";

const cx = classNames.bind(styles);

function Notification() {
  const data = dataBase.shopeeMall.slider

  return (
      <div className={cx('wrapper')}>
        <div className={cx('wrapper__slide')}>
          <Slide  data={data} width={389} height={463} countdown={3000}/>
        </div>
      </div>
  );
}

export default Notification;
