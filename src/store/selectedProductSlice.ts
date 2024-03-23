import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from "./productsSlice";
import { RootState } from './index';


interface SelectedProductState {
    selectedProduct: Product | null;
    showProductDetails: boolean;
}

const initialState: SelectedProductState = {
    selectedProduct: null,
    showProductDetails: false,
}


export const selectedProductSlice = createSlice({
    name: 'selectedProduct',
    initialState,
    reducers: {
        setSelectedProduct: (state, action: PayloadAction<Product>) => {
            state.selectedProduct = action.payload;
            state.showProductDetails = true;
        },
        clearSelectedProduct: (state) => {
            state.selectedProduct = null;
            state.showProductDetails = false;
        },
        setShowProductDetails: (state, action: PayloadAction<boolean>) => {
            state.showProductDetails = action.payload;
        }
    }
});

export const { setSelectedProduct, clearSelectedProduct, setShowProductDetails } = selectedProductSlice.actions;

export const selectSelectedProduct = (state: RootState) => state.selectedProduct.selectedProduct;
export const selectShowProductDetails = (state: RootState) => state.selectedProduct.showProductDetails;

export default selectedProductSlice.reducer;