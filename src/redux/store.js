import { configureStore } from '@reduxjs/toolkit';
import ticketList from './slices/ticketList';
import selectTrain from './slices/selectTrain';
import totalSeats from './slices/totalSeats';
import sortSeats  from './slices/sortSeats';
import selectCoach from './slices/selectCoach';

export const store = configureStore({
  reducer: {
    ticketList,
    selectTrain,
    totalSeats,
    sortSeats,
    selectCoach
  },
})
