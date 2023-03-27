import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/slices/test';
import ticketList from '../features/slices/ticketList';
import selectTrain from '../features/slices/selectTrain';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    ticketList,
    selectTrain,
  },
})
