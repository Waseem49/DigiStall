import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import productReducer from "./ProductSlice";
import adminReducer from "./AdminSlice";
import cartReducer from "./CartSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
    admin: adminReducer,
    cart: cartReducer,
  },
});
