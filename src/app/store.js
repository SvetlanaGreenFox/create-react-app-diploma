import { configureStore } from '@reduxjs/toolkit';
import ticketList from '../features/slices/ticketList';
import selectTrain from '../features/slices/selectTrain';
import totalSeats from '../features/slices/totalSeats';
import sortSeats  from '../features/slices/sortSeats';
import selectCoach from '../features/slices/selectCoach';

export const store = configureStore({
  reducer: {
    ticketList,
    selectTrain,
    totalSeats,
    sortSeats,
    selectCoach
  },
})
