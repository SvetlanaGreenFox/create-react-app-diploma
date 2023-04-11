import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cityFrom: {
        id: null,
        name: ''
    },
    cityTo: {
        id: null,
        name: ''
    }
};

const selectCitiesSlice = createSlice({
    name: 'selectedCities',
    initialState,
    reducers: {
        setCityFrom (state, action) {
            const { id, name } = action.payload;
            state.cityFrom.id = id;
            state.cityFrom.name = name;
           
        },
        setCityTo (state, action) {
            const { id, name } = action.payload;
            state.cityTo.id = id;
            state.cityTo.name = name;
           
        }
    }
});

export const { setCityFrom, setCityTo } = selectCitiesSlice.actions;

export default selectCitiesSlice.reducer;
