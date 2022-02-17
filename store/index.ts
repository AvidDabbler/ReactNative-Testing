import { configureStore } from '@reduxjs/toolkit';
import {mapSlice} from './map';

export const store = configureStore({
  reducer: {
    map: mapSlice.reducer
  }
});