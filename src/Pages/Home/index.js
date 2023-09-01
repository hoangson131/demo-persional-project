import classNames from "classnames/bind";

import BannerHome from "./BannerHome";
import ContainerHomePage from "./Container";
import FooterHomePage from "./FooterHomePage";
import styles from './Home.module.scss'
import { createContext } from "react";

const cx = classNames.bind(styles)

export const HomeContext = createContext()
function Home() {
    
    return (
    <div className={cx('wrapper')}>
        <BannerHome/>
        <ContainerHomePage/>
        <FooterHomePage/>
    </div>
    );
}

export default Home;