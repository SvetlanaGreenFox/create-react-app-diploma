import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dateEnd: null,
    dateEndArrival: null,
};

const routeBackSlice = createSlice({
    name: 'routeBack',
    initialState,
    reducers: {
        setDateEnd (state, action) {
            state.dateEnd = action.payload;
        },
        setDateEndArrival (state, action) {
            state.dateEndArrival = action.payload;
        },
    }
});

export const { setDateEnd, setDateEndArrival } = routeBackSlice.actions;

export default routeBackSlice.reducer;
