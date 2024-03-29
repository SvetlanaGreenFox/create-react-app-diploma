import { configureStore } from '@reduxjs/toolkit';
import selectedCities from './slices/selectCities';
import selectTrain from './slices/selectTrain';
import totalSeats from './slices/totalSeats';
import sortSeats  from './slices/sortSeats';
import selectCoach from './slices/selectCoach';
import travelDate from './slices/selectDate';
import routeBack from './slices/routeBack';
import selectOptions from './slices/selectOptions';

export const store = configureStore({
  reducer: {
    selectedCities,
    selectTrain,
    totalSeats,
    sortSeats,
    selectCoach, 
    travelDate,
    routeBack,
    selectOptions
  },
})
