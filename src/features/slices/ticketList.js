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
            console.log('action', action);
            const { fromCityId, toCityId, start, end } = action.payload;
            state.fromCityId = fromCityId;
            state.toCityId = toCityId;
            state.start = start;
            state.end = end;
        }
    }
});

export const { setTickets } = ticketListSlice.actions;

export default ticketListSlice.reducer;
