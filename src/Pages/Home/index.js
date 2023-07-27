import classNames from "classnames/bind";

import BannerHome from "./BannerHome";
import ContainerHomePage from "./Container";
import FooterHomePage from "./FooterHomePage";
import styles from './Home.module.scss'
import { useSelector } from "react-redux";
import { selectorCart } from "~/stores/cart/selectors";

const cx = classNames.bind(styles)

function Home() {
    const listCart = useSelector(selectorCart)
    console.log(listCart);
    return (
    <div className={cx('wrapper')}>
        <BannerHome/>
        <ContainerHomePage/>
        <FooterHomePage/>
    </div>
    );
}

export default Home;