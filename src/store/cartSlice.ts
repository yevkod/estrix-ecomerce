import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./productsSlice";
import { RootState } from './index';

export interface CartState {
    itemsInCart: Product[];
    showBasket: boolean;
}

const initialState: CartState = {
    itemsInCart: [],
    showBasket: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setItemInCart: (state, action: PayloadAction<Product>) => {
            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart: (state, action: PayloadAction<number>) => {
            state.itemsInCart = state.itemsInCart.filter(item => item.id !== action.payload)
        },
        deleteAllItemsFromCart: (state) => {
            state.itemsInCart = [];
        },
        setShowBasket: (state, action: PayloadAction<boolean>) => {
            state.showBasket = action.payload;
        },
    }
});

export const { setItemInCart, deleteItemFromCart, deleteAllItemsFromCart, setShowBasket } = cartSlice.actions;
export const selectShowBasket = (state: RootState) => state.cart.showBasket;
export default cartSlice.reducer;
