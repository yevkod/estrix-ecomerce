import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
    [x: string]: any;
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[],
}


export const fetchProducts = createAsyncThunk<Product[], void, { rejectValue: string }>(
    'products/fetchProducts',
    async function (_, { rejectWithValue }) {
        const response = await fetch('https://dummyjson.com/products');

        if (!response.ok) {
            return rejectWithValue('Server Error')
        }

        const data = await response.json();

        return data;
    }
)

interface ProductsState {
    entities: Record<number, Product>;
    loading: boolean;
    error: string | null;
    status: string;
}


const initialState: ProductsState = {
    entities: {},
    loading: false,
    error: null,
    status: ''
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        productsReceived(state, action: PayloadAction<Product[]>) {
            action.payload.forEach((product) => {
                state.entities[product.id] = product;
            })
            state.loading = false;
            state.error = null;
        },
        productsRequestFailed(state, action: PayloadAction<string>) {
            state.status = 'failed';
            state.error = action.payload;
            state.loading = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.status = 'pending';
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.entities = action.payload;
                state.loading = false;
                state.status = 'success'
            })
    }
})

export const { productsReceived, productsRequestFailed } = productsSlice.actions;

export default productsSlice.reducer;