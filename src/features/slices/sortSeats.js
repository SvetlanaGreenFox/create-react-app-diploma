import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  first: [],
  second: [],
  third: [],
  fourth: []  
};

const sortSeatsSlice = createSlice({
  name: 'sortSeats',
  initialState,
  reducers: {
    setSortSeats(state, action) {
      const { first, second, third, fourth } = action.payload;
      state.first = first;
      state.second = second;
      state.third = third;
      state.fourth = fourth;
    }
  }
});

export const { setSortSeats } = sortSeatsSlice.actions;

export default sortSeatsSlice.reducer;
