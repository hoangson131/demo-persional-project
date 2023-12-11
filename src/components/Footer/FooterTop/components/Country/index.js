import classNames from "classnames/bind";
import styles from "../../FooterTop.module.scss";

const cx = classNames.bind(styles);

function Country() {
  const COUNTRYS = [
    "Singapore",
    "Indonesia",
    "Đài Loan",
    "Thái Lan",
    "Malaysia",
    "Việt Nam",
    "Philippines",
    "Mexico",
    "Colombia",
    "Chile",
  ];

  return (
    <div className={cx("box__country")}>
      <div className={cx("text")}>
        © 2023 Shopee. Tất cả các quyền được bảo lưu.
      </div>
      <div className={cx("list__country")}>
        <span className={cx("text", "title--country")}>
          Quốc gia & Khu vực:
        </span>
        {COUNTRYS.map((country, index) => {
          return (
            <div className={cx("item--country")} key={index}>
              <span className={cx("text")}>{country}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Country;
