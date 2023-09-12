import classNames from "classnames/bind";

import BannerHome from "./BannerHome";
import ContainerHomePage from "./Container";
import FooterHomePage from "./FooterHomePage";
import styles from './Home.module.scss'
// import { useEffect } from "react";
// import axios from "axios";

const cx = classNames.bind(styles)

function Home() {
        // useEffect(() => {
        //     axios.get('http://localhost:3030/login', {
        //         withCredentials: true,
        //     })
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch(err => console.log(err))
        // },[])

    return (
    <div className={cx('wrapper')}>
        <BannerHome/>
        <ContainerHomePage/>
        <FooterHomePage/>
    </div>
    );
}

export default Home;