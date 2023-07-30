import { createReducer } from "@reduxjs/toolkit";

import { 
    actions,
    buyProduct
 } from "./actions";

const initialState = {
    products: [
        
    ],
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