import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducer";

const store = configureStore({
    reducer: {
        store: productsReducer
    }
})

console.log(store.getState());
export default store