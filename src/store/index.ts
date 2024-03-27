import { configureStore } from "@reduxjs/toolkit";
import mainReducer from './mainSlice';
import productsReducer from './productsSlice';
import selectedProductReducer from './selectedProductSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
    reducer: {
        main: mainReducer,
        products: productsReducer,
        selectedProduct: selectedProductReducer,
        cart: cartReducer,
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch