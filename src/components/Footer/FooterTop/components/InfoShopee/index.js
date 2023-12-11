import classNames from "classnames/bind";
import styles from "../../FooterTop.module.scss";

const cx = classNames.bind(styles);

function InfoShopee() {
  const inforShopee = [
    "Giới Thiệu Về Shopee Việt Nam",
    "Tuyển Dụng",
    "Điều Khoản Shopee",
    "Chính Sách Bảo Mật",
    "Chính Hãng",
    "Kênh Người Bán",
    "Flash Sales",
    "Chương Trình Tiếp Thị Liên Kết Shopee",
    "Liên Hệ Với Truyền Thông",
  ];

  return (
    <div className={cx("box__items")}>
      <span className={cx("title")}>VỀ SHOPEE</span>
      <ul className={cx("list__items")}>
        {inforShopee.map((item, index) => {
          return (
            <li key={index} className={cx("item")}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default InfoShopee;
