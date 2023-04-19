import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    options: {},
};

const selectOptionsSlice = createSlice({
    name: 'selectOptions',
    initialState,
    reducers: {
        setOptions(state, action){
            state.options = action.payload;
        }
    }
});

export const { setOptions } = selectOptionsSlice.actions;

export default selectOptionsSlice.reducer;
