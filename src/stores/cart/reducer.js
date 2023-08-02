import { createReducer } from "@reduxjs/toolkit";
import { products } from "~/allProduct";

import { 
    actions,
    buyProduct
 } from "./actions";

const initialState = {
    products: products,
    cart:[{
        'id': 1,
        'price': 123,
        'quantity': 100
      }]
}

const productsReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(buyProduct, actions.buyProduct)
    .addDefaultCase(state => state)
})

export default productsReducer;