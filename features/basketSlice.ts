//@ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

// export interface BasketState {
//   items: [];
// }

const initialState = {
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
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as it's not in basket!`
        );
      }
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const selectedBasketItems = (state: any) => state.basket.items;

export const selectBasketItemsWithId = (state: any, id: any) =>
  state.basket.items.filter((item: any) => item.id === id);

export default basketSlice.reducer;
