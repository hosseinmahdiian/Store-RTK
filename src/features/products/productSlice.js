import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../servises/config";


const initialState = {
  loader: false,
  products: [],
  error: "",
};
const fetchProducts = createAsyncThunk("product/fetchProducts", () => {
  return api.get(`/products`);

});

const productsSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loader = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loader = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;
export { fetchProducts };
