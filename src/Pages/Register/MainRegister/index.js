import classNames from "classnames/bind";
import styles from "./MainRegister.module.scss";
import { Link } from "react-router-dom";
import { config } from "~/config";
import { useRef } from "react";

const cx = classNames.bind(styles);
function MainRegister() {
  const valueInput = useRef('')

  const handleNumberInput = (value) => {
    console.log(value);
    return valueInput.current = value
  }

  const handleRegister = () => {
    fetch('http://localhost:3030/register/',{
      method: 'POST',
      body: JSON.stringify({
        userPhone: valueInput.current
      })
    })
    .then((response) => {
      return response.json()
    })
    .then((res) => {
      console.log(res);
    })
    .catch(() => console.error(Error))
  }


  return (
    <div className={cx("wrapper")}>
      <div className={cx("mainregister--outner")}>
        <div className={cx("mainregister--inner")}>
          <div className={cx("wrapper--banner")}></div>
          <div className={cx("main__register")}>
            <div className={cx("register__header")}>
              <div className={cx("header__text")}>Đăng ký</div>
            </div>
            <div className={cx("register__main")}>
              <div className={cx("register__account")}>
                <input
                  type="text"
                  placeholder="Số điện thoại"
                  onChange={(e) => handleNumberInput(e.target.value)}
                />
              </div>
              <div className={cx("register__access")}>
                <button onClick={handleRegister} className={cx("btn--register")}>Tiếp Theo</button>
              </div>
              <div className={cx("register__other")}>
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
              <div className={cx('note')}>
                <p>Bằng việc đăng kí, bạn đã đồng ý với Shopee về <span>Điều khoản dịch vụ</span> & <span>Chính sách bảo mật</span></p>
              </div>
            </div>
            <div className={cx("register__fe")}>
              <div className={cx('fe--text')}>Bạn đã có tài khoản?</div>
              <Link to={config.login}><div className={cx('register')} >Đăng nhập</div></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainRegister;
