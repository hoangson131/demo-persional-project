import CartContainer from "./CartContainer";
import HeaderCart from "./HeaderCart";
import CartContainerProducts from "./CartContainerProducts";

function Cart() {
    return (
        <div>
            <HeaderCart/>
            <CartContainer/>
            <CartContainerProducts />
        </div>
    );
}

export default Cart;