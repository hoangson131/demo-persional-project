import CartContainer from "./CartContainer";
import HeaderCart from "./HeaderCart";
import CartContainerProducts from "./CartContainerProducts";
import ScrollTop from "~/components/ScrollTop";

function Cart() {
    return (
        <div>
            <ScrollTop/>
            <HeaderCart/>
            <CartContainer/>
            <CartContainerProducts />
        </div>
    );
}

export default Cart;