import { createSlice } from '@reduxjs/toolkit';

// make a slice with name, reducers and initialState
export const expenseSlice = createSlice({
  name: 'expenses',
  initialState: [
    { id: 1, amount: 100, item: 'TV', category: 'Entertainment' },
    { id: 2, amount: 200, item: 'TV', category: 'Entertainment' },
    { id: 3, amount: 300, item: 'TV', category: 'Entertainment' },
  ],
  reducers: {
    getExpense: state => {
      // make http call to get expenses list
    },
    postExpense: (state, action) => {
      //make http call and post the expense in the firebase realtime database
      state.push(action.payload);
    },
    putExpense: (state, action) => {
      const { id, amount, item, category } = action.payload;
      // make http call and update the expense
      const expenseToUpdate = state.find(expense => expense.id === id);
      if (expenseToUpdate) {
        expenseToUpdate.amount = amount;
        expenseToUpdate.item = item;
        expenseToUpdate.category = category;
      }
    },
    deleteExpense: (state, action) => {
      // make http call and delete the expense
      return state.filter(expense => expense.id !== action.payload.id);
    },
  },
});

export const { getExpense, postExpense, putExpense, deleteExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
