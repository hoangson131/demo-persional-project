import { createReducer } from "@reduxjs/toolkit";

import { 
    actions,
    buyProduct,
    decreaseProduct,
    increaseProduct,
    removeProduct,
    toggleCheckedAll,
    toggleCheckedProduct,
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
    .addCase(toggleCheckedProduct, actions.toggleCheckedProduct)
    .addCase(toggleCheckedAll, actions.toggleCheckedAll)
    .addDefaultCase(state => state)
})

export default productsReducer;