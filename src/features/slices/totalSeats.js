import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    seats: [],
};

const totalSeatsSlice = createSlice({
    name: 'totalSeats',
    initialState,
    reducers: {
       setTotalSeats (state, action) {
        state.seats = action.payload;
       } 
    }
});

export const { setTotalSeats } = totalSeatsSlice.actions;

export default totalSeatsSlice.reducer;

