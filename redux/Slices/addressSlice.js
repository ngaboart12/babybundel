import { createSlice } from '@reduxjs/toolkit';
import { addToCart } from './cartSlice'; // Import the addAddressToCart action from cartSlice

const addressSlice = createSlice({
  name: 'address',
  initialState: {
    address: [], // Modify the initial state if needed
  },
  reducers: {
    addAddress: (state, action) => {
      state.address.push(action.payload);
      // Dispatch the addAddressToCart action when adding an address
      addToCart(action.payload);
    },
  },
});

export const { addAddress } = addressSlice.actions;
export default addressSlice.reducer;