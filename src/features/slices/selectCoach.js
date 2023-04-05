import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeCoach: null,
};

const selectCoachSlice = createSlice({
    name: 'selectCoach',
    initialState,
    reducers: {
       setSelectCoach(state, action) {
        console.log('action', action.payload);
        state.activeCoach = action.payload;
       } 
    }
});

export const { setSelectCoach } = selectCoachSlice.actions;

export default selectCoachSlice.reducer;
