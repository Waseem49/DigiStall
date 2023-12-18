import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addtocart: (state, action) => {
      console.log(state, action);
      state.push(action.payload);
    },
    removefromcart: (state, action) => {
      return state.filter((el) => el.id !== action.payload);
    },
  },
});

export const { addtocart, removefromcart } = CartSlice.actions;
export default CartSlice.reducer;
