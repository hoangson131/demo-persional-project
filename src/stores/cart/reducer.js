import { createReducer } from "@reduxjs/toolkit";

import { 
    actions,
    buyProduct,
    decreaseProduct,
    increaseProduct,
    removeProduct,
    updateProduct
 } from "./actions";
import { products as allProducts } from "~/allProduct"; 

const initialState = {
    products: allProducts,
    cart:[]
}

const productsReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(buyProduct, actions.buyProduct)
    .addCase(increaseProduct, actions.increaseProduct)
    .addCase(decreaseProduct, actions.decreaseProduct)
    .addCase(removeProduct, actions.removeProduct)
    .addCase(updateProduct, actions.updateProduct)
    .addDefaultCase(state => state)
})

export default productsReducer;