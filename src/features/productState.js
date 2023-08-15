import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'productsApi',
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


export const { getProductsFailure, getProductsFetch, getProductsSuccess } = productSlice.actions;

export default productSlice.reducer;