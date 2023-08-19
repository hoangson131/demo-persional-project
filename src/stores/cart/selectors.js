import { createSelector } from "reselect";

export const selectorProducts = (state) => state.store.products
export const selectorCart = (state) => state.store.cart;

export const productsCartSelector = createSelector(
    selectorProducts,
    selectorCart,
    (listProduct, productsCart) => {
        const listIdProductCart = productsCart.map(product => product.idProduct)
        return listProduct.filter(product => listIdProductCart.includes(product.id))
    }
)



export const totalPriceCart = createSelector(
    selectorCart,
    products => {
        let productCheck = products.filter(product => product.checked === true)
        return productCheck.reduce((sum, product) => {
            return sum += product.price * product.quanlity
        },0)
    }
)

