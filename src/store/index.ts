import { configureStore } from "@reduxjs/toolkit";
import mainReducer from './mainSlice';
import productsReducer from './productsSlice';
import selectedProductReducer from './selectedProductSlice';

export const store = configureStore({
    reducer: {
        main: mainReducer,
        products: productsReducer,
        selectedProduct: selectedProductReducer,
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch