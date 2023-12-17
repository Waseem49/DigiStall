import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUS = Object.freeze({
  LOADING: "loading",
  IDLE: "idle",
  ERROR: "error",
});

export const AdminSlice = createSlice({
  name: "admin",
  initialState: {
    status: STATUS.LOADING,
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

const { setStatus } = AdminSlice.actions;
export default AdminSlice.reducer;

export const AddProducts = (product) => async (dispatch) => {
  dispatch(setStatus(STATUS.LOADING));

  try {
    await axios.post("https://dummyjson.com/products?limit=100", product);
    dispatch(setStatus(STATUS.IDLE));
  } catch (error) {
    console.error(error);
    dispatch(setStatus(STATUS.ERROR));
  }
};
