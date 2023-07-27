import BannerSub from "./Bannersub";
import FlashSale from "./FlashSale";
import HeaderHomePage from "./HeaderHomePage";
import SeachTrend from "./SeachTrend";
import ShopeeMall from "./ShopeeMall";
import Suggest from "./Suggest";

function ContainerHomePage() {
    return ( 
        <>
            <HeaderHomePage/>
            <FlashSale/>
            <BannerSub/>
            <ShopeeMall/>
            <SeachTrend/>
            <Suggest/>
        </>
     );
}

export default ContainerHomePage;