import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getExpense, postExpense, putExpense, deleteExpense } from '../store/slices/expense';

function Expense() {
  const expenses = useSelector(state => state.expenses);

  const [amount, setAmount] = useState('');
  const [item, setItem] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const addExpenseHandler = e => {
    e.preventDefault();
    if (id) {
      dispatch(putExpense({ amount, item, category }));
    } else {
      dispatch(
        postExpense({
          id: expenses[expenses.length - 1].id + 1,
          amount,
          item,
          category,
        })
      );
    }
  };

  const editHandler = (expense, event) => {
    event.preventDefault();
    const matchedExpense = expenses.filter(item => expense.id === item.id);
    console.log(matchedExpense);
    // dispatch(putExpense(matchedExpense));
    setAmount(expense.amount);
    setItem(expense.item);
    setCategory(expense.category);

    //make a post request and update data in expenses
  };

  const deleteHandler = (expense, event) => {
    event.preventDefault();
    const { id } = expense;
    dispatch(deleteExpense(expense));
  };

  return (
    <div>
      <div className="contain">
        <div className="row">
          <div className="col-sm mt-3 ">
            <div>
              <h3>Add Expense</h3>
              <form>
                <div className="form-group">
                  <label>Amount</label>
                  <input type="number" className="form-control" placeholder="Amount" onChange={e => setAmount(e.target.value)} value={amount} />
                </div>
                <div className="form-group">
                  <label>Item</label>
                  <input type="text" className="form-control" placeholder="Item" onChange={e => setItem(e.target.value)} value={item} />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <input type="text" className="form-control" placeholder="Category" onChange={e => setCategory(e.target.value)} value={category} />
                </div>
                <button type="submit" className="btn btn-primary mt-2" onClick={addExpenseHandler}>
                  Add
                </button>
              </form>
            </div>
          </div>
          <div className="col-sm mt-3 ">
            <div>
              <div className="mt-3">
                <h3>List</h3>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Amount</th>
                    <th>Item</th>
                    <th>Category</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.map((expense, index) => (
                    <tr key={index}>
                      <td>{expense.amount}</td>
                      <td>{expense.item}</td>
                      <td>{expense.category}</td>
                      <td>
                        <button className="btn btn-warning btn-sm" onClick={event => editHandler(expense, event)}>
                          edit
                        </button>
                        <button className="btn btn-danger btn-sm ms-2" onClick={event => deleteHandler(expense, event)}>
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expense;
