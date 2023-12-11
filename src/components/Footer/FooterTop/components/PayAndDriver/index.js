import classNames from "classnames/bind";

import styles from "../../FooterTop.module.scss";

const cx = classNames.bind(styles);

function PayAndDriver() {
  const payUrl = [
    "https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8",
    "https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16",
    "https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08",
    "https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c",
    "https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281",
    "https://down-vn.img.susercontent.com/file/5e3f0bee86058637ff23cfdf2e14ca09",
    "https://down-vn.img.susercontent.com/file/9263fa8c83628f5deff55e2a90758b06",
    "https://down-vn.img.susercontent.com/file/0217f1d345587aa0a300e69e2195c492",
  ];

  const shippingInit = [
    "https://down-vn.img.susercontent.com/file/5e7282bd0f7ee0872fdb0bd1d40fbe9e",
    "https://down-vn.img.susercontent.com/file/d10b0ec09f0322f9201a4f3daf378ed2",
    "https://down-vn.img.susercontent.com/file/77bf96a871418fbc21cc63dd39fb5f15",
    "https://down-vn.img.susercontent.com/file/59270fb2f3fbb7cbc92fca3877edde3f",
    "https://down-vn.img.susercontent.com/file/957f4eec32b963115f952835c779cd2c",
    "https://down-vn.img.susercontent.com/file/0d349e22ca8d4337d11c9b134cf9fe63",
    "https://down-vn.img.susercontent.com/file/3900aefbf52b1c180ba66e5ec91190e5",
    "https://down-vn.img.susercontent.com/file/6e3be504f08f88a15a28a9a447d94d3d",
    "https://down-vn.img.susercontent.com/file/b8348201b4611fc3315b82765d35fc63",
    "https://down-vn.img.susercontent.com/file/0b3014da32de48c03340a4e4154328f6",
    "https://down-vn.img.susercontent.com/file/vn-50009109-ec3ae587db6309b791b78eb8af6793fd",
  ];

  return (
    <div className={cx("box__items")}>
      <div className={cx("title")}>THANH TOÁN</div>
      <ul className={cx("box--shared", "pay__box")}>
        {payUrl.map((itemUrl, index) => {
          return (
            <li key={index} className={cx("pay__item--logo")}>
              <img src={itemUrl} alt={index} />
            </li>
          );
        })}
      </ul>
      <div className={cx("title", "driver--title")}>ĐƠN VỊ VẬN CHUYỂN</div>
      <ul className={cx("box--shared", "driver__box")}>
        {shippingInit.map((itemUrl, index) => {
          return (
            <li key={index} className={cx("driver__item--logo")}>
              <img src={itemUrl} alt={index} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PayAndDriver;
