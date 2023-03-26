//@ts-nocheck
import { createSlice } from "@reduxjs/toolkit";


export interface BasketState {}

const initialState: any = {
  restaurant: {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null,
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;
export const selectRestaurant = (state: any) => state.restaurant.restaurant;

export default restaurantSlice.reducer;
