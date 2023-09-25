import { createAction } from "@reduxjs/toolkit";

export const buyProduct = createAction("products/buyProduct")
export const updateProduct = createAction("products/updateProduct")
export const removeProduct = createAction("products/removeProduct")
export const increaseProduct = createAction("products/increaseProduct")
export const decreaseProduct = createAction("products/decreaseProduct")
export const toggleCheckedProduct = createAction("products/toggleCheckedProduct")
export const toggleCheckedAll = createAction("products/toggleCheckedAll")


export const actions = {
    buyProduct: (state,action) => {
        const newproductID = action.payload.idProduct
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
        return { ...state,
            cart: state.cart.filter(product => product.idProduct !== action.payload)
        }

    },
    updateProduct: (state, action) => {
        const idChangequality = [action.payload.id]
        const newState = {...state}
        newState.cart.forEach(product => {
            if(idChangequality.includes(product.idProduct) ) {
                product.quanlity = action.payload.value
                return newState
            } else {
                return newState
            }
        })
    },
    toggleCheckedProduct: (state, action) => {
        const newState = {...state}
        newState.cart.forEach( product => {
            if (product.idProduct === action.payload) {
                product.checked = !product.checked
            } else {
                return Error("no Product with id" + product.id)
            }          
        })
    },
    toggleCheckedAll: (state, action) => {
        const newSate = {...state}
        newSate.cart.forEach(product => {
            if(product.checked !== action.payload) {
                product.checked = action.payload
            } else {
                return
            }
            return newSate
        })
    }

}
