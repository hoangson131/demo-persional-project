import CartContainer from "./CartContainer";
import HeaderCart from "./HeaderCart";
import { useSelector } from "react-redux";
import { selectorCart } from "~/stores/cart/selectors";
import NotProduct from "./NotProduct";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { config } from "~/config";

function Cart() {
    const productInCart = useSelector(selectorCart)
    
    const navigate = useNavigate()
    const checkLogin = () => {
        var token = Cookies.get('token');
        if (token === undefined) {
            navigate(config.login);
        } else {
            try {
                const decoded = jwt_decode(token)
                console.log(decoded)
            } catch (error) {
                console.log(error, "Please Login again");
            }
        }
    }

    useEffect(() => {
        checkLogin()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
            <HeaderCart/>
            {productInCart.length > 0 ? <CartContainer /> : <NotProduct/>}
        </>
    );
}

export default Cart;