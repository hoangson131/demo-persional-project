import classNames from "classnames/bind";
import styles from "./MainRegister.module.scss";
import { Link } from "react-router-dom";
import { config } from "~/config";
import Button from "~/components/Button";
import axios from "axios";

const cx = classNames.bind(styles);
function MainRegister() {
  const user = {
    username: String,
    password: String
  }
  console.log("re--render");

  const handleInputAccount = (e) => {
    user.username = e.target.value
  }

  const handleInputPass = (e) => {
    user.password = e.target.value
  }

  const handleKeyDownPass = (event) => {
      if(event.keyCode === 13) {
        if(typeof user.password === 'function' || typeof user.username === 'function') {
          event.preventDefault()
          console.log("xu ly loi~ thieu 1 trong 2 key");
        } else {
          event.preventDefault();
          handleRegister()
        }
      } 
    }
  

  const handleRegister = () => {
    console.log(user);
    axios.post('http://localhost:3030/register', user)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err))
  }


  return (
    <div className={cx("wrapper")}>
      <div className={cx("mainregister--outner")}>
        <div className={cx("mainregister--inner")}>
          <div className={cx("wrapper--banner")}></div>
          <div className={cx("main__register")}>
            <div className={cx("register__header")}>
              <h1 className={cx("header__text")}>Đăng ký</h1>
            </div>
            <div className={cx("register__main")}>
              <form >
                <div className={cx("account")}>
                  <label>Tên Đăng Nhập</label><br/>
                  <input
                    type="text"
                    placeholder="Email/Số điện thoại/Tên đăng nhập"
                    onChange={(e) => handleInputAccount(e)}
                  />
                </div>
                <div className={cx("pass")}>
                  <label>Mật Khẩu</label><br/>
                  <input
                    type="password"
                    placeholder="Nhập mật khẩu"
                    onKeyDown={event => handleKeyDownPass(event)}
                    onChange={(e) => handleInputPass(e)}
                  />
                  <Button className={cx("btn--register")} onClick={(e) => e.prevenDefault() && handleRegister()}>Tiếp Theo</Button>
                </div>
              </form>

              <div className={cx("register__other")}>
                <div className={cx("or--outner")}>
                  <span className={cx("Or")}>hoặc</span>
                </div>
                <div className={cx("other__connect")}>
                    <button className={cx("btn--connect")}>
                        <div className={cx('btn--inner')}>
                            <div className={cx('icon','facebook--icon')}></div>
                            <p className={cx('btn--text')}>Facebook</p>
                        </div>
                    </button>
                    <button className={cx("btn--connect")}>
                        <div className={cx('btn--inner')}>
                            <div className={cx('icon','google--icon')}></div>
                            <p className={cx('btn--text')}>Google</p>
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
