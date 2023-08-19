import CartContainer from "./CartContainer";
import HeaderCart from "./HeaderCart";
import CartContainerProducts from "./CartContainerProducts";
import { useSelector } from "react-redux";
import { selectorCart } from "~/stores/cart/selectors";
import NotProduct from "./NotProduct";


function Cart() {
    const productInCart = useSelector(selectorCart)

    return (
        <>
            <HeaderCart/>
            {productInCart.length > 0 ? <CartContainer /> : <NotProduct/>}
            <CartContainerProducts />
        </>
    );
}

export default Cart;