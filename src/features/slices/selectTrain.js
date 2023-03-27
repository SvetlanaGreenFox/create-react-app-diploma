import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
};

const selectTrainSlice = createSlice({
    name: 'selectTrain',
    initialState,
    reducers: {
       setSelectTrain (state, action) {
        state.id = action.payload;
       } 
    }
});

export const { setSelectTrain } = selectTrainSlice.actions;

export default selectTrainSlice.reducer;
