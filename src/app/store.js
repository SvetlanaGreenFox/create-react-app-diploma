import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/test/test';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
