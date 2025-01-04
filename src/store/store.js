import { configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./slices/expense";

export const store = configureStore({
  reducer: {
    expenses: expenseSlice.reducer,
  },
});
