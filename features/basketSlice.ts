//@ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface BasketState {
  items: [];
}

const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      state.value -= 1;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const selectedBasketItems = (state: any) => state.basket.items;

export default basketSlice.reducer;
