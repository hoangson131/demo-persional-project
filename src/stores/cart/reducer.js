import { createReducer } from "@reduxjs/toolkit";
import { dataBase } from "~/database";
import { 
    actions,
    buyProduct
 } from "./actions";

const initialState = {
    products: {dataBase},
    cart:[{
        'id': 1,
        'title': 'Thời Trang Nam',
        'imageUrl': 'https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn'
      }]
}

const productsReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(buyProduct, actions.buyProduct)
    .addDefaultCase(state => state)
})

export default productsReducer;