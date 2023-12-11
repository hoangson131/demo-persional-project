import classNames from "classnames/bind";

import styles from "./FooterBottom.module.scss";

import { IconChatBox, IconChatText } from "~/assets/icon";

const cx = classNames.bind(styles);
function FooterBottom() {
  const POLICY = [
    "CHÍNH SÁCH BẢO MẬT",
    "QUY CHẾ HOẠT ĐỘNG",
    "CHÍNH SÁCH VẬN CHUYỂN",
    "CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN",
  ];

  const ABOUTSHOPEE = {
    name: "Công ty TNHH Shopee",
    address:
      "Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn",
    manager:
      "Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)",
    businessCode:
      "Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015",
    license: "© 2015 - Bản quyền thuộc về Công ty TNHH Shopee",
  };

  return (
    <>
      <div className={cx("bottom__wrapper")}>
        <div className={cx("box__fbot")}>
          <div className={cx("footer__list--title")}>
            {POLICY.map((title, index) => {
              return (
                <div key={index} className={cx("item__fbot--title")}>
                  {title}
                </div>
              );
            })}
          </div>
          <div className={cx("footer__list--logo")}>
            <a href="/" className={cx("footer__item--logo")}>
              <div className={cx("background__image", "bct-1")}></div>
            </a>
            <a href="/" className={cx("footer__item--logo")}>
              <div className={cx("background__image", "bct-1")}></div>
            </a>
            <a href="/" className={cx("footer__item--logo")}>
              <div className={cx("background__image", "bct-3")}></div>
            </a>
          </div>
          <div className={cx("item__info--shopee")}>{ABOUTSHOPEE.name}</div>
          <div className={cx("item__info--shopee", "custom--info")}>
            {ABOUTSHOPEE.address}
          </div>
          <div className={cx("item__info--shopee")}>{ABOUTSHOPEE.manager}</div>
          <div className={cx("item__info--shopee")}>
            {ABOUTSHOPEE.businessCode}
          </div>
          <div className={cx("item__info--shopee")}>{ABOUTSHOPEE.license}</div>
        </div>
      </div>
      <div className={cx("chatbox")}>
        <div className={cx("chat--logo")}>
          <IconChatBox />
        </div>
        <div className={cx("chat--text")}>
          <IconChatText />
        </div>
      </div>
    </>
  );
}

export default FooterBottom;
