import classNames from "classnames/bind";
import styles from "./MainLogin.module.scss";
import { IconEyeHide, IconEyeShow } from "~/assets/icon";
import { Link, useNavigate } from "react-router-dom";
import { config } from "~/config";
import { useRef, useState } from "react";
import axios from "axios";
import Button from "~/components/Button";
import Cookies from "js-cookie";

const cx = classNames.bind(styles);
function MainLogin() {
  let navigate = useNavigate()
  const passwordRef = useRef()
  const [IconPass, setIcon] = useState(<IconEyeHide/>) 
  const account = {
    username: String,
    password: String
  }


  // handles logic

  const handleAccountChange = (username) => {
    account.username = username
  }

  const handlePasswordChange = (password) => {
    account.password = password
  }

  const handleShowPassword = () => {
    if(passwordRef.current.type === 'password') {
      passwordRef.current.type = 'text'
      setIcon(IconEyeShow)
    } else {
      passwordRef.current.type = 'password'
      setIcon(IconEyeHide)
    }
    // const btnShowPassword = document.getElementById('password')
    // btnShowPassword.hidden = false
  }

  const handleEnterPass = (e) => {
    if(e.keyCode === 13) {
      if(typeof account.password === 'function' || typeof account.username === 'function') {
        e.preventDefault()
        console.log("xu ly loi~ thieu 1 trong 2 key");
      } else {
        e.preventDefault();
        handleLogin()
      }
    } 
  }

  const handleLogin = () => {
    console.log(account);
    axios.post('https://demo-server-shopee.onrender.com/api/users/login', account)
    .then((res) => {
      console.log(res.data.token);
      if(res.status === 200) {
        Cookies.set('token', res.data.token, 1);
        navigate(`..`)
      } else {
        alert(res.status)
      }
    })
    .catch((err) => console.log(err))
  }

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
              <form>
                <div className={cx("login__account")}>
                  <input
                    id="account"
                    type="text"
                    placeholder="Email/Số điện thoại/Tên đăng nhập"
                    onKeyDown={e => handleEnterPass(e)}
                    onChange={e => handleAccountChange(e.target.value)}
                  />
                </div>
                <div className={cx("login__pass")}>
                  <input 
                    type="password" 
                    ref={passwordRef}
                    id="password" 
                    placeholder="Mật Khẩu"
                    onKeyDown={e => handleEnterPass(e)}
                    onChange={e => handlePasswordChange(e.target.value)}
                  />
                  <button className={cx('btn--pass')} onClick={() => handleShowPassword()}>{IconPass}</button>
                </div>
              </form>
              <div className={cx("login__access")}>
                <Button
                  className={cx("btn--login")}
                  onClick={() => handleLogin()}
                >ĐĂNG NHẬP</Button>
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
              <Link to={config.register}><div className={cx('register')}>Đăng ký</div></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLogin;
