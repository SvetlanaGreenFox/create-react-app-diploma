import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    start: null,
    startArrival: null,
    end: null,
    endArrival: null
};

const selectDateSlice = createSlice({
    name: 'travelDate',
    initialState,
    reducers: {
        setStartDate (state, action) {
            state.start = action.payload;
        },
        setEndDate (state, action) {
            state.end = action.payload;
        },
    }
});

export const { setStartDate, setEndDate } = selectDateSlice.actions;

export default selectDateSlice.reducer;
