import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    fromCityId: '',
    toCityId: '',
    start: '',
    end: ''
};

const ticketListSlice = createSlice({
    name: 'ticketList',
    initialState,
    reducers: {
        setTickets (state, action) {
            const { fromCityId, toCityId, start, end } = action.payload;
            state.fromCityId = fromCityId;
            state.toCityId = toCityId;
            state.start = start;
            state.end = end;
        },
        setNewStartDate (state, action) {
            console.log(action.payload);
            state.start = action.payload;
        },
        setNewEndDate (state, action) {
            console.log(action.payload);
            state.end = action.payload;
        }
    }
});

export const { setTickets, setNewStartDate, setNewEndDate } = ticketListSlice.actions;

export default ticketListSlice.reducer;
