import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: null,
};

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        try {
            const response = await axios.get("http://localhost:9000/stickers");
            return response.data;
        } catch (err) {
            console.log(err);
        }
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = "completed";
        },
        [fetchProducts.rejected]: (state, action) => {
            state.status = "failed";
        },
    },
});

export default productsSlice.reducer;
