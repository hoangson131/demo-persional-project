import { createAction } from "@reduxjs/toolkit";
import { selectorCart } from "./selectors";

export const buyProduct = createAction("products/buyProduct")
export const updateProduct = createAction("products/updateProduct")
export const removeProduct = createAction("products/removeProduct")
export const increaseProduct = createAction("products/increaseProduct")
export const decreaseProduct = createAction("products/decreaseProduct")


export const actions = {
    buyProduct: (state,action) => {
        const newproductID = action.payload.idProduct
        console.group('Action:',action);
        console.log("State:",state)
        console.log("Action:",action);
        console.groupEnd()
        const existingProduct = state.cart.find(product => product.idProduct === newproductID)
        if (existingProduct) {
            return state         
        } else {
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        }
    },
    increaseProduct: (state, action) => {
        const idChangequality = [action.payload.id]
        const newState = {...state}
        console.log(idChangequality);
        newState.cart.forEach(product => {
            if(idChangequality.includes(product.idProduct)) {
                product.quanlity += 1
                return newState
            } else {
                return newState
            }
        })
    },
    decreaseProduct: (state, action) => {
        const idChangequality = [action.payload.id]
        const newState = {...state}
        console.log(idChangequality);
        newState.cart.forEach(product => {
            if(idChangequality.includes(product.idProduct) && product.quanlity - 1 > 0) {
                product.quanlity -= 1
                return newState
            } else {
                return newState
            }
        })
    },
    removeProduct: (state, action) => {
        console.group('Action:',action);
        console.log("State:",state)
        console.log("Action:",action);
        console.groupEnd()
        return { ...state,
            cart: state.cart.filter(product => product.idProduct !== action.payload)
        }

    },
    updateProduct: (state, action) => {
        console.group('Action:',action);
        console.log("State:",state)
        console.log("Action:",action);
        console.groupEnd()
        const idChangequality = [action.payload.id]
        const newState = {...state}
        console.log(idChangequality);
        newState.cart.forEach(product => {
            if(idChangequality.includes(product.idProduct) ) {
                product.quanlity = action.payload.value
                return newState
            } else {
                return newState
            }
        })
    }
}
