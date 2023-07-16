import classNames from "classnames/bind";

import { dataBase } from "~/database";
import styles from "./HeaderHomePage.module.scss";

const cx = classNames.bind(styles);

function HeaderHomePage() {
  return (
    <div className={cx('wrapper')}>
      <div>
          <div className={cx('title')}>Danh Mục</div>
          <div className={cx('category__list')}>
            <div className={cx('box__category--list')}>
              {dataBase.category.map((item) => {
                return (
                  <a className={cx('box__list--item')} key={item.id} href="/">
                    <div className={cx('box--item')}>
                      <img className={cx('logo')} src={item.imageUrl} alt={item.id} />
                      <div className={cx('text')}>{item.title}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
      </div>
    </div>
  );
}

export default HeaderHomePage;
