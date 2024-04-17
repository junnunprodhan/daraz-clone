import { createSlice } from "@reduxjs/toolkit";

type InitState = {
  product: Product[];
  loading: boolean;
};
const initialState: InitState = {
  product: [],
  loading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
