import classNames from "classnames/bind";

import styles from "../../FooterTop.module.scss";

const cx = classNames.bind(styles);
function CustomerCare() {
  const customerCare = [
    "Trung Tâm Trợ Giúp",
    "Shopee Blog",
    "Shopee Mall",
    "Hướng Dẫn Mua Hàng",
    "Hướng Dẫn Bán Hàng",
    "Thanh Toán",
    "Shopee Xu",
    "Vận Chuyển",
    "Trả Hàng & Hoàn Tiền",
    "Chắm Sóc Khách Hàng",
    "Chính Sách Bảo Hành",
  ];
  return (
    <div className={cx("box__items")}>
      <span className={cx("title")}>CHĂM SÓC KHÁCH HÀNG</span>
      <ul className={cx("list__items")}>
        {customerCare.map((item, index) => {
          return (
            <li className={cx("item")} key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CustomerCare;
