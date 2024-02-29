import { configureStore } from "@reduxjs/toolkit";
import producstReducer from "../features/products/productSlice";
import cartReducer from "../features/cart/cartSlice";

const store = configureStore({
  reducer: {
    product: producstReducer,
    cart: cartReducer,
  },
});

export default store;
