import { createReducer } from "@reduxjs/toolkit";

import { 
    actions,
    buyProduct
 } from "./actions";
import { products as allProducts } from "~/allProduct"; 

const initialState = {
    products: allProducts,
    cart:[]
}

const productsReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(buyProduct, actions.buyProduct)
    .addDefaultCase(state => state)
})

export default productsReducer;