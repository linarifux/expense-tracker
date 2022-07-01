import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "./reducer";
import {apiSLice} from './apiSlice'

export const store = configureStore({
  reducer: {
    expense: expenseSlice,
    [apiSLice.reducerPath]: apiSLice.reducer
  },
  middleware: GetDefaultMiddleware => GetDefaultMiddleware().concat(apiSLice.middleware)
});
