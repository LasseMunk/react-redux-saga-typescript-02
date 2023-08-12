import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        setProductList(state, action) {
            console.warn("set product list called", action.payload)
        }
    } 
});

export const { setProductList } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;