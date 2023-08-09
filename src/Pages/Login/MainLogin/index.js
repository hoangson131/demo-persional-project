import classNames from "classnames/bind";
import styles from "./MainLogin.module.scss";
import { IconEyeShow } from "~/assets/icon";

const cx = classNames.bind(styles);
function MainLogin() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("mainlogin--outner")}>
        <div className={cx("mainlogin--inner")}>
          <div className={cx("wrapper--banner")}></div>
          <div className={cx("main__login")}>
            <div className={cx("login__header")}>
              <div className={cx("header__text")}>Đăng nhập</div>
              <div className={cx("header__QR")}>
                <div className={cx("QR__text")}>Đăng nhập với mã QR</div>
                <div className={cx("QR__scan")}>
                  <img
                    height={40}
                    width={40}
                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/QR-code-obituary.svg"
                    alt="1"
                  />
                </div>
              </div>
            </div>
            <div className={cx("login__main")}>
              <div className={cx("login__account")}>
                <input
                  type="text"
                  placeholder="Email/Số điện thoại/Tên đăng nhập"
                />
              </div>
              <div className={cx("login__pass")}>
                <input type="password" id="password" placeholder="Mật Khẩu" />
                <button className={cx('btn--pass')}><IconEyeShow width={20} height={16}/></button>
              </div>
              <div className={cx("login__access")}>
                <button className={cx("btn--login")}>ĐĂNG NHẬP</button>
                <div className={cx("access__suport")}>
                  <a className={cx("text")} href="/">
                    Quên mật khẩu
                  </a>
                  <a className={cx("text")} href="/">
                    Đăng nhập với SMS
                  </a>
                </div>
              </div>
              <div className={cx("login__other")}>
                <div className={cx("or--outner")}>
                  <span className={cx("Or")}>hoặc</span>
                </div>

                <div className={cx("other__connect")}>
                    <button className={cx("btn--connect")}>
                        <div className={cx('btn--inner')}>
                            <div className={cx('icon','facebook--icon')}></div>
                            <span className={cx('btn--text')}>Facebook</span>
                        </div>
                    </button>
                    <button className={cx("btn--connect")}>
                        <div className={cx('btn--inner')}>
                            <div className={cx('icon','google--icon')}></div>
                            <span className={cx('btn--text')}>Google</span>
                        </div>
                    </button>
                </div>
              </div>
            </div>
            <div className={cx("login__fe")}>
              <div className={cx('fe--text')}>Bạn mới biết đến Shopee?</div>
              <a className={cx('register')} href="/">Đăng ký</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLogin;
