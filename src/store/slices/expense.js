import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    getExpense: (state) => {
      state.value += 1;
    },
    postExpense: (state) => {
      state.value -= 1;
    },
    putExpense: (state, action) => {
      state.value += action.payload;
    },
    deleteExpense: (state, action) => {
      state.value = 0;
    },
  },
});

export const { getExpense, postExpense, putExpense, deleteExpense } =
  expenseSlice.actions;

export default expenseSlice.reducer;
