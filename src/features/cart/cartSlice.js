import { createSlice } from "@reduxjs/toolkit";
import { sumPrice, sumQUantity } from "../../helpers/helper";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkOut: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((item) => item.id == action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        state.itemsCounter = sumQUantity(state.selectedItems);
        state.total = sumPrice(state.selectedItems);
        state.checkOut = false;
      }
    },
    removItem: (state, action) => {
      const newSelectedItem = state.selectedItems.filter(
        (item) => item.id != action.payload.id
      );

      state.selectedItems = newSelectedItem;
      state.itemsCounter = sumQUantity(state.selectedItems);
      state.total = sumPrice(state.selectedItems);
    },
    increase: (state, action) => {
      const indexIncrease = state.selectedItems.findIndex(
        (item) => item.id == action.payload.id
      );

      state.selectedItems[indexIncrease].quantity++;
      state.itemsCounter = sumQUantity(state.selectedItems);
      state.total = sumPrice(state.selectedItems);
    },
    decrease: (state, action) => {
      const indexDecrease = state.selectedItems.findIndex(
        (item) => item.id == action.payload.id
      );
      state.selectedItems[indexDecrease].quantity--;
      state.itemsCounter = sumQUantity(state.selectedItems);
      state.total = sumPrice(state.selectedItems);
    },
    checkOut: (state) => {
      state.selectedItems = [];
      state.itemsCounter = 0;
      state.total = 0;
      state.checkOut = true;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removItem, checkOut, increase, decrease } =
  cartSlice.actions;
