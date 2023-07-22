import BannerSub from "./Bannersub";
import FlashSale from "./FlashSale";
import HeaderHomePage from "./HeaderHomePage";
import ShopeeMall from "./ShopeeMall";

function ContainerHomePage() {
    return ( 
        <>
            <HeaderHomePage/>
            <FlashSale/>
            <BannerSub/>
            <ShopeeMall/>
        </>
     );
}

export default ContainerHomePage;