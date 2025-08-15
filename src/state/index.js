import { configureStore, createSlice } from "@reduxjs/toolkit";
import { act } from "react";



const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    originalItems: [], 
    sortByName: false,
    sortByPrice: false,
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
      state.originalItems = action.payload; 
    },
    setAddProduct: (state, action) => {
      state.items.push(action.payload);
    },
    setFilteredProducts: (state, action) => {
      const filteredProducts = state.originalItems.filter(
        (product) => product.category === action.payload
      );
      state.items = filteredProducts;
      // state.originalItems = filteredProducts; 
    },
    setSortByName: (state) => {
      state.sortByName = !state.sortByName;
      state.sortByPrice = false; 
      if (state.sortByName) {
        state.items = [...state.items].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      } else {
        state.items = [...state.originalItems]; 
      }
    },
    setSortByPrice: (state) => {
      state.sortByPrice = !state.sortByPrice;
      state.sortByName = false; 
      if (state.sortByPrice) {
        state.items = [...state.items].sort((a, b) => a.price - b.price);
      } else {
        state.items = [...state.originalItems];
      }
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

export const {
  setProducts,
  setAddProduct,
  setFilteredProducts,
  setSortByName,
  setSortByPrice,
  // setSortByNameValue,
  // setSortByPriceValue,
} = productSlice.actions;
export const { setAdmin } = userSlice.actions;

const rootReducer = {
  product: productSlice.reducer,
  user: userSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
