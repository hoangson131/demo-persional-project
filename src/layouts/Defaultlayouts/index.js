import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";

import Footer from "~/layouts/components/Footer";
import Header from "~/layouts/components/Header";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div className={cx("content")}>{children}</div>
      <Footer />
    </>
  );
}

export default DefaultLayout;
