import { configureStore } from '@reduxjs/toolkit';
import ticketList from '../features/slices/ticketList';
import selectTrain from '../features/slices/selectTrain';

export const store = configureStore({
  reducer: {
    ticketList,
    selectTrain,
  },
})
