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

const userSlice = createSlice({
  name: "user", 
  initialState: {
    isAdmin: false,
  },
  reducers: {
    setAdmin: (state, action) => {
      state.isAdmin = action.payload;
    },
  },
});

export const { setProducts, setAddProduct } = productSlice.actions;
export const { setAdmin } = userSlice.actions;

const rootReducer = {
  product: productSlice.reducer,
  user: userSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
