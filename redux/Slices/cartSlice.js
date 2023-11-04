import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload._id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const removeFromCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = removeFromCart;
    },
    incrementQuantity: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload._id
      );
      itemInCart.quantity++;
    },
    decrementQuantiy: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload._id
      );
      if (itemInCart.quantity == 1) {
        const removeFromCart = state.cart.filter(
          (item) => item.id !== action.payload._id
        );
        state.cart = removeFromCart;
      } else {
        itemInCart.quantity--;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantiy,
} = cartSlice.actions;
export default cartSlice.reducer;
