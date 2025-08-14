import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;

const rootReducer = {
  product: productSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
