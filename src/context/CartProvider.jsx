import { useContext, useReducer, createContext } from "react";

const CardContext = createContext();

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkOut: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      if (!state.selectedItems.find((item) => item.id == action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        selectedItems: [...state.selectedItems],
        ...sumProducts(state.selectedItems),
        checkOut: false,
      };

    case "REMOVE":
      const nweSelectedItem = state.selectedItems.filter(
        (item) => item.id != action.payload.id
      );
      return {
        selectedItems: [...nweSelectedItem],
        ...sumProducts(nweSelectedItem),
        checkOut: false,
      };

    case "INCREASE":
      const incteaseIndex = state.selectedItems.findIndex(
        (item) => item.id == action.payload.id
      );
      state.selectedItems[incteaseIndex].quantity++;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };

    case "DECREASE":
      const decteaseIndex = state.selectedItems.findIndex(
        (item) => item.id == action.payload.id
      );
      state.selectedItems[decteaseIndex].quantity--;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };

    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkOut: true,
      };

    default:
      throw new Error("invalid action");
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CardContext.Provider value={{ state, dispatch }}>
      {children}
    </CardContext.Provider>
  );
};

const useCart = () => {
  const { state, dispatch } = useContext(CardContext);
  return [state, dispatch];
};

export default CartProvider;
export { useCart };
