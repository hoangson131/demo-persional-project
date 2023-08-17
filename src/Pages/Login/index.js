import Footer from "~/Layouts/components/Footer";
import HeaderLogin from "./HeaderLogin";
import MainLogin from "./MainLogin";

function Login() {
    return ( 
        <>
            <HeaderLogin/>
            <MainLogin/>          
            <Footer/>
        </>
     )
}

export default Login;