import { createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
  LOADING: "LOADING",
  IDLE: "IDLE",
  ERROR: "Error",
});

export const ProductSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUS.IDLE,
  },
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setStatus, setProducts } = ProductSlice.actions;
export default ProductSlice.reducer;

export function fetchProducts() {
  return async function fetchProductsThunk(dispatch) {
    dispatch(setStatus(STATUS.LOADING));

    try {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();
      dispatch(setProducts(data));
      dispatch(setStatus(STATUS.IDLE));
    } catch (error) {
      console.log(error.message);
      dispatch(setStatus(STATUS.ERROR));
    }
  };
}
