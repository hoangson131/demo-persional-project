import Footer from "../components/Footer";

function OnlyFooterLayout({children}) {
    return ( 
        <>
            {children}
            <Footer/>
        </>
     );
}

export default OnlyFooterLayout;