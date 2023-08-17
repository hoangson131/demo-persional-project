import { createAction } from "@reduxjs/toolkit";

export const buyProduct = createAction("products/buyProduct")
export const updateProduct = createAction("products/updateProduct")

export const actions = {
    buyProduct: (state,action) => {
        const newproductID = action.payload.id
        console.group('Action:',action);
        console.log("State:",state)
        console.log("Action:",action);
        console.groupEnd()
        const existingProduct = state.cart.find(product => product.id === newproductID)
        if (existingProduct) {
            return state         
        } else {
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        }
    },
    updateProduct: (state, action) => {
        
    }
}
