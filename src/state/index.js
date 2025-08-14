import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    setAddProduct: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { setProducts, setAddProduct } = productSlice.actions;

const rootReducer = {
  product: productSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
