import { createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
  LOADING: "LOADING",
  IDLE: "IDLE",
  ERROR: "Error",
});

export const ProductSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: STATUS.IDLE,
  },
  reducers: {
    setProducts: (state, action) => {
      state.data = [...state.data, ...action.payload.products];
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setStatus, setProducts } = ProductSlice.actions;
export default ProductSlice.reducer;

export function fetchProducts(skip) {
  return async function fetchProductsThunk(dispatch) {
    dispatch(setStatus(STATUS.LOADING));

    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${skip * 10}`
      );
      const data = await res.json();
      dispatch(setProducts(data));
      dispatch(setStatus(STATUS.IDLE));
    } catch (error) {
      console.log(error.message);
      dispatch(setStatus(STATUS.ERROR));
    }
  };
}
