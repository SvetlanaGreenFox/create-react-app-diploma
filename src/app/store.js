import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/slices/test';
import ticketList from '../features/slices/ticketList';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    ticketList,
  },
})
