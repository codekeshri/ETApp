import { createSlice } from '@reduxjs/toolkit';

export const expenseSlice = createSlice({
  name: 'expenses',
  initialState: [],
  reducers: {
    getExpense: (state, action) => {
      return action.payload;
    },
    postExpense: (state, action) => {
      state.push(action.payload);
    },
    putExpense: (state, action) => {
      const { id, amount, item, category } = action.payload;
      const expenseToUpdate = state.find(expense => expense.id === id);
      if (expenseToUpdate) {
        expenseToUpdate.amount = amount;
        expenseToUpdate.item = item;
        expenseToUpdate.category = category;
      }
    },
    deleteExpense: (state, action) => {
      return state.filter(expense => expense.id !== action.payload.id);
    },
  },
});

export const { getExpense, postExpense, putExpense, deleteExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
