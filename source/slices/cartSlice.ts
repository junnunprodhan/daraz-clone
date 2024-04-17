import { createSlice } from "@reduxjs/toolkit";

type InitState = {
  product: CartProduct[];
};
const initialState: InitState = {
  product: [],
};

type Action = { payload: Product; type: string };
type StateAction = { payload: CartProduct; type: string };

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, { payload }: Action) => {
      const findExist = state.product.find((x) => x._id === payload._id);
      if (!findExist) {
        const price =
          payload.discountPrice && payload.price > payload.discountPrice
            ? payload.discountPrice
            : payload.price;
        const data: CartProduct = {
          ...payload,
          quantity: 1,
          totalPrice: price,
        };
        state.product.push(data);
      }
    },
    removeFromCart: (state, action: Action) => {
      const removeItem = state.product.filter(
        (x) => x._id !== action.payload._id
      );
      state.product = removeItem;
    },
    incrementQuantity: (state, { payload }: StateAction) => {
      const data: CartProduct | undefined = state.product.find(
        (x) => x._id === payload._id
      );
      if (data) {
        const price =
          payload.discountPrice && payload.price > payload.discountPrice
            ? payload.discountPrice
            : payload.price;
        const increase: CartProduct = {
          ...data,
          quantity: data.quantity + 1,
          totalPrice: data.totalPrice + price,
        };
        const index = state.product.findIndex((x) => x._id === payload._id);
        state.product[index] = increase;
      }
    },
    decrementQuantity: (state, { payload }: StateAction) => {
      const data: CartProduct | undefined = state.product.find(
        (x) => x._id === payload._id
      );
      if (data && data.quantity > 1) {
        const price =
          payload.discountPrice && payload.price > payload.discountPrice
            ? payload.discountPrice
            : payload.price;
        const decrease: CartProduct = {
          ...data,
          quantity: data.quantity - 1,
          totalPrice: data.totalPrice - price,
        };
        const index = state.product.findIndex((x) => x._id === payload._id);
        state.product[index] = decrease;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decrementQuantity,
  incrementQuantity,
} = productSlice.actions;
export default productSlice.reducer;
