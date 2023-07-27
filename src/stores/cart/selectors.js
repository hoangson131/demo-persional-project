import { createSelector } from "reselect";

export const selectorProducts = (state) => state.store.products
export const selectorCart = (state) => state.store.cart;

export const listCartSelector = createSelector(
    selectorProducts,
    selectorCart,
    (listProduct, productsCart) => {
        const listIdProductCart = productsCart.map(product => product.id)
        return listProduct.filter(product => product.includes(listIdProductCart))
    }
)

export const totalPriceCart = createSelector(
    selectorCart,
    products => {
        products.reduce((totalPrice,product) => {
            return totalPrice + (product.quantity * product.price) * product.voucher
        },0)
    }
)