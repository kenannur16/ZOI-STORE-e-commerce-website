import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        isLoading: false
    },

    reducers: {
        getProductsFetch: (state) => {
            state.isLoading = true;
        },

        getProductsSuccess: (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
        },

        getProductsFailure: (state) => {
            state.isLoading = false;
        },
    }
});

console.log(products)

export const { getProductsFailure, getProductsFetch, getProductsSuccess } = productSlice.actions;

export default productSlice.reducer;